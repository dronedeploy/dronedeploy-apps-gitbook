# How to Set Up a Web Server

**Why set up a server?**

To proxy connections to avoid CORS issues and handle processing while the app's iframe is closed. For background on CORS, see: [this link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

**Contents**
- [Example Webserver](#example-webserver)
- [How to Set up Heroku](#how-to-set-up-heroku)

### Example Webserver

First clone the example which uses the tornado webserver to query the Google Maps API, available [here](https://github.com/dronedeploy/sample-app-server).

The example uses tornado to send a request to Google Map's API to return the geocoded output of a street address, in the format used by the national postal service of the country concerned. Documentation on the specific outputs and queries for this API is available [here](https://developers.google.com/maps/documentation/geocoding/intro)

**CORS Headers**

The headers found in the example allow for cross-origin requests to be made from the DroneDeploy plugin to the webserver in the example repository.

### How to Set up Heroku

Create an account on Heroku, download the Heroku CLI, and run

```bash
heroku login
```

This will allow you to setup the command line client for Heroku access.

Now use heroku to create your new app server. For the purposes of this tutorial, we will use the example web server (sample-app-server).

```bash
heroku create --ssh-git sample-app-server
git clone git@heroku.com:sample-app-server
```

For local testing using the example available on git, run

```bash
API_KEY=your_google_maps_api_key python nado.py
```

For testing on Heroku, run:

```bash
heroku config:set API_KEY=your_google_maps_api_key
```