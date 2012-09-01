Application['hello-world'] = (function() {
var module = {exports: {}};
var exports = module.exports;
/* router : hello-world */
module.name = "hello-world";
module.routes = {"":"index"};
new Application.ViewController({
  //setting the parent as Application will cause
  //Application.setView(this) to be called each
  //time a route is matched on this ViewController
  parent: Application,
  //module.routes is set in the output file generated by lumbar
  routes: module.routes,
  index: function() {
    var view = new Application.Views['hello-world/index'];
    this.setView(view);
  }
});;;
Application.View.extend({
  name: 'hello-world/index'
});
;;
Application.templates['templates/hello-world/index'] = '<h1>Hello world!</h1>\n<p>Mobile examples:</p>\n<ul>\n  <li>{{#link \"examples/infinite-scroll\"}}Infinite Scroll{{/link}}</li>\n  <li>{{#link \"examples/fast-click\"}}Fast Click{{/link}}</li>\n  <li>{{#link \"examples/tap-highlight\"}}Tap Highlight{{/link}}</li>\n</ul>\n';return module.exports;
}).call(this);
