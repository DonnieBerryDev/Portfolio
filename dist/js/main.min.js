"use strict";

$(document).ready(function () {});
$(document).scroll(function () {
  $('nav').toggleClass('navScrolled', $(this).scrollTop() > 1);
  $('nav').toggleClass('navScrolled', $(this).scrollTop() > 1);
});