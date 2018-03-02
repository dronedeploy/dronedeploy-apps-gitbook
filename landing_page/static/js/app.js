/*
* debouncedresize: special jQuery event that happens once after a window resize
*
* latest version and complete README available on Github:
* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
*
* Copyright 2011 @louis_remi
* Licensed under the MIT license.
*/
var $event = $.event,
$special,
resizeTimeout;

$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
				$event.dispatch.apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 250
};

// ======================= imagesLoaded Plugin ===============================
// https://github.com/desandro/imagesloaded

// $('#my-container').imagesLoaded(myFunction)
// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images

// callback function gets image collection as argument
//  this is the container

// original: MIT license. Paul Irish. 2010.
// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

// blank image data-uri bypasses webkit log warning (thx doug jones)
var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

var loadAnimations = function() {

};

$.fn.imagesLoaded = function( callback ) {
	var $this = this,
		deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
		hasNotify = $.isFunction(deferred.notify),
		$images = $this.find('img').add( $this.filter('img') ),
		loaded = [],
		proper = [],
		broken = [];

	// Register deferred callbacks
	if ($.isPlainObject(callback)) {
		$.each(callback, function (key, value) {
			if (key === 'callback') {
				callback = value;
			} else if (deferred) {
				deferred[key](value);
			}
		});
	}

	function doneLoading() {
		var $proper = $(proper),
			$broken = $(broken);

		if ( deferred ) {
			if ( broken.length ) {
				deferred.reject( $images, $proper, $broken );
			} else {
				deferred.resolve( $images );
			}
		}

		if ( $.isFunction( callback ) ) {
			callback.call( $this, $images, $proper, $broken );
		}
	}

	function imgLoaded( img, isBroken ) {
		// don't proceed if BLANK image, or image is already loaded
		if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
			return;
		}

		// store element in loaded images array
		loaded.push( img );

		// keep track of broken and properly loaded images
		if ( isBroken ) {
			broken.push( img );
		} else {
			proper.push( img );
		}

		// cache image and its state for future calls
		$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

		// trigger deferred progress method if present
		if ( hasNotify ) {
			deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
		}

		// call doneLoading and clean listeners if all images are loaded
		if ( $images.length === loaded.length ){
			setTimeout( doneLoading );
			$images.unbind( '.imagesLoaded' );
		}
	}

	// if no images, trigger immediately
	if ( !$images.length ) {
		doneLoading();
	} else {
		$images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
			// trigger imgLoaded
			imgLoaded( event.target, event.type === 'error' );
		}).each( function( i, el ) {
			var src = el.src;

			// find out if this image has been already checked for status
			// if it was, and src has not changed, call imgLoaded on it
			var cached = $.data( el, 'imagesLoaded' );
			if ( cached && cached.src === src ) {
				imgLoaded( el, cached.isBroken );
				return;
			}

			// if complete is true and browser supports natural sizes, try
			// to check for image status manually
			if ( el.complete && el.naturalWidth !== undefined ) {
				imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
				return;
			}

			// cached images don't fire load sometimes, so we reset src, but only when
			// dealing with IE, or image is complete (loaded) and failed manual check
			// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
			if ( el.readyState || el.complete ) {
				el.src = BLANK;
				el.src = src;
			}
		});
	}

	return deferred ? deferred.promise( $this ) : $this;
};

