//JQUERY ACCORDION WITHOUT ANIMATION

$(document).ready(function () {
  const activeItem = $(".item.active").find(".content");
  $(activeItem).show();
});

$(".item").on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    const contentElem = $(this).children(".content")[0];
    const icon = $(this).find(".fa-minus")[0];
    $(icon).removeClass("fa-minus");
    $(icon).addClass("fa-plus");
    $(contentElem).slideUp();
  } else {
    $(".item").removeClass("active");
    $(this).addClass("active");
    const items = $(".item");
    $.each(items, function (index, item) {
      if ($(item).hasClass("active")) {
        const contentElem = $(item).children(".content")[0];
        const icon = $(item).find(".fa-plus")[0];
        $(icon).removeClass("fa-plus");
        $(icon).addClass("fa-minus");
        $(contentElem).slideDown();
      } else {
        const contentElem = $(item).children(".content")[0];
        const icon = $(item).find(".fa-minus")[0];
        $(icon).removeClass("fa-minus");
        $(icon).addClass("fa-plus");
        $(contentElem).slideUp();
      }
    });
  }
});

//JQUERY DRAGGER
$(".dragger-area").on("mouseenter", function () {
  console.log("entered into dragger");
  $("#obj").on("click", function () {});
  $("#obj")
    .on("mousedown", function () {
      $(".dragger-area").on("mousemove", function () {
        console.log("drag something");
      });
    })
    .on("mouseup", function () {
      console.log("nothing");
    });
  //   $(this).on("mousemove", function (event) {
  //     var parentOffset = $(this).parent().offset();
  //     //or $(this).offset(); if you really just want the current element's offset
  //     var relX = event.pageX - parentOffset.left;
  //     var relY = event.pageY - parentOffset.top;
  //     let objectWidth = $("#obj").width();
  //     let objectHeight = $("#obj").height();

  //     console.log(`LEFT: ${relX}  Right: ${relY}`);
  //     $("#obj").css("left", relX);
  //     $("#obj").css("top", relY);
  //   });
});
