
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})
document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

//cursor change
function cursorSml() {
	document.querySelector('.cursor-all').classList.remove('cursor');
	document.querySelector(".cursor-all").classList.add("cursor-sm");
}
function cursorNml() {
  document.querySelector('.cursor-all').classList.add('cursor');
	document.querySelector(".cursor-all").classList.remove("cursor-sm");
}
(function(){
  document.querySelectorAll('.linkss').forEach(item => {
    item.addEventListener("mouseover", () => {
      document.querySelector('.cursor-all').classList.toggle('cursor');
      document.querySelector('.cursor-all').classList.toggle('cursor-sm');
    });
  });
  document.querySelectorAll('.linkss').forEach(item => {
    item.addEventListener("mouseleave", () => {
      document.querySelector('.cursor-all').classList.toggle('cursor');
      document.querySelector('.cursor-all').classList.toggle('cursor-sm');
    });
  });
  document.querySelectorAll('.linksss').forEach(item => {
    item.addEventListener("click", () => {
      document.querySelector('.section-menu').classList.toggle('navActive');
      document.querySelector('.menu-open').classList.toggle('fadeOut');
      document.querySelector('.menu-close').classList.toggle('fadeOut');
    });
  });
}());
//Side naviagtion
document.querySelector('.nav-top-3').addEventListener("click", function() {
  document.querySelector('.nav-open').classList.add('nav-active');
} );
document.querySelector('.nav-close').addEventListener('click', function() {
	document.querySelector('.nav-open').classList.remove('nav-active');
})
let navLinks = document.querySelectorAll(".nav-item");
navLinks.forEach(link => {
	link.addEventListener('click', function() {
		document.querySelector('.nav-open').classList.remove('nav-active');
	})
});

//Dark mode
const toggleSwitch = document.querySelector('.toggle-btn input[type="checkbox"]');
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}
toggleSwitch.addEventListener('change', switchTheme, false);
function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      // localStorage.setItem('theme', 'dark'); //add this
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      // localStorage.setItem('theme', 'light'); //add this
  }    
}
// const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);
//     if (currentTheme === 'dark') {
//       toggleSwitch.checked = true;

//     } else if (currentTheme === 'light') {
//       toggleSwitch.checked = false;
//     }
// }


// for para skew text

// const content = document.querySelector(".content");
// let currentPixel = window.pageYOffset;


// const looper = function () {

//     const newPixel = window.pageYOffset;
//     const diff = newPixel - currentPixel;
//     const speed = diff * 0.2;
  
//     content.style.transform = "skewY(" + speed + "deg)";
  
  
//     currentPixel = newPixel;
  
//     requestAnimationFrame(looper);
// };

// looper ();

// Hide Header on on scroll down
(function () {
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
$(window).scroll(function(event){
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-top').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-top');
        }
    }
    
    lastScrollTop = st;
}
}());

// (function () {
//   $(window).scroll(function() {
  
//     // selectors
//     var $window = $(window),
//         $body = $('body'),
//         $panel = $('.panel');
    
//     // Change 33% earlier than scroll position so colour is there when you arrive.
//     var scroll = $window.scrollTop() + ($window.height() / 3);
   
//     $panel.each(function () {
//       var $this = $(this);
      
//       // if position is within range of this panel.
//       // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
//       // Remember we set the scroll to 33% earlier in scroll var.
//       if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
        
//         // Remove all classes on body with color-
//         $body.removeClass(function (index, css) {
//           return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
//         });
         
//         // Add class of currently active div
//         $body.addClass('color-' + $(this).data('color'));
//       }
//     });    
    
//   }).scroll();
// });

(function () {
  $(window).scroll(function () {
    var $window = $(window),
    $body = $('.box'),
    $container1 = $('.container1'),
    $container2 = $('.container2'),
    $container4 = $('.container4'),
    $paramiddle = $('.para-middle'),
    $landpagecenter =$('.land-page-center');

    var scroll = $window.scrollTop() + ($window.height() / 3);

    if ($body.position().top <= scroll && $body.position().top + $body.height() > scroll) {
      $body.css("background-color","#EAEAEA");
      $container1.css("background-color","#EAEAEA");
      $container4.css("background-color","#EAEAEA");
      $paramiddle.addClass('fadeOut');
      $landpagecenter.removeClass('fadeOut');
    } if ($container2.position().top <= scroll && $container2.position().top + $container2.height() > scroll) {
      $body.css("background-color","#151515")
      $container1.css("background-color","#151515");
      $container4.css("background-color","#151515");
      $paramiddle.removeClass('fadeOut');
      $landpagecenter.addClass('fadeOut');

    } else {}
  }).scroll();
}());

function loader(_success) {
  var obj = document.querySelector('.container-pre'),
   inner = document.querySelector('.percentage');
  page = document.querySelector('.box');
  document.querySelector('.cursor-all').classList.toggle('cursor');
  var w = 0,
      t = setInterval(function() {
          w = w + 1;
          inner.textContent = w+'%    ';
          if (w === 101){
              obj.classList.add('fadeOut');
              page.classList.remove('fadeOut');
              document.querySelector('.cursor-all').classList.toggle('cursor');
              clearInterval(t);
              w = 0;
              if (_success){
                  return _success();
              }
          }
      }, 163);
}
loader();