var Grid = (function() {

		// list of items
	var $grid = $( '#og-grid' ),
		// the items
		$items = $grid.children( 'li' ),
		// current expanded item's index
		current = -1,
		// position (top) of the expanded item
		// used to know if the preview will expand in a different row
		previewPos = -1,
		// extra amount of pixels to scroll the window
		scrollExtra = 0,
		// extra margin when expanded (between preview overlay and the next items)
		marginExpanded = 10,
		$window = $( window ), winsize,
		$body = $( 'html, body' ),
		// transitionend events
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		// support for csstransitions
		support = Modernizr.csstransitions,
		// default settings
		settings = {
			minHeight : 500,
			speed : 350,
			easing : 'ease'
		};

	function init( config ) {

		// the settings..
		settings = $.extend( true, {}, settings, config );

		// preload all images
		$grid.imagesLoaded( function() {

			// save item´s size and offset
			saveItemInfo( true );
			// get window´s size
			getWinSize();
			// initialize some events
			initEvents();

		} );

	}

	// add more items to the grid.
	// the new items need to appended to the grid.
	// after that call Grid.addItems(theItems);
	function addItems( $newitems ) {

		$items = $items.add( $newitems );

		$newitems.each( function() {
			var $item = $( this );
			$item.data( {
				offsetTop : $item.offset().top,
				height : $item.height()
			} );
		} );

		initItemsEvents( $newitems );

	}

	// saves the item´s offset top and height (if saveheight is true)
	function saveItemInfo( saveheight ) {
		$items.each( function() {
			var $item = $( this );
			$item.data( 'offsetTop', $item.offset().top );
			if( saveheight ) {
				$item.data( 'height', $item.height() );
			}
		} );
	}

	function initEvents() {

		// when clicking an item, show the preview with the item´s info and large image.
		// close the item if already expanded.
		// also close if clicking on the item´s cross
		initItemsEvents( $items );

		// on window resize get the window´s size again
		// reset some values..
		$window.on( 'debouncedresize', function() {

			scrollExtra = 0;
			previewPos = -1;
			// save item´s offset
			saveItemInfo();
			getWinSize();
			var preview = $.data( this, 'preview' );
			if( typeof preview != 'undefined' ) {
				hidePreview();
			}

		} );

	}

	function initItemsEvents( $items ) {
		$items.on( 'click', 'span.og-close', function() {
			hidePreview();
			return false;
		} ).children( 'a' ).on( 'click', function(e) {

			var $item = $( this ).parent();
			// check if item already opened
			current === $item.index() ? hidePreview() : showPreview( $item );
			return false;

		} );
	}

	function getWinSize() {
		winsize = { width : $window.width(), height : $window.height() };
	}

	function showPreview( $item ) {

		var preview = $.data( this, 'preview' ),
			// item´s offset top
			position = $item.data( 'offsetTop' );

		scrollExtra = 0;

		// if a preview exists and previewPos is different (different row) from item´s top then close it
		if( typeof preview != 'undefined' ) {

			// not in the same row
			if( previewPos !== position ) {
				// if position > previewPos then we need to take te current preview´s height in consideration when scrolling the window
				if( position > previewPos ) {
					scrollExtra = preview.height;
				}
				hidePreview();
			}
			// same row
			else {
				preview.update( $item );
				return false;
			}

		}

		// update previewPos
		previewPos = position;
		// initialize new preview for the clicked item
		preview = $.data( this, 'preview', new Preview( $item ) );
		// expand preview overlay
		preview.open();

	}

	function hidePreview() {
		current = -1;
		var preview = $.data( this, 'preview' );
		preview.close();
		$.removeData( this, 'preview' );
	}

	// the preview obj / overlay
	function Preview( $item ) {
		this.$item = $item;
		this.expandedIdx = this.$item.index();
		this.create();
		this.update();
	}

	Preview.prototype = {
		create : function() {
			// create Preview structure:
			this.$title = $( '<h3></h3>' );
			this.$description = $( '<p></p>' );
//			this.$href = $( '<a href="#">Visit website</a>' );
			this.$details = $( '<div class="og-details"></div>' ).append( this.$title, this.$description );
			this.$loading = $( '<div class="og-loading"></div>' );
			this.$fullimage = $( '<div class="og-fullimg"></div>' ).append( this.$loading );
			this.$closePreview = $( '<span class="og-close"></span>' );
			this.$previewInner = $( '<div class="og-expander-inner"></div>' ).append( this.$closePreview, this.$fullimage, this.$details );
			this.$previewEl = $( '<div class="og-expander"></div>' ).append( this.$previewInner );
			// append preview element to the item
			this.$item.append( this.getEl() );
			// set the transitions for the preview and the item
			if( support ) {
				this.setTransition();
			}
		},
		update : function( $item ) {

			if( $item ) {
				this.$item = $item;
			}

			// if already expanded remove class "og-expanded" from current item and add it to new item
			if( current !== -1 ) {
				var $currentItem = $items.eq( current );
				$currentItem.removeClass( 'og-expanded' );
				this.$item.addClass( 'og-expanded' );
				// position the preview correctly
				this.positionPreview();
			}

			// update current value
			current = this.$item.index();

			// update preview´s content
			var $itemEl = this.$item.children( 'a' ),
				eldata = {

					largesrc : $itemEl.data( 'largesrc' ),
					title : $itemEl.data( 'title' ),
					description : $itemEl.data( 'description' )
				};

			this.$title.html( eldata.title );
			this.$description.html( eldata.description );


			var self = this;

			// remove the current image in the preview
			if( typeof self.$largeImg != 'undefined' ) {
				self.$largeImg.remove();
			}

			// preload large image and add it to the preview
			// for smaller screens we don´t display the large image (the media query will hide the fullimage wrapper)
			if( self.$fullimage.is( ':visible' ) ) {
				this.$loading.show();
				$( '<img/>' ).load( function() {
					var $img = $( this );
					if( $img.attr( 'src' ) === self.$item.children('a').data( 'largesrc' ) ) {
						self.$loading.hide();
						self.$fullimage.find( 'img' ).remove();
						self.$largeImg = $img.fadeIn( 350 );
						self.$fullimage.append( self.$largeImg );
					}
				} ).attr( 'src', eldata.largesrc );
			}

		},
		open : function() {

			setTimeout( $.proxy( function() {
				// set the height for the preview and the item
				this.setHeights();
				// scroll to position the preview in the right place
				this.positionPreview();
			}, this ), 25 );

		},
		close : function() {

			var self = this,
				onEndFn = function() {
					if( support ) {
						$( this ).off( transEndEventName );
					}
					self.$item.removeClass( 'og-expanded' );
					self.$previewEl.remove();
				};

			setTimeout( $.proxy( function() {

				if( typeof this.$largeImg !== 'undefined' ) {
					this.$largeImg.fadeOut( 'fast' );
				}
				this.$previewEl.css( 'height', 0 );
				// the current expanded item (might be different from this.$item)
				var $expandedItem = $items.eq( this.expandedIdx );
				$expandedItem.css( 'height', $expandedItem.data( 'height' ) ).on( transEndEventName, onEndFn );

				if( !support ) {
					onEndFn.call();
				}

			}, this ), 25 );

			return false;

		},
		calcHeight : function() {

			var heightPreview = winsize.height - this.$item.data( 'height' ) - marginExpanded,
				itemHeight = winsize.height;

			if( heightPreview < settings.minHeight ) {
				heightPreview = settings.minHeight;
				itemHeight = settings.minHeight + this.$item.data( 'height' ) + marginExpanded;
			}

			this.height = heightPreview;
			this.itemHeight = itemHeight;

		},
		setHeights : function() {

			var self = this,
				onEndFn = function() {
					if( support ) {
						self.$item.off( transEndEventName );
					}
					self.$item.addClass( 'og-expanded' );
				};

			this.calcHeight();
			this.$previewEl.css( 'height', this.height );
			this.$item.css( 'height', this.itemHeight ).on( transEndEventName, onEndFn );

			if( !support ) {
				onEndFn.call();
			}

		},
		positionPreview : function() {

			// scroll page
			// case 1 : preview height + item height fits in window´s height
			// case 2 : preview height + item height does not fit in window´s height and preview height is smaller than window´s height
			// case 3 : preview height + item height does not fit in window´s height and preview height is bigger than window´s height
			var position = this.$item.data( 'offsetTop' ),
				previewOffsetT = this.$previewEl.offset().top - scrollExtra,
				scrollVal = this.height + this.$item.data( 'height' ) + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - ( winsize.height - this.height ) : previewOffsetT;

			$body.animate( { scrollTop : scrollVal }, settings.speed );

		},
		setTransition  : function() {
			this.$previewEl.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
			this.$item.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
		},
		getEl : function() {
			return this.$previewEl;
		}
	}

	return {
		init : init,
		addItems : addItems
	};

})();

