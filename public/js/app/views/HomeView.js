// IndexView.js


define(["jquery", "backbone", "models/HomeModel", "text!templates/Home.html"],

    function($, Backbone, Model, template){

        var HomeView = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".magic",

            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return HomeView;

    }

);


// var data = [4, 8, 15, 16, 23, 42];

// d3.select(".chart")
//   .selectAll("div")
//     .data(data)
//   .enter().append("div")
//     .style("width", function(d) { return d * 20 + "px"; })
//     .text(function(d) { return d; });







