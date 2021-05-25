let allBullets = [...document.querySelectorAll(".bullet")];
let stepCounter = 0;

sal({
  threshold: 0.1,
  once: false,
});

$(".first-form").show();
$(".second-form").hide();
$(".third-form").hide();
$(".first").show();
$(".second").hide();
$(".third").hide();
$(".form-img1").show();
$(".form-img2").hide();
$(".form-img3").hide();

$("#next").click(function () {
  $("#prev").addClass("showprev");
  $("#prev").removeClass("hide");
  //   $(".first-form").hide();
  //   $(".second-form").fadeIn();
  //   $(".third-form").hide();
  //   $(".first").hide();
  //   $(".second").fadeIn();
  //   $(".third").hide();

  if (stepCounter < 2) {
    $(".bullet").eq(stepCounter).addClass("complete");
    stepCounter++;
    if (stepCounter == 0) {
      //   $(".first-form").fadeIn();
      //   $(".second-form").hide();
      //   $(".third-form").hide();
      //   $(".first").fadeIn();
      //   $(".second").hide();
      //   $(".third").hide();
      fadeIn(0);
    } else if (stepCounter == 1) {
      //   $(".first-form").hide();
      //   $(".second-form").fadeIn();
      //   $(".third-form").hide();
      //   $(".first").hide();
      //   $(".second").fadeIn();
      //   $(".third").hide();
      //   $(".form1").hide();
      //   $(".form-img2").fadeIn();
      //   $(".form-img3").hide();
      fadeIn(1);
    } else if (stepCounter == 2) {
      //   $(".first-form").hide();
      //   $(".second-form").hide();
      //   $(".third-form").fadeIn();
      //   $(".first").hide();
      //   $(".second").hide();
      //   $(".third").fadeIn();
      fadeIn(2);

      $("#next span p").html("Send");
      $("#next").addClass("send");
    }
  }
  $(".send").click(function () {
    // $(".form").hide();
    // $(".contact-progress").hide();
  });

  $(".bullet").eq(stepCounter).addClass("activeStep");
});

$("#prev").click(function () {
  if (stepCounter == 1) {
    $("#prev").addClass("hide");
    $("#prev").removeClass("showPrev");
    $(".first-form").fadeIn();
    $(".second-form").hide();
    $(".third-form").hide();
    $(".first").fadeIn();
    $(".second").hide();
    $(".third").hide();
    $(".form-img1").fadeIn();
    $(".form-img2").hide();
    $(".form-img3").hide();
  }

  if (stepCounter == 2) {
    $(".first-form").hide();
    $(".second-form").fadeIn();
    $(".third-form").hide();
    $(".first").hide();
    $(".second").fadeIn();
    $(".third").hide();
    $(".form-img1").hide();
    $(".form-img2").fadeIn();
    $(".form-img3").hide();
  }

  $("#next span p").html("Next");
  $(".bullet").eq(stepCounter).removeClass("activeStep");

  stepCounter--;

  $(".bullet").eq(stepCounter).removeClass("complete");
});

$(".bullet").click(function () {
  console.log("button");
});

function fadeIn(index) {
  if (index == 0) {
    $(".first-form").fadeIn();
    $(".second-form").hide();
    $(".third-form").hide();
    $(".first").fadeIn();
    $(".second").hide();
    $(".third").hide();
    $(".form-img1").fadeIn();
    $(".form-img2").hide();
    $(".form-img3").hide();
  } else if (index == 1) {
    $(".first-form").hide();
    $(".second-form").fadeIn();
    $(".third-form").hide();
    $(".first").hide();
    $(".second").fadeIn();
    $(".third").hide();
    $(".form-img1").hide();
    $(".form-img2").fadeIn();
    $(".form-img3").hide();
  } else if (index == 2) {
    $(".first-form").hide();
    $(".second-form").hide();
    $(".third-form").fadeIn();
    $(".first").hide();
    $(".second").hide();
    $(".third").fadeIn();
    $(".form-img1").hide();
    $(".form-img2").hide();
    $(".form-img3").fadeIn();
  }
}
