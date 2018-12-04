var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}


var progress = setInterval(function () {
    var $bar = $("#bar");

    if ($bar.width() >= 160) {
        clearInterval(progress);
    } else {
        $bar.width($bar.width() + 30);
    }
    /*$bar.text($bar.width() / 6 + "%");
    if ($bar.width() / 6 == 100){
      $bar.text("Still working ... " + $bar.width() / 6 + "%");
    }*/
}, 500);
