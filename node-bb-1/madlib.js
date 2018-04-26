'use strict';

const { app, giphy } = require('./config');
const {text} = require('./text');


module.exports = {
	// Bonus Madlib
	madlib: (req, res) => {
		let words = text.split(" "),
		searchTerms = [];

		words.forEach((word, i) => {
			if (i%10 === 0) searchTerms.push([i, word]);
		});

		searchTerms.reduce((promise, searchTerm) => {
			return 	giphy.search({
				q: searchTerm[1],
			})
			.then((giphyData) => {

				let random = Math.floor(Math.random() * giphyData.data.length),
				randomGif = giphyData.data[random],
				image = `<img class="gisphy-lib-image" src=${randomGif.images.original.url}>`;

				words[searchTerm[0]] = image;
			})
			.catch( error => console.log(error));
		}, 
		Promise.resolve())
		.then(() => {
			res.render('madlib', { 
				title: "Madlib", 
				text: words.join(' ')
			});
		});

	} 
};


