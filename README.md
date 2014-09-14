Tutorial: Example WWW App using decaf
=====================================
By Mike Schwartz <mike@moduscreate.com>

This tutorial will walk you through using bower to install the prerequisites for serving dynamic content via HTTP with decafjs.

## Bower

For the purposes of this tutorial, it is assumed you've installed bower from its homepage: http://bower.io.  You can also search for packages you can install with bower here: http://bower.io/search/.  Note that decaf and the modules specifically written for it do not show up in bower search YET.

The first thing we need to do is to create a bower.json file in the root of the project.  You can use

    $ bower init

to create the initial bower.json file, or you can create it from scratch - we'll create ours from scratch here.

We're going to demonstrate creating our own bower.json.  I've stripped it down to as minimal a starting point as possible.

The latest and greatest is here: https://github.com/decafjs/decaf-tutorial/blob/master/bower.json

*bower.json:*
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

From the command line, we run bower install to install decaf and these decaf modules: jolt, hoganjs, and mongodb.
 
 ```
 $ bower install
 bower not-cached    git://github.com/decafjs/decaf.git#master
 bower resolve       git://github.com/decafjs/decaf.git#master
 bower not-cached    git://github.com/decafjs/decaf-jolt.git#master
 bower resolve       git://github.com/decafjs/decaf-jolt.git#master
 bower not-cached    git://github.com/decafjs/decaf-hoganjs.git#master
 bower resolve       git://github.com/decafjs/decaf-hoganjs.git#master
 bower not-cached    git://github.com/decafjs/decaf-mongodb.git#master
 bower resolve       git://github.com/decafjs/decaf-mongodb.git#master
 bower checkout      decaf-mongodb#master
 bower checkout      decaf-hoganjs#master
 bower checkout      decaf-jolt#master
 bower checkout      decaf#master
 bower resolved      git://github.com/decafjs/decaf-jolt.git#46e2438a86
 bower resolved      git://github.com/decafjs/decaf-hoganjs.git#b1dd01fe96
 bower not-cached    git://github.com/decafjs/decaf-jst.git#master
 bower resolve       git://github.com/decafjs/decaf-jst.git#master
 bower not-cached    git://github.com/decafjs/decaf-coffeescript.git#master
 bower resolve       git://github.com/decafjs/decaf-coffeescript.git#master
 bower not-cached    git://github.com/decafjs/decaf-less.git#master
 bower resolve       git://github.com/decafjs/decaf-less.git#master
 bower resolved      git://github.com/decafjs/decaf-mongodb.git#e3f3d586fe
 bower checkout      decaf-less#master
 bower checkout      decaf-jst#master
 bower checkout      decaf-coffeescript#master
 bower resolved      git://github.com/decafjs/decaf-jst.git#a3254dc0d4
 bower not-cached    git://github.com/twitter/hogan.js.git#3.x
 bower resolve       git://github.com/twitter/hogan.js.git#3.x
 bower resolved      git://github.com/decafjs/decaf-coffeescript.git#36b7253566
 bower resolved      git://github.com/decafjs/decaf-less.git#442b5841b9
 bower download      https://github.com/twitter/hogan.js/archive/v3.0.2.tar.gz
 bower resolved      git://github.com/decafjs/decaf.git#6d6f637108
 bower extract       hogan#3.x archive.tar.gz
 bower deprecated    Package hogan is using the deprecated component.json
 bower resolved      git://github.com/twitter/hogan.js.git#3.0.2
 bower install       decaf-jolt#46e2438a86
 bower install       decaf-hoganjs#b1dd01fe96
 bower install       decaf-mongodb#e3f3d586fe
 bower install       decaf-jst#a3254dc0d4
 bower install       decaf-coffeescript#36b7253566
 bower install       decaf-less#442b5841b9
 bower install       decaf#6d6f637108
 bower install       hogan#3.0.2
 
 decaf-jolt#46e2438a86 bower_components/decaf-jolt
 ├── decaf-coffeescript#36b7253566
 ├── decaf-jst#a3254dc0d4
 └── decaf-less#442b5841b9
 
 decaf-hoganjs#b1dd01fe96 bower_components/decaf-hoganjs
 └── hogan#3.0.2
 
 decaf-mongodb#e3f3d586fe bower_components/decaf-mongodb
 
 decaf-jst#a3254dc0d4 bower_components/decaf-jst
 
 decaf-coffeescript#36b7253566 bower_components/decaf-coffeescript
 
 decaf-less#442b5841b9 bower_components/decaf-less
 
 decaf#6d6f637108 bower_components/decaf
 
 hogan#3.0.2 bower_components/hogan
```
 
The command created a bower_components directory with the following contents:
```
ls bower_components
decaf              decaf-hoganjs      decaf-jst          decaf-mongodb
decaf-coffeescript decaf-jolt         decaf-less         hogan
```

There are more modules installed than we specified in bower.json, but this is expected.  For example, decaf-jolt caused decaf-jst, decaf-less, and decaf-coffeescript to be installed; those will be require()ed by jolt when we use it.  Similarly, hogan was installed because decaf-hogan depends on it.

We won't want to commit the files in the bower_components directory, so we add bower_components to the project's .gitignore file.  We can use bower to install them at will.

In our bower.json, we specified 
```javasript
"main" : "main.js"
```
We will create a main.js file in the root which will be the initially loaded source file for our server-side application.

To test things out and get a feel for how all these bower components work, I created a minimal main.js:

```javascript
/**
 * Created by mschwartz on 9/13/14.
 */

var TemplateManager = require('decaf-hoganjs').TemplateManager,
    views = new TemplateManager('views');

console.log(views['test'].render({ foo: [ 1, 2, 3 ]}));
```

Decaf's require() implementation searches the project's bower_components (among other directories) for modules to load when you call require().  We use require() to load the TemplateManager from the decaf-hoganjs module.

We instantiate a TemplateManager with the directory 'views'.
 
Finally, we echo the test.hbs template in the views folder.

To make this clear, the project has a top level views folder.  This folder can have hogan/mustache templates and subfolders with more templates (and subfolders...).  You might want to organize your templates as something like:

```
views/common
views/common/header.hbs     (page header)
views/common/navigation.hbs (page navigation)
views/common/footer.hbs     (page footer)
views/about
views/about/contact.hbs
views/about/jobs.hbs
etc.
```

For the first test, I created a views/test.hbs file:

```mustache
{{#foo}}
    {{.}}
{{/foo}}
```

The foo member of the object passed to the template's render() function is iterated and the values printed. Here's what happens when we run the program:

```
$ ./bower_components/decaf/bin/decaf main.js
    1
    2
    3


exiting
```

The code up to this point of the tutorial is tagged phase1 in this repository.  Note that this README.md file ends right here in the tag.


