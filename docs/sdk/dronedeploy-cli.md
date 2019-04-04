# DroneDeploy CLI

Our developers deserve the best tools. That is why we have built out a CLI for app development and packed in tons of functionality. We hope that you will find app development a breeze with the DroneDeploy CLI.

## Serverless Platform

The DroneDeploy App SDK is built using the serverless architecture. Serverless architecture allows you to build applications without having to worry about provisioning your own servers. The DroneDeploy CLI leverages the [Serverless](https://serverless.com/) framework for easy deployment of functions.

## Installation

Get started by first globally installing the Serverless platform

        $ npm install -g serverless

Then install the DroneDeploy CLI in the directory where you want to build out your DroneDeploy app.

        $ npm install --save-dev @dronedeploy/dronedeploy-cli

You can find the latest version of the DroneDeploy CLI and documentation [here](https://www.npmjs.com/package/@dronedeploy/dronedeploy-cli).

## Commands

Once you have installed the DroneDeploy CLI and are in your app's directory, you can call the following command to get a list of all possible CLI commands:

        $ sls help
