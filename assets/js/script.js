function buildPage(){
    $("#header-date").text(moment().format("dddd, MMMM Do"));
    var hourOfDay = moment().format("HH");
    var $textAreas = $(".text-area");
    jQuery.each($textAreas, function() {
        var currentTimeNum = $(this)[0].name;
        var $currentTextarea = $("#" + $(this)[0].id);
        $("#row" + currentTimeNum).on("click", function (evt){
            if (evt.target.matches("#save" + currentTimeNum) || evt.target.matches("img")){
                localStorage.setItem("text-area-" + currentTimeNum, JSON.stringify($("#text-area-" + currentTimeNum).val()));
            }
        });
        $currentTextarea.val(JSON.parse(localStorage.getItem("text-area-" + currentTimeNum)));
        if($(this)[0].name < hourOfDay){
            $currentTextarea.addClass("past-text-area");
            $currentTextarea.removeClass("text-area");
        }
        else if($(this)[0].name == hourOfDay){
            $currentTextarea.addClass("current-text-area");
            $currentTextarea.removeClass("text-area");
        }
    });
}

$(document).ready(function () {
    buildPage();
})