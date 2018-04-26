'use strict';

const { app, giphy } = require('./config');


app.listen(3001, () => {
	console.log("SERVER IS RUNNING. Go to http://localhost:3001");
});