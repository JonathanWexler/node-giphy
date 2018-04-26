'use strict';

// Get the JavaScript libraries we need to run the application
const { app, giphy } = require('./config');

// Check if someone is requesting to see the home page. Show them "hello" gifs.
app.get('/', (req, res) => {
	showGiphy(res);
});

// Check if someone is sending us data. Use that data to find a gif.
app.post('/', (req, res) => {
	let term = "puppy";
	// let term = req.body.name;
	showGiphy(res, term);
});

// This is the code we use to find a gif and show it on the 'index' page
let showGiphy = (res, term = "hello") => {

	// giphy.search looks for the term we entered in the form. The default term is 'hello'
	giphy.search({
		q: term,
		rating: 'g'
	})
	.then((giphyData) => {

		let randomGif = giphyData.data[Math.floor(Math.random() * giphyData.data.length)];

		res.render('index', {
			title: "Giphy Bloomberg",
			term: term,
			gif: randomGif.images.original.url,
		});
	})
	.catch( error => console.log(error));
};

// // Bonus
app.get('/seuss', require('./madlib').madlib);

app.get('/name', (req, res) => {
	res.render('showName', { 
		myName: "Jon"
	});
}); 


app.listen(3001, () => {
	console.log("SERVER IS RUNNING. Go to http://localhost:3001");
});



// What happens if I remove the term from app.get --> the default term will still be 'hello'
// What happens if I move .catch above .then ? --> Everything will still work as expected, but if there is an error in .then we can't catch it after
// Create a new page with your name as a parameter. --> app.get('/name', {myname: 'Jon'});


