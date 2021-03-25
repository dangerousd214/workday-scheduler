let today = moment(); // Current date
$("#currentDay").text(today.format("dddd, MMMM, Do")); // format date

$('.saveBtn').on('click', function () { //saves users schedule

    let saveButton =$(this);

    let textarea = saveButton.siblings("textarea") 

    let userInput = textarea.val() 

    let timeBlock = textarea.attr('id'); 

    localStorage.setItem(timeBlock, userInput); 

});

$("textarea").each(function () { 

    let hour = moment().hours();
    let time = $(this).attr("id")
   if (time < hour) { 
    $(this).addClass('past');
    $(this).removeClass('present');
    $(this).removeClass('future');
   }else if (time > hour) {
    $(this).addClass('future');
    $(this).removeClass('present');
    $(this).removeClass('past');
   }else { 
    $(this).addClass('present');
    $(this).removeClass('past');
    $(this).removeClass('future');
   }
   
});

//for #9-#18, take what the user saved in the selected time block, 
//and make sure local storage overides that time block with what user saved any time the page is refreshed
$("7").val(localStorage.getItem("7"));

$("8").val(localStorage.getItem("8"));

$("#9").val(localStorage.getItem("9"));

$("#10").val(localStorage.getItem("10"));

$("#11").val(localStorage.getItem("11"));

$("#12").val(localStorage.getItem("12"));

$("#13").val(localStorage.getItem("13"));

$("#14").val(localStorage.getItem("15"));

$("#16").val(localStorage.getItem("16"));

$("#17").val(localStorage.getItem("17"));

$("#18").val(localStorage.getItem("18"));

$("#19").val(localStorage.getItem("19"));