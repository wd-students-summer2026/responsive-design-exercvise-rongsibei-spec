// this is your custom Javascript file
$(document).ready(function() {
    $("#change_text_button").click(function() {
        $("#coffee_text").text("Coffee interests me because it combines taste, culture, and a sense of calm.");
    });
    
    $("#coffee_image").mouseover(function() {
        $("#coffee_image").attr("src", "images/coffee2.jpg");
    });

    $("#coffee_image").mouseout(function() {
        $("#coffee_image").attr("src", "images/coffee1.jpg");
    });

    $("#move_button").click(function() {
        $("#moving_note").animate({
            left: "80px",
            top: "20px"
        });
    });

});  

