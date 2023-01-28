// Require http module

var http = require('http');

// Require fs module

var fs = require('fs');

// Require minimist module (make sure you install this one via npm).

var parseArgs  = require('minimist');

// Use minimist to process one argument `--port=` on the command line after `node server.js`.

var argv = args['port'] || 3000;

// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.

const port = 0;
if (argv = NULL) {
	port = 3000;
} else {
	port = argv;
}

// Use the fs module to create an arrow function using `fs.readFile`.
// Use the documentation for the Node.js `fs` module. 
// The function must read a file located at `./public/index.html` and do some stuff with it.
// The stuff that should be inside this function is all below.

fs.readFile('.public/index.html', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(data);
});

// If there is an error, put it on the console error and return. 
// Do not be nice about exiting.
 
if (err) {
	console.error(err);
	return;
}

// Define a const `server` as an arrow function using http.createServer. 
// Use the documentation for the node.js http module. 
// The function should have three responses: 
