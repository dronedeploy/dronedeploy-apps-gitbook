

package: clean
	mkdir -p build
	gitbook install
	gitbook build
	cp -R _book build/
	cp -R landing_page/* build/

clean:
	rm -rf build/