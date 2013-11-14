// Init.js
// =======

require.config({

  // Sets the js folder as the base directory for all future relative paths
  baseUrl: "./js",

  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
  // probably a good idea to keep version numbers in the file names for updates checking
  paths: {

      // Core Libraries
      // ==============

      "jquery": "libs/jquery/jquery",

      "underscore": "libs/lodash/dist/lodash",

      "backbone": "libs/backbone/backbone",

      "bootstrap": "libs/bootstrap/dist/js/bootstrap",

      // Plugins
      // =======

      "d3": "libs/d3/d3",

      "dcjs": "libs/dcjs/dc",

      "crossfilter": "libs/crossfilter/crossfilter",

      "text": "libs/text/text",

      "backbone.validateAll": "libs/plugins/Backbone.validateAll",

      // Application Folders
      // ===================

      "collections": "app/collections",

      "models": "app/models",

      "routers": "app/routers",

      "templates": "app/templates",

      "views": "app/views",

      "events": "app/events"

  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

      // Bootstrap
      "bootstrap": ["jquery"],

      // Backbone
      "backbone": {

        // Depends on underscore/lodash and jQuery
        "deps": ["underscore", "jquery"],

        // Exports the global window.Backbone object
        "exports": "Backbone"

      },

      "dcjs": {

        "deps": ["d3", "crossfilter"],

        "exports": "d3"

      },

      // Backbone.validateAll plugin that depends on Backbone
      "backbone.validateAll": ["backbone"]

  }

});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(["jquery", "backbone", "routers/Router", "bootstrap", "backbone.validateAll"],

  function($, Backbone, Router) {

    // Instantiates a new Desktop Router instance
    new Router();

  }

);

// Let's get dc.js up in the mix

require(['d3', 'crossfilter', 'dcjs'], function() {
  
});
