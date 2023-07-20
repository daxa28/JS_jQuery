$(document).ready(function() {
    $(document).on("click", "#add_comment", function () {
        var form = $("form[name='form']");
        form.css("display", "block");
        $("#add_comment").replaceWith(form);
    });
    $(document).on("click", "input[name='send']", function() {
        var comment = $("textarea[name='comment']").val();
        alert("загрузка...");
        $("<p>" + comment + "</p>").appendTo($("#comments"))
    });
    

    $("#hide").bind("click", hideComments);
    $("#show").bind("click", showComments);


    $("#img").bind("click", function(event) {
        $(event.target).parent().css("text-align", "center");
        $(event.target).animate ({
            width: $(event.target).width() * 2,
            height: $(event.target).height() * 2
        }, 1000)
    })
});




function hideComments() {
    $("#comments").hide(1000, function() { //   .fadeOut   .slideUp
        $("#hide").hide();
        $("#show").show();
    })
}

function showComments() {
    $("#comments").show(1000, function() {  //    .fadeIn  .slideDown
        $("#show").hide();
        $("#hide").show();
    })
}





