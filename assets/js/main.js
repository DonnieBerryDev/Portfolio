$(document).scroll(function () {
  $("nav").toggleClass("navScrolled", $(this).scrollTop() > 1);
  $("nav").toggleClass("navScrolled", $(this).scrollTop() > 1);
});
$(document).ready(function () {
  $("#hamburger_icon").on("click", function () {
    $(".hamburger").toggleClass("activeMenu");
  });

  $(".bottom_nav").css({
    bottom: 0,
    transition: "0.7s ease-in-out",
  });
});

$(document).ready(function () {
  $("#hamburger_icon").click(function () {
    $(this).toggleClass("open");
  });
});