/*!
 *
 *  Copyright (c) David Bushell | http://dbushell.com/
 *
 */
(function(window, document, undefined)
{

    // helper functions

    var trim = function(str)
    {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    };

    var hasClass = function(el, cn)
    {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    };

    var addClass = function(el, cn)
    {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    };

    var removeClass = function(el, cn)
    {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    };

    var hasParent = function(el, id)
    {
        if (el) {
            do {
                if (el.id === id) {
                    return true;
                }
                if (el.nodeType === 9) {
                    break;
                }
            }
            while((el = el.parentNode));
        }
        return false;
    };

    // normalize vendor prefixes

    var doc = document.documentElement;

    var transform_prop = window.Modernizr.prefixed('transform'),
        transition_prop = window.Modernizr.prefixed('transition'),
        transition_end = (function() {
            var props = {
                'WebkitTransition' : 'webkitTransitionEnd',
                'MozTransition'    : 'transitionend',
                'OTransition'      : 'oTransitionEnd otransitionend',
                'msTransition'     : 'MSTransitionEnd',
                'transition'       : 'transitionend'
            };
            return props.hasOwnProperty(transition_prop) ? props[transition_prop] : false;
        })();

    window.App = (function()
    {

        var _init = false, app = { };

        var inner = document.getElementById('inner-wrap'),

            nav_open = false,

            nav_class = 'js-nav';


        app.init = function()
        {
            if (_init) {
                return;
            }
            _init = true;

            var closeNavEnd = function(e)
            {
                if (e && e.target === inner) {
                    document.removeEventListener(transition_end, closeNavEnd, false);
                }
                nav_open = false;
            };

            app.closeNav =function()
            {
                if (nav_open) {
                    // close navigation after transition or immediately
                    var duration = (transition_end && transition_prop) ? parseFloat(window.getComputedStyle(inner, '')[transition_prop + 'Duration']) : 0;
                    if (duration > 0) {
                        document.addEventListener(transition_end, closeNavEnd, false);
                    } else {
                        closeNavEnd(null);
                    }
                }
                removeClass(doc, nav_class);
            };

            app.openNav = function()
            {
                if (nav_open) {
                    return;
                }
                addClass(doc, nav_class);
                nav_open = true;
            };

            app.toggleNav = function(e)
            {
                if (nav_open && hasClass(doc, nav_class)) {
                    app.closeNav();
                } else {
                    app.openNav();
                }
                if (e) {
                    e.preventDefault();
                }
            };

            // open nav with main "nav" button
            document.getElementById('nav-open-btn').addEventListener('click', app.toggleNav, false);

            // close nav with main "close" button
            document.getElementById('nav-close-btn').addEventListener('click', app.toggleNav, false);

            // close nav by touching the partial off-screen content
            document.addEventListener('click', function(e)
            {
                if (nav_open && !hasParent(e.target, 'nav')) {
                    e.preventDefault();
                    app.closeNav();
                }
            },
            true);

            addClass(doc, 'js-ready');

        };

        return app;

    })();

    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', window.App.init, false);
    }

})(window, window.document);

