Tutorial: Example WWW App using decaf
=====================================

This tutorial will walk you through using bower to install the prerequisites for serving dynamic content via HTTP with decafjs.

## Bower

For the purposes of this tutorial, it is assumed you've installed bower from its homepage: http://bower.io.  You can also search for packages you can install with bower here: http://bower.io/search/.  Note that decaf and the modules specifically written for it do not show up in bower search YET.

The first thing we need to do is to create a bower.json file in the root of the project.  You can use

    $ bower init

to create the initial bower.json file, or you can create it from scratch - we'll create ours from scratch here.

We're going to demonstrate creating our own bower.json.  I've stripped it down to as minimal a starting point as possible.

==bower.json:==
```javascript
{
    "name"        : "decaf-tutorial",
    "version"     : "0.0.1",
    "authors"     : [
        "Mike Schwartz <mike@moduscreate.com>"
    ],
    "description" : "Tutorial: Example WWW App using DecafJS",
    "main"        : "main.js",
    "keywords"    : [
        "tutorial",
        "rhino",
        "JavaScript",
        "Sync"
    ],
    "license"     : "MIT",
    "homepage"    : "https://github.com/decafjs/decaf-tutorial",
    "private"     : "false",
    "dependencies": {
        "decaf"        : "decafjs/decaf#master",
        "decaf-jolt"   : "decafjs/decaf-jolt#master",
        "decaf-hoganjs": "decafjs/decaf-hoganjs#master",
        "decaf-mongodb": "decafjs/decaf-mongodb#master"
    }
}
```
