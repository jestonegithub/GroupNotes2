define(function (require) {
    var mn = require('marionette');
    var bb = require('backbone');
    //var _ = require('underscore');
    var tmp = require('hbs!app/templates/bookOneView');


    //This is a View - and the root view of the game living in #main

    var BookOneView = mn.ItemView.extend({

        template: tmp,

        id:'bookOne',

        className:'bookdivider',

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


    return {BookOneView:BookOneView}

});