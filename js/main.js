//create hide/show navbar
showNavbar = () => {
  $(".navbar--drop").on("click", function () {
    $(".navbar a:gt(0)").toggle();
  });
}

//create hide/show address info
showAddressDetails = () => {
  $(".details__header").on("click", function () {
      $(".details__body").toggle();
  });
} 

//create hide/show menu product
showIndexSideBar = () => {
  $(".dropdown").on("click", function () {
    $(".menu").show();
    document.body.style.overflow = "hidden";
  });
}
hideIndexSideBar = () => {
  $(".close").on("click", function () {
    $(".menu").hide();
    document.body.style.overflow = "scroll";
  });
}

//change content filter 
changeNameItem = () => {
  $(".filter__box:first").text("Danh mục: Laptop");
  $(".filter__box:first").append("<i class='fa-solid fa-chevron-down'></i>");
  $(".filter__box:last").text("");
  $(".filter__box:last").append("<i class='fa-solid fa-filter'></i>");
  $(".filter__box:last").append("tất cả");
  $(".filter__box:last").append("<i class='fa-solid fa-chevron-down'></i>");
  $(".details__header").append("<i class='fa-solid fa-chevron-down'></i>");
  $(".details__header").css("justify-content", "space-between");
}

let width = screen.width;
if (width <= 1023) {
  //add sticky dropdown menu
  $(window).scroll(function () { 
    let headerHeight = $(".header").outerHeight();
    let bannerHeight = $(".navbar").outerHeight();
    let rowHeight = $(".index__produce").outerHeight();
    let height = headerHeight + bannerHeight + rowHeight;
    if (($(window).scrollTop() > 616) && ($(window).scrollTop() < height)) {
        $(".dropdown").addClass("dropdown__fixed");
        $(".dropdown").addClass("dropdown__fixed");
    } else {
        $(".dropdown").removeClass("dropdown__fixed");
        $(".dropdown").removeClass("dropdown__fixed");
    }
  });
  showNavbar();
  showAddressDetails();
  showIndexSideBar();
  hideIndexSideBar();
}
if (width <= 600) {
  changeNameItem();
}

//add sticky navbar
let addSticky = () => {
  $(document).ready(function () {
    $(window).scroll(function () { 
      if ($(window).scrollTop() > 200) {
        $(".header").css("display", "none");
        $(".main").css("margin-top", "194px");
        $(".navbar").addClass("navbar__sticky");
      } else {
        $(".header").css("display", "flex");
        $(".main").css("margin-top", "0");
        $(".navbar").removeClass("navbar__sticky");
      }

    });
  });
}
addSticky();

//change address 
$('.item').on('click', function(){
  var value = $(this).attr('name');
  if (value === "Quan1") {
    $("iframe").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5848487788667!2d106.71035697388932!3d10.76644395938012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f42ca431253%3A0xb218a9adb7278f7d!2zTmjDoCBUaOG7nSBUaOG7pyBUaGnDqm0sIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1697597546318!5m2!1svi!2s");
  }
  else if (value === "TanPhu") {
    $("iframe").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.04553078648!2d106.61517976929471!3d10.807824835087244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be5ae3a5367%3A0xa5e6d2008e971100!2zMzQxYSBMw6ogVHLhu41uZyBU4bqlbiwgU8ahbiBL4buzLCBUw6JuIFBow7osIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1697597736045!5m2!1svi!2s");
  }
  else if (value === "GoVap") {
    $("iframe").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.858169399059!2d106.68223196929605!3d10.82216413479212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174deb3ef536f31%3A0x8b7bb8b7c956157b!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBUUC5IQ00!5e0!3m2!1svi!2s!4v1697597305139!5m2!1svi!2s");
  }
  else if (value === "Quan4") {
    $("iframe").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.644051302674!2d106.69285128004068!3d10.760587360730737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fe28c676e19%3A0xc274eba50301a412!2zQ8O0bmcgdmnDqm4gQuG6v24gTmjDoCBS4buTbmc!5e0!3m2!1svi!2s!4v1697598132354!5m2!1svi!2s");
  }
});

//show slide 
$(document).ready(function(){
  $('.slideShow').slick({
    autoplay: true,
    arrows: false,
    dots: true
  });
});

//totop 
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//paging handling
function getPageList(totalPages, page, maxLength){
  function range(start, end){
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var sideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

  if(totalPages <= maxLength){
    return range(1, totalPages);
  }

  if(page <= maxLength - sideWidth - 1 - rightWidth){
    return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
  }

  if(page >= totalPages - sideWidth - 1 - rightWidth){
    return range(1, sideWidth).concat(0, range(totalPages- sideWidth - 1 - rightWidth - leftWidth, totalPages));
  }

  return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
}

$(function(){
  var numberOfItems = $(".displayProduct .productCard").length;
  var limitPerPage = 20; //How many card items visible per a page
  var totalPages = Math.ceil(numberOfItems / limitPerPage);
  var paginationSize = 7; //How many page elements visible in the pagination
  var currentPage;

  function showPage(whichPage){
    if(whichPage < 1 || whichPage > totalPages) return false;

    currentPage = whichPage;

    $(".displayProduct .productCard").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

    $(".pagination li").slice(1, -1).remove();

    getPageList(totalPages, currentPage, paginationSize).forEach(item => {
      $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
      .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
      .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
    });

    $(".previous-page").toggleClass("disable", currentPage === 1);
    $(".next-page").toggleClass("disable", currentPage === totalPages);
    return true;
  }

  $(".pagination").append(
    $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("<")),
    $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text(">"))
  );

  $(".displayProduct").show();
  showPage(1);

  $(document).on("click", ".pagination li.current-page:not(.active)", function(){
    return showPage(+$(this).text());
  });

  $(".next-page").on("click", function(){
    return showPage(currentPage + 1);
  });

  $(".previous-page").on("click", function(){
    return showPage(currentPage - 1);
  });
});


