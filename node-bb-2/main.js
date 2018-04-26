'use strict';

const { app, giphy } = require('./config');

app.get('/name', (req, res) => {
	res.render('showName', { 
		myName: "Jon"
	});
}); 


app.listen(3001, () => {
	console.log("SERVER IS RUNNING. Go to http://localhost:3001");
});