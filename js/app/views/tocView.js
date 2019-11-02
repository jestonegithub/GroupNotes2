
define(function (require) {
    var mn = require('marionette');
    var bb = require('backbone');
    //var _ = require('underscore');
    var tmp = require('hbs!app/templates/tocView');


    //This is a View - and the root view of the game living in #main

    var TocView = mn.ItemView.extend({

        template: tmp,

        id:'toc',

        className:'toc',

        ui: {
            // example: "#book_title_first_line"
        },

        onRender: function(){

            // console.log('header view:'+this.ui.example.html())


        }

        // addHandlers: function(){
        //
        //     $('#intro').append('<div id="intro_continue_btn" class="continue_center">Continue</div>');
        //     $('#intro_continue_btn').click(function(){
        //
        //         $('#intro_continue_btn').remove();
        //         bb.trigger('sectionend');
        //
        //     })
        //
        // }

    });


    return {TocView:TocView}

});