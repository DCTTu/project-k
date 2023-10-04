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

var containers = document.querySelectorAll(".products");

forEach(containers, function(index, value) {
  value.addEventListener("click", function() {
    this.classList.toggle("categories-is-shown");
  });
});


var containers = document.querySelectorAll(".map");

forEach(containers, function(index, value) {
  value.addEventListener("click", function() {
    this.classList.toggle("address-is-shown");
  });
});

// var containers = document.querySelectorAll("nav");

// forEach(containers, function(index, value) {
//   value.addEventListener("click", function() {
//     this.classList.toggle(".navbar-nav");
//   });
// });

$(document).ready(function () {
  $(window).scroll(function () { 
      console.log($(window).scrollTop());
      if($(window).scrollTop() > 100){
          $(".nav").addClass("sticky");
      }else{
          $(".nav").removeClass("sticky");
      }
  });
});

showNav = ()=> {
  // $(".navbar").addClass("navbarIsShown");
  $(".fa-solid").on("click", function () {
    $(".navbar a:gt(0)").toggle(); // 
  })
  
}

showNav();

// showNavbar = () => {
//   $(".navbar--drop").on("click", function () {
//     $(".navbar a:gt(0)").toggle();
//   });
// }

// showNavbar();
