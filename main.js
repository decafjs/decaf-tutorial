/**
 * Created by mschwartz on 9/13/14.
 */

var TemplateManager = require('decaf-hoganjs').TemplateManager,
    views = new TemplateManager('views');

console.log(views['test'].render({ foo: [ 1, 2, 3 ]}));
