define(function (require) {
    var mn = require('marionette');
    var bb = require('backbone');
    //var _ = require('underscore');
    var tmp = require('hbs!app/templates/whatFermatKnew');


    //This is a View - and the root view of the game living in #main

    var WhatFermatKnew = mn.ItemView.extend({

        template: tmp,

        id:'what_fermat_knew',

        className:'chapter'

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


    return {WhatFermatKnew:WhatFermatKnew}

});