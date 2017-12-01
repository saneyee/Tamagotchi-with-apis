
var apiKey = require('./../.env').apiKey;
import {Tamagotchi} from './../js/tama.js';

$(document).ready(function() {
    let tama = {};
    let countdown = function() {
      setInterval(function() {
        if (tama.foodLevel < 0 || tama.restLevel < 0 || tama.happinessLevel < 0)
        {
          $("#output").hide();
          $("#dead").show();
        }

          $("#food").text(tama.foodLevel);
          $("#attention").text(tama.happinessLevel);
          $("#sleep").text(tama.restLevel);

      },10);
    };

    $('#formOne').submit(function(e) {
        e.preventDefault();

        let petname = $('.petname').val();
        let food = parseInt($('.food').val());
        let attention = parseInt($('.attention').val());
        let rest = parseInt($('.rest').val());
        $('.petname').val("");
        $('.food').val("");
        $('.attention').val("");
        $('.rest').val("");
        tama = new Tamagotchi(petname,food,attention,rest);
        tama.setHunger();
        tama.setAttention();
        tama.setRest();

        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?q=${petname}&api_key=${apiKey}&limit=3`,
            type: 'GET',
            data: {
                format: 'json'
            },
            success: function(response) {
                $('#pic').append("<img src='"+response.data[0].images.fixed_height.url+"' />");
            },
            error: function() {
                $('#errors').text("There was an error processing your request. Please try again.");
            }
        });

        $("#formOne").hide();
        $("#output").show();

        $("#food").text(food);
        $("#attention").text(attention);
        $("#sleep").text(rest);

        countdown();
    });


    $("#feed").click(function(){
        //tama.feed();
        tama.feed();
    });

    $("#play").click(function(){

        tama.play();
    });
    $("#rest").click(function(){

        tama.rest();
    });

    // $("#timepass").click(function(){
    //
    //     tama.timePass();
    //
    //     // $("#food").text(tama.foodLevel);
    //     // $("#attention").text(tama.happinessLevel);
    //     // $("#sleep").text(tama.restLevel);
    // });

});
