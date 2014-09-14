/**
 * Created by mschwartz on 9/13/14.
 */

/*global require */

var Application = require('decaf-jolt').Application,
    StaticFile = require('decaf-jolt').StaticFile,
    StaticServer = require('decaf-jolt').StaticServer,
    SjsFile = require('decaf-jolt').SjsFile,
    SjsServer = require('decaf-jolt').SjsServer,
    app = new Application();

// serve static/favicon.ico when URL is /favicon.ico
app.verb('favicon.ico', StaticFile('static/favicon.ico'));

// serve bower_components from bower_components directory
app.verb('bower_components', StaticServer('bower_components'));

// serve css stylesheets from css directory when the URL starts with /css/
app.verb('css', StaticServer('css'));

// serve js files from js directory when the URL starts with /js/
app.verb('js', StaticServer('js'));

// serve image files from images directory when the URL starts with /images/
app.verb('images', StaticServer('images'));

// serve / URL via Home controller
app.verb('/', SjsFile('controllers/Home.sjs'));

// serve /Page URL via Page controller
app.verb('Page', SjsFile('controllers/Page.sjs'));

// Web services/API at /API/whatever.sjs the api subdirectory
app.verb('API', SjsServer('api'));

// '127.0.0.1' is localhost only
// '0.0.0.0' to listen on all interfaces
var listenAddress = '127.0.0.1';

app.listen(9090, listenAddress);
console.log('HTTP server listening at http://' + listenAddress + ':9090');
