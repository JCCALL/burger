$(document).ready(function () {

    $(".eat").on("click", function(event) {
        var id = $(this).attr("id");

        var dinner = {
            devour: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: dinner
        }).then(function() {
            location.reload();
        });
    });
    
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim()
        };
        console.log(newBurger);
        if (newBurger.burger_name != "") {
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function() {
                location.reload();
            });
        } else {
            alert("Please put in a valid burger name");
        }
    });
    

});