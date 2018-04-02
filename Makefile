GIT_HASH := $(shell git rev-parse --short HEAD)
GIT_BRANCH := $(shell git rev-parse --abbrev-ref HEAD)

# Always fetch the latest prod
DRONE_WEB_BRANCH := "prod"

package: clean build-graphql-reference
	docker run \
			-w /gitbook/ \
			-v $(PWD)/book.json:/gitbook/book.json \
			-v $(PWD)/docs:/gitbook/docs \
			-v $(PWD)/build:/gitbook/build/ \
			-v $(PWD)/_book:/gitbook/_book/ \
			dronedeploy/nodejs:v8.9.0 \
			/bin/bash -c "npm install -g gitbook-cli; gitbook install; gitbook build"
	cp -R ./_book build/
	mv build/_book/ build/docs
	cp -R landing_page/* build/
	cp -R landing_page/static/ build/

run:
	http-server build/

clean:
	-docker run --rm -v $(shell pwd)/:/workdir/ busybox sh -c "rm -rf /workdir/build/; rm -rf /workdir/_book"
	mkdir -p build

clone-gi

build-graphql-reference:
	cp docs/components/topnav.html graphdoc/templates/topnav.mustache  # Copy topnav into graphdoc template
	docker run \
			-v $(PWD)../graphdoc/:../graphdoc/ \
			-v $(PWD)/build:/build/ \
			dronedeploy/nodejs:v8.9.0 \
			/bin/bash -c "npm install -g @2fd/graphdoc; graphdoc -f -t /graphdoc/templates/ -e https://api.dronedeploy.com/graphql -o ./build/reference"

bash-local:
	cp docs/components/topnav.html graphdoc/templates/topnav.mustache  # Copy topnav into graphdoc template
	docker run \
			-w /docs/ \
			-v $(PWD)/../graphdoc/:/docs/graphdoc/ \
			-v $(PWD)/graphdoc/templates/:/docs/templates \
			-v $(PWD)/graphdoc/package.json/:/docs/package.json \
			-v $(PWD)/build:/docs/build/ \
			-it dronedeploy/nodejs:v8.9.0 \
			bash
