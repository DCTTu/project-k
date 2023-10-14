showNavbar = () => {
  $(".navbar--drop").on("click", function () {
    $(".navbar a:gt(0)").toggle();
  });
}
showAddressDetails = () => {
  $(".address__details__header").on("click", function () {
      $(".address__details__body").toggle();
  });
} 
showIndexSideBar = () => {
  $(".dropdown").on("click", function () {
    $(".dropdown__menu").toggle();
  });
}
let addSticky = () => {
  $(document).ready(function () {
    $(window).scroll(function () { 
      // console.log($(window).scrollTop());
      if ($(window).scrollTop() > 234) {
        $(".navbar").addClass("navbar__sticky");
      } else {
        $(".navbar").removeClass("navbar__sticky");
      }
      let headerHeight = $(".header").outerHeight();
      let bannerHeight = $(".navbar").outerHeight();
      let rowHeight = $(".index__produce").outerHeight();
      let height = headerHeight + bannerHeight + rowHeight;
      let width = screen.width;
      if (width <=739) {
        if (($(window).scrollTop() > 349) && ($(window).scrollTop() < height)) {
          $(".dropdown").addClass("dropdown__fixed");
          $(".dropdown").addClass("dropdown__fixed");
        } else {
          $(".dropdown").removeClass("dropdown__fixed");
          $(".dropdown").removeClass("dropdown__fixed");
        }
      }
    });
  });
}
$(window).resize(function(){
  let width = screen.width;
  console.log(width);
  if (width >=600) {
    window.removeEventListener("click", showIndexSideBar());
    $(".dropdown__menu").css("display", "block");
    $(".filter__box:first").text("Danh mục sản phẩm : Laptop");
    $(".filter__box:last").text("Lọc kết quả: tất cả");
    $(".filter__box:last").append("<i class='fa-solid fa-chevron-down'></i>");
  }
  else {
    $(".dropdown__menu").css("display", "none");
    $(".filter__box:first").text("Danh mục: Laptop");
    $(".filter__box:first").append("<i class='fa-solid fa-chevron-down'></i>");
    $(".filter__box:last").text("");
    $(".filter__box:last").append("<i class='fa-solid fa-filter'></i>");
    $(".filter__box:last").append("tất cả");
    $(".filter__box:last").append("<i class='fa-solid fa-chevron-down'></i>");
  }
});
let width = screen.width;
if (width <=600) {
  $(".dropdown__menu").css("display", "none");
  $(".filter__box:first").text("Danh mục: Laptop");
  $(".filter__box:first").append("<i class='fa-solid fa-chevron-down'></i>");
  $(".filter__box:last").text("");
  $(".filter__box:last").append("<i class='fa-solid fa-filter'></i>");
  $(".filter__box:last").append("tất cả");
  $(".filter__box:last").append("<i class='fa-solid fa-chevron-down'></i>");
}

$(document).ready(function(){
  $('.slideShow').slick({
    autoplay: true,
    arrows: false,
    dots: true
  });
});
showIndexSideBar();
showNavbar();
showAddressDetails();
addSticky();

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

