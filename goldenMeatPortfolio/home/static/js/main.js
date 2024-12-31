/**
* Template Name: Ninestars - v2.0.0
* Template URL: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function ($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight();
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $('.venobox').venobox();
    });
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 5
      }
    }
  });

  // Initi AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out"
  });

})(jQuery);

//Card open and close in Vission Mission and Values 
document.querySelectorAll('.toggle-details').forEach(toggle => {
  toggle.addEventListener('click', function () {
    const card = this.closest('.card-expandable');
    const arrow = this.querySelector('.arrow-circle');

    card.classList.toggle('active');

    if (card.classList.contains('active')) {
      arrow.classList.remove('fa-chevron-down');
      arrow.classList.add('fa-chevron-up');
    } else {
      arrow.classList.remove('fa-chevron-up');
      arrow.classList.add('fa-chevron-down');
    }
  });
});



// slideshow
document.addEventListener('DOMContentLoaded', function () {
  const heroCarousel = document.querySelector('#heroCarousel');

  // Prevent default focus or scroll behavior during transitions
  heroCarousel.addEventListener('slid.bs.carousel', function (e) {
    e.stopPropagation();
    document.activeElement.blur(); // Ensure the focus does not jump
  });

  // Optional: Adjust the viewport manually if needed
  heroCarousel.addEventListener('slide.bs.carousel', function () {
    window.scrollTo(0, window.pageYOffset); // Retain the current scroll position
  });
});
const heroCarousel = document.querySelector("#heroCarousel");

heroCarousel.addEventListener("slid.bs.carousel", () => {
  heroCarousel.style.height = ""; // Reset height after transition
});

heroCarousel.addEventListener("slide.bs.carousel", () => {
  const activeSlide = document.querySelector(".carousel-item.active");
  heroCarousel.style.height = `${activeSlide.offsetHeight}px`; // Set height to the active slide
});



//video
document.addEventListener("DOMContentLoaded", function () {
  const videoButton = document.getElementById("play-video");
  const modal = document.getElementById("video-modal");
  const closeButton = document.getElementById("close-video");
  const video = document.getElementById("internal-video");

  // Open video modal
  videoButton.addEventListener("click", function (e) {
    e.preventDefault();  // Prevent any default action
    modal.style.display = "flex"; // Show modal
    video.play(); // Play the video
  });

  // Close video modal
  closeButton.addEventListener("click", function () {
    video.pause(); // Pause video
    video.currentTime = 0; // Reset video
    modal.style.display = "none"; // Hide modal
  });
});

//Brief sectoin Counter Animation
// Counter animation
document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.counter');

  function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const speed = target / 200;  // Adjust speed to control how fast the counter increases

    const interval = setInterval(() => {
      count += speed;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      counter.innerText = Math.floor(count);  // Show the integer part of the count
    }, 10);  // Adjust the delay to control the speed of the counting
  }

  // Observer to trigger counters once the section is in view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counterElement = entry.target.querySelector('.counter');
        if (counterElement) {
          animateCounter(counterElement);  // Trigger counter animation
        }
        observer.unobserve(entry.target);  // Stop observing after the animation starts
      }
    });
  }, { threshold: 0.5 });  // When 50% of the section is in view, start the animation

  // Observe each stats-box
  document.querySelectorAll('.stats-box').forEach((box) => {
    observer.observe(box);
  });
});
