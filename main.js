/**
 * Created by mschwartz on 9/13/14.
 */

/*global require */

var Application = require('decaf-jolt').Application,
    StaticFile = require('decaf-jolt').StaticFile,
    SjsFile = require('decaf-jolt').SjsFile,
    SjsServer = require('decaf-jolt').SjsServer,
    app = new Application();

// serve static/favicon.ico when URL is /favicon.ico
app.verb('favicon.ico', StaticFile('static/favicon.ico'));

// serve / URL via Home controller
app.verb('/', SjsFile('controllers/Home.sjs'));

// '127.0.0.1' is localhost only
// '0.0.0.0' to listen on all interfaces
var listenAddress = '127.0.0.1';

app.listen(9090, listenAddress);
console.log('HTTP server listening at http://' + listenAddress + ':9090');
