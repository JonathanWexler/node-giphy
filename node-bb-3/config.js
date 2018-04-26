'use strict';

const express = require('express'),
	mustacheExpress = require('mustache-express'),
	bodyParser = require('body-parser'),
	app = express(),
	giphy = require('giphy-api')();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ 
	extended: true
}));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

module.exports = {
	app: app,
	giphy: giphy
};