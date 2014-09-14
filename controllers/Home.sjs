/**
 * Created by mschwartz on 9/13/14.
 */

/*global require, req, res */

var TemplateManager = require('decaf-hoganjs').TemplateManager,
    views = new TemplateManager('views');

var document = {
    title: 'Home Page',     // for <title> tag
        date: new Date().toLocaleDateString()
};

res.send(views['Home'].render(document, views));
