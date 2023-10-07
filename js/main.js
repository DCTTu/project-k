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

let addSticky = () => {
  $(document).ready(function () {
    $(window).scroll(function () { 
      // console.log($(window).scrollTop());
      if ($(window).scrollTop() > 234) {
        $(".navbar").addClass("navbar__sticky");
      } else {
        $(".navbar").removeClass("navbar__sticky");
      }
    });
  });
}

addSticky();

