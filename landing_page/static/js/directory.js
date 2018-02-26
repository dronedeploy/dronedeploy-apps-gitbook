var app = angular.module("app", [ ]);


app.filter('listFilter', function() {

  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(input, directoryFilter, industryFilter, location) {

    var output = [];

    output = _.filter(input, function(item) {
      return (item.name.toLowerCase().includes(directoryFilter.toLowerCase()) || directoryFilter === '');
    });

    output = _.filter(output, function(item) {
      return (_.includes(item.industries, industryFilter) || industryFilter === 'Type of service');
    });

    if (location.lat !== null && location.lng !== null) {
      output = _.sortBy(output, function(item) {
        return Math.pow(item.latitude - location.lat, 2.0) + Math.pow(item.longitude - location.lng, 2);
      });
    }


    return output;
  }

});

app.controller('directoryCtrl', ['$scope', '$log', '$http', '$filter', '$sce', function (scope, log, http, filter, sce) {

  
}]);
