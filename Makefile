

package: clean
	mkdir -p build
	gitbook install
	gitbook build
	cp -R _book build/docs
	cp -R landing_page/* build/

run:
	http-server build/

clean:
	rm -rf build/