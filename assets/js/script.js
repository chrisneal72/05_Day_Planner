function buildPage(){
    $("#header-date").text(moment().format("dddd, MMMM Do"));
    var hourOfDay = moment().format("HH");
    var $textAreas = $(".text-area");
    jQuery.each($textAreas, function(index) {
        var currentTimeNum = $(this)[0].name;
        var $currentTextarea = $("#" + $(this)[0].id);
        $("#row" + currentTimeNum).on("click", function (evt){
            if (evt.target.matches("#save" + currentTimeNum) || evt.target.matches("img")){
                runSave(currentTimeNum);
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

function runSave(index){
    console.log()
    localStorage.setItem("text-area-" + index, JSON.stringify($("#text-area-" + index).val()));
}
buildPage();