//Auto-Scrolling Effect when clicking a link
//Did a quick fix and specified to only work with pricing # due to tabs js
	$('a[href^="#pricing"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

//Toggle verticals on mobile
    $( "#verticals-mobile" ).click(function() {
        $( "#sub-menu-toggle" ).toggle( "slow", function() {
            // Mobile menu toggle animation
        });
    });

// Sign Up Page Code in Vanilla JS

//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $name = $("#name");
var $last = $("#last");
var $email = $("#username");
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//industry var
var $companyName = $("#company");
var $selectIndustry = $("#select_industry");

function isNameValid() {
  return $name.val().length > 0;
}

function isLastValid() {
  return $last.val().length > 0;
}


function isEmailValid() {
       var expr = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (expr.test($email.val())) {
     return true;
    }
}

function isCompanyValid() {
  return $companyName.val().length > 0;
}


//industry Validation
function isIndustryValid() {
    if ($selectIndustry.val() === "industryDefault") {
        return false;
       } else {
        return true;
    }
}

function industryEvent() {
    if(isIndustryValid()) {
        $("#industryError").hide();
    } else {
        $("#industryError").show();
    }
 }

function emailEvent() {

    if (isEmailValid()) {

        $email.next().hide();
    } else {
        $email.next().show();
    }
}

function nameEvent() {

    if (isNameValid()) {

        $name.next().hide();
    } else {
        $name.next().show();
    }
}

//Last Name Event
function lastEvent() {

    if (isLastValid()) {

        $last.next().hide();
    } else {
        $last.next().show();
    }
}


function companyEvent() {

    if (isCompanyValid()) {

        $companyName.next().hide();
    } else {
        $companyName.next().show();
    }
}


function isPasswordValid() {
  return $password.val() && $password.val().length >= 8;
}

function arePasswordsMatching () {
  return $confirmPassword.val() === $password.val();
}

function emailEvent() {

    if (isEmailValid()) {

        $email.next().hide();
    } else {
        $email.next().show();
    }
}

function passwordEvent() {
   //If password matches more than 8 characters
  if (isPasswordValid()) {
    //Hide hint if valid
    $password.next().hide();
  } else {
    //Show hint if invalid
    $password.next().show();
  }//end else
}//end function

function confirmPasswordEvent() {
  //When event happens on confirmation input

  // Find out if password and confirmation match
  if (arePasswordsMatching()) {
    //Hide hint if valid
    $confirmPassword.next().hide();
  } else {
    //Show hint if invalid
    $confirmPassword.next().show();
  }
  // Hide hint if match
  //Else show hint if it does not match
} // end function

function canSubmit() {
//return isPasswordValid() && arePasswordsMatching();
//    || isCompanyValid() && isEmailValid();
  return isEmailValid();

}

function enableSubmitEvent() {
  $('#submit').prop('disabled', !canSubmit())
}

$('#signup-form').submit(function(event){
  $("#username-used-error").hide();
  enableSubmitEvent();
  if(canSubmit()){
    $.post( "/signin", $( "#signup-form" ).serialize() ).done(function(response){
      //set localstorage
      var env = window.location.hostname.split(".")[0];
      if(env === "www"){ env = "prod"; }
      localStorage.setItem('ls.'+env+'_id_token', response.token);
      //redirect
      window.location = "/app/dashboard?new_signup=1"
    }).fail(function(){
      $("#username-used-error").show();
    });
  }
  event.preventDefault();
});

$('#webinar-form').submit(function(event){
//  $("#username-used-error").hide();
  enableSubmitEvent();
  if(canSubmit()){
    $.post( "/contact", $( "#webinar-form" ).serialize() ).done(function(response){
      //set localstorage
      var env = window.location.hostname.split(".")[0];
      //redirect
      window.location = "/webinar-thanks.html"
    });
//        .fail(function(){
//      $("#username-used-error").show();
//    });
  }
  event.preventDefault();
});

//Hide the hints
$('form span').hide();


//On submit errors
$( "#signup-form" ).submit(function( event ) {
  $('#submit').click(industryEvent());
  event.preventDefault();
});



$name.focus(nameEvent).keyup(nameEvent).keyup(enableSubmitEvent);

$last.focus(lastEvent).keyup(lastEvent).keyup(enableSubmitEvent);

$email.focus(emailEvent).keyup(emailEvent).keyup(enableSubmitEvent);

//Here I have one long event of the password and confirm password so it keeps track of both events
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//Checks if password matches
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$companyName.focus(companyEvent).keyup(companyEvent).keyup(enableSubmitEvent);

//Industry other value other than "please select your industry"
$selectIndustry.keyup(enableSubmitEvent);

enableSubmitEvent(); //disables the submit button even before there is a keyup on the form this is why
//you call this function and not just use the keyup method.

//Price Toggle

   function togglePrice() {
        if (document.getElementById('myonoffswitch').checked) {
               $('#price-pro').text('$84');
               $('#price-pro-my').text('/mo');
               $('#price-business').text('$209');
               $('#price-business-my').text('/mo');
               $('#price-premier').text('$417');
               $('#price-premier-my').text('/mo');

               $('#price-business-mobile').text('$209');
               $('#price-business-my-mobile').text('/mo');
               $('#price-premier-mobile').text('$417');
               $('#price-premier-my-mobile').text('/mo');
        } else {
             $('#price-pro').text('$99');
             $('#price-pro-my').text('/mo');
             $('#price-business').text('$249');
             $('#price-business-my').text('/mo');
             $('#price-premier').text('$499');
             $('#price-premier-my').text('/mo');

             $('#price-business-mobile').text('$249');
             $('#price-business-my-mobile').text('/mo');
             $('#price-premier-mobile').text('$499');
             $('#price-premier-my-mobile').text('/mo');
        }
     }


//Mobile Navigation Trunk.js

$(function() {
    function mobilecheck() {
        var check = false;
        (function(a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                check = true;
            }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }
    var clickevent = mobilecheck() ? 'touchstart' : 'click';

    var items = $('.slide');
    var content = $('.content');

    function open() {
        $(items).removeClass('close').addClass('open');
    }

    function close() {
        $(items).removeClass('open').addClass('close');
    }

    $('#navToggle').on(clickevent, function(event) {
        event.stopPropagation();
        event.preventDefault();
        if (content.hasClass('open')) {
            close();
        } else {
            open();
        }
    });
    content.click(function() {
        if (content.hasClass('open')) {
            close();
        }
    });

});

//Toggle Checkbox

function toggleCheckbox() {
   $('input[type="checkbox"]').change(function(){
   $('#checkboxTrue').toggle(this.checked);
   }).change();

}

// Features video section
var VideoSwitcher = function VideoSwitcher() {

};

VideoSwitcher.prototype.init = function init() {
	var self = this;
	this.buttons = $('.features__contain--btns ul');
	$.each(this.buttons, function(index, button) {
		button = $(button);
		buttonDiv = button.find('.features-button');
		button.click(function() {
			var thisButton = $(this);
			var index = $(".features__contain--btns .features-button").index(thisButton.find('.features-button'));
			self._setVideoIndex(index);
		});
	});

	this.videos = $('.features-video');
	this.videos.hide();
	this.videos.each(function(index, video) {
		self._addVideoHooks(video);
	});
	this.currentVideoIndex = -1;
	this._nextVideo();
	$(window).scroll(function() {
        self._checkVideoInViewport(self.currentVideo);
    });
};

VideoSwitcher.prototype._setCurrentButton = function _setCurrentButton(index) {
	$('.features__contain--btns .features-button').removeClass('features__container--current').addClass('features__container');
	var thisButton = $(this.buttons[index]);
	thisButton.find('.features-button').removeClass('features__container');
	thisButton.find('.features-button').addClass('features__container--current');
};

VideoSwitcher.prototype._setVideoIndex = function _setVideoIndex(index) {
	this._stopVideo(this.videos[this.currentVideoIndex]);
	this._setCurrentButton(index);
	this.currentVideoIndex = index;
	this.currentVideo = $(this.videos[index]);
	this.currentVideo.show();
	this._checkVideoInViewport(this.currentVideo);
};

VideoSwitcher.prototype._stopVideo = function _stopVideo(video) {
	if (video) {
		video = $(video);
		video[0].pause();
		video.hide();
		video[0].currentTime = 0;
	}
};

VideoSwitcher.prototype._nextVideo = function _nextVideo() {
	this._setVideoIndex((this.currentVideoIndex + 1) % 4);
	this._checkVideoInViewport(this.currentVideo);
};

VideoSwitcher.prototype._addVideoHooks = function _addVideoHooks(video) {
	var self = this;

	video.onended = function onended() {
		self._nextVideo();
	};
};

VideoSwitcher.prototype._checkVideoInViewport = function _checkVideoInViewport(video) {
	if ($(video).is(":in-viewport")) {
		$(video)[0].play();
	} else {
		$(video)[0].pause();
	}
};

var videoSwitcher = new VideoSwitcher();
videoSwitcher.init();


//Modal Window
//http://webdesignerhut.com/create-a-simple-jquery-modal-window/
    //select all the a tag with name equal to modal
    $('a[name=modal').click(function(e) {
        //Cancel the link behavior
        e.preventDefault();
        //Get the A tag
        var id = $(this).attr('href');

        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);

        //transition effect
        $(id).fadeIn(500);

    });

    //if close button is clicked
    $('.modalwindow .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('.modalwindow').fadeOut(500);
    });


