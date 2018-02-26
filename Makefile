GIT_HASH := $(shell git rev-parse --short HEAD)
GIT_BRANCH := $(shell git rev-parse --abbrev-ref HEAD)

# Always fetch the latest prod
DRONE_WEB_BRANCH := "prod"

package: clean build-graphql-reference
	docker run -it \
			-w /gitbook/ \
			-v $(PWD)/book.json:/gitbook/book.json \
			-v $(PWD)/docs:/gitbook/docs \
			-v $(PWD)/build:/gitbook/build/ \
			dronedeploy/nodejs:v8.9.0 \
			/bin/bash -c "npm install -g gitbook-cli; gitbook install; gitbook build; cp -R _book/* build/docs/"
	cp -R landing_page/* build/
	cp -R landing_page/static/ build/

run:
	http-server build/

clean:
	rm -rf build/
	mkdir -p build

build-graphql-reference:
	docker run -it \
			-v $(PWD)/build:/build/ \
			-v $(PWD)/docs/components/header.html:/build/docs/components/header.html \
			-v $(PWD)/docs/styles/website.css:/build/docs/styles/website.css \
			dronedeploy/nodejs:v8.9.0 \
			/bin/bash -c "npm install -g @2fd/graphdoc; graphdoc -e https://www.dronedeploy.com/graphql -f -o ./build/reference"
	python insert_header_html.py
