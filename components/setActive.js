// set active for current page
jQuery(function ($) {
  var path = window.location.href;
  console.log(path);
  // because the 'href' property of the DOM element is the absolute path
  $(".nav-link").each(function () {
    if (this.href === path) {
      $(this).addClass("active");
    }
  });
});

// change active on click

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});