//Modal Window 3d
    //select all the a tag with name equal to modal
    $('a[name=modal3d').click(function(e) {
        //Cancel the link behavior
        e.preventDefault();
        //Get the A tag
        var id = $(this).attr('href');

        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);

        //transition effect
        $(id).fadeIn(500);

    });

    //if close button is clicked
    $('.modalwindow .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('.modalwindow').fadeOut(500);
    });



    //select all the a tag with name equal to modal
    $('a[name=modalTerrain').click(function(e) {
        //Cancel the link behavior
        e.preventDefault();
        //Get the A tag
        var id = $(this).attr('href');

        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);

        //transition effect
        $(id).fadeIn(500);

    });

    //if close button is clicked
    $('.modalwindow .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('.modalwindow').fadeOut(500);
    });


    //select all the a tag with name equal to modal
    $('a[name=modalNDVI').click(function(e) {
        //Cancel the link behavior
        e.preventDefault();
        //Get the A tag
        var id = $(this).attr('href');

        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);

        //transition effect
        $(id).fadeIn(500);

    });

    //if close button is clicked
    $('.modalwindow .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('.modalwindow').fadeOut(500);
    });

		//Start Changes nav color on scroll
/////////////////////////////////////////////////////
$(window).scroll(function() {
  var scrollPosition = $(this).scrollTop();
  if (scrollPosition > 0) {
    // $('nav').css("background-color", "black");
    $('nav').removeClass('navbar-default-color').addClass('navbar-scroll-color');
  } else {
    // $('nav').css("background-color", "transparent");
    $('nav').removeClass('navbar-scroll-color').addClass('navbar-default-color');
  }
});
//End Changes nav color on scroll




//# sourceMappingURL=app.js.map
