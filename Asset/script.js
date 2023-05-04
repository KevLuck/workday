$(document).ready(function () {
    var currentTime = dayjs().format('h:mm A');
    var currentDate = dayjs().format('dddd, MMM DD YYYY');
    $(".current-date").html(currentDate);
    $(".current-time").html(currentTime);

    $(".saveBtn").on("click", function () {

        var text = $(this)
            .siblings(".col-8")
            .val();
        var time = $(this)
            .parent()
            .attr("id");

        localStorage.setItem(time, text);
    })

    function timeTracker() {

        var currentTime = dayjs().hour();
        $(".row").each(function () {
            var rowBlock = parseInt($(this).attr("id"));

            if (rowBlock < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else if (rowBlock === currentTime) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            } else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        });
    }

    $("#9 .col-8").val(localStorage.getItem("9"));
    $("#10 .col-8").val(localStorage.getItem("10"));
    $("#11 .col-8").val(localStorage.getItem("11"));
    $("#12 .col-8").val(localStorage.getItem("12"));
    $("#13 .col-8").val(localStorage.getItem("13"));
    $("#14 .col-8").val(localStorage.getItem("14"));
    $("#15 .col-8").val(localStorage.getItem("15"));
    $("#16 .col-8").val(localStorage.getItem("16"));
    $("#17 .col-8").val(localStorage.getItem("17"));

    timeTracker();
})
