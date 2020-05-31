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

    

});