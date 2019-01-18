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
	cp -R landing_page/* build/

run:
	http-server build/

clean:
	-docker run --rm -v $(shell pwd)/:/workdir/ busybox sh -c "rm -rf /workdir/build/; rm -rf /workdir/_book"
	mkdir -p build

build-graphql-reference:
	cp docs/components/topnav.html graphdoc_templates/slds/topnav.mustache  # Copy topnav into graphdoc template
	docker run \
			-w /graphdoc/ \
			-v $(PWD)/graphdoc_templates/:/graphdoc/template/ \
			-v $(PWD)/build:/graphdoc/build/ \
			dronedeploy/graphdoc:master \
			/bin/bash -c "npm run sass && graphdoc -f -t /graphdoc/template/slds/ -e https://api.dronedeploy.com/graphql -o ./build/reference"

