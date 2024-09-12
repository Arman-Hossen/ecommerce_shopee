/**
 * @Script js for (eCommerce)
 *
 * @project     - webytor eCommerce
 * @author      -
 * @created_by  - Jiaur Rahman
 * @created_at  - 01-05-2022
 * @modified_by -
 */

/*this function execute when window properly loaded*/
$(window).on("load", function () {
  // code here
});

/*this function execute when DOM element ready*/
$(document).ready(function () {
  // $('#navigation') sticky setup
  $(function () {
    $("#modalCart").on("show.bs.modal", function (event) {
      if (event) {
        $("#navigation").css("position", "initial");
      }
    });
    $("#modalCart").on("hidden.bs.modal", function (event) {
      if (event) {
        $("#navigation").css("position", "sticky");
      }
    });
  });

  // quantity control
  // incre/decree
  $(function () {
    if ($("#quantity").length) {
      let quantityValue;
      let minQuantity = $(".quantity").attr("min");
      let maxQuantity = $(".quantity").attr("max");
      $(".step-down").on("click", function () {
        this.parentNode.querySelector("input[type=number]").stepDown();
        quantityValue =
          this.parentNode.querySelector("input[type=number]").value;
        if (quantityValue <= minQuantity) {
          $(this).addClass("disabled");
        }
        if (quantityValue !== maxQuantity) {
          $(".step-up").removeClass("disabled");
        }
      });
      $(".step-up").on("click", function () {
        this.parentNode.querySelector("input[type=number]").stepUp();
        quantityValue =
          this.parentNode.querySelector("input[type=number]").value;
        if (quantityValue > minQuantity) {
          $(".step-down").removeClass("disabled");
        }
        if (quantityValue === maxQuantity) {
          $(this).addClass("disabled");
        }
      });
    }
  });

  // has-sub slideToggle
  // hamburgerSvg
  // front page
  $(function () {
    if ($(window).width() < 991) {
      $("li.has-sub > a").on("click", function (e) {
        e.preventDefault();
        let parentElement = $(this).parent("li.has-sub");
        parentElement.toggleClass("current");

        parentElement.find("> ul").slideToggle(500);
        $(this).toggleClass("rotateIcon");
      });

      // hamburgerSvg
      // toggleClass  menuOpen
      $(".btnToggleMenu").on("click", function () {
        $("#navWithCategories-for-mobile").toggleClass("translateX");
        $("body").toggleClass("addBackdropBackground");
        if ($(this).hasClass("categoriesOpen")) {
          $(
            '.navWithCategories .nav-tabs a[aria-controls="categories"]'
          ).trigger("click");
        } else {
          $(
            '.navWithCategories .nav-tabs a[aria-controls="mobileMenu"]'
          ).trigger("click");
        }
        // movedFromLeft on mobile view
        $("html").toggleClass("movedFromLeft");
        $("body").toggleClass("overflowX");
      });
    } else {
      $(".clickableIcon.ForCategoryOnDesktop").on("click", function (e) {
        e.preventDefault();
        $(".categoriesIconForDrop .productCategories_menu").slideToggle(400);
      });
    }
  });

  // Init niceScroll on niceScroll
  if ($(".categorySidebar").length && $(window).width() > 991) {
    $(".categorySidebar > ul").addClass("desktopNiceScroll");
    $(".desktopNiceScroll").niceScroll({
      cursoropacitymin: 0.4,
      cursorwidth: 4,
      cursorborder: "none",
      cursorborderradius: 0,
      scrollspeed: 150,
      smoothscroll: true,
    });
  }

  // backToTop
  // Init
  $(function () {
    if ($("#backToTop").length) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $("#backToTop").fadeIn("slow");
        } else {
          $("#backToTop").fadeOut("slow");
        }
      });
      $("#backToTop").click(function () {
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          600
        );
      });
    }
  });

  // initialize
  // feedback-slider
  if ($(".testimonial-slider.owl-carousel").length) {
    $(function () {
      $(".testimonial-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [990, 1],
        itemsTablet: [768, 1],
        itemsMobile: [650, 1],
        pagination: true,
        navigation: false,
        autoPlay: true,
      });
    });
  }

  
  // blocksPreview owlCarousel
  $(function () {
    if ($(".blocksPreview").length) {
      $(".blocksPreview").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: false,
        navigation: false,
        autoPlay: 4000,
      });
    }
  });



  // offerPreview owlCarousel
  $(function () {
    if ($(".offerPreview").length) {
      $(".offerPreview").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        margin: 10,
        pagination: false,
        navigation: false,
        navigationText: ["", ""],
        autoPlay: 4000,
        paginationSpeed: 2000,
        loop: true,
        autoplay: true,
      });
    }
  });

  // initialize
  // Drift
  $(function () {
    if ($("#drift-demo-trigger").length) {
      // Drift initialize
      if ($(window).width() > 992) {
        new Drift(document.querySelector("#drift-demo-trigger"), {
          paneContainer:
            $(window).width() > 991
              ? document.querySelector(".productDetailsInfo")
              : document.querySelector(".imgZoomItem"),
          inlinePane: 100,
          inlineOffsetY: -85,
          containInline: true,
          hoverBoundingBox: true,
        });
      }

      $(".imgZoomItem-indicators li").on("click", function () {
        // set active class
        $(".imgZoomItem-indicators li").removeClass("active");
        $(this).addClass("active");

        // replace triggered img src
        let src = $(this).find("img").attr("src");
        $("img#drift-demo-trigger").attr({
          "data-zoom": src,
          src: src,
        });
      });
    }
  });

  // magnific-popup
  $(function () {
    if (
      $(".mfp-iframe").length ||
      $(".popup-youtube").length ||
      $(".popup-vimeo").length
    ) {
      $(".popup-youtube, .popup-vimeo").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: true,
        fixedContentPos: true,
      });
      $(".lightbox").magnificPopup();
      $(".mfp-iframe").magnificPopup({
        type: "iframe",
      });
    }
  });

  // html5video play when modal_video show
  $(function () {
    if ($(".playVideo").length) {
      $(".playVideo").on("click", function (e) {
        e.preventDefault();
        var id = $(this).data("target");
        $(id + " .modalVideo_item video")[0].play();
      });

      $(".modalVideo").on("hidden.bs.modal", function () {
        var id = $(this).attr("id");
        $("#" + id + " .modalVideo_item video")[0].pause();
      });
    }
  });

  // lightcase Init
  if ($("a[data-rel^=lightcase]").length) {
    $("a[data-rel^=lightcase]").lightcase();
  }

  // initialize
  // productDisplay-carousel
  if ($(".productDisplay-carousel").length) {
    $(function () {
      $(".productDisplay-carousel").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [990, 1],
        itemsTablet: [768, 1],
        itemsMobile: [650, 1],
        pagination: false,
        navigation: true,
        autoPlay: false,
      });
    });
  }

  // initialize
  // productDisplay-carousel
  if ($(".subCategory-carousel").length) {
    $(function () {
      $(".subCategory-carousel").owlCarousel({
        items: 3,
        itemsDesktop: [1600, 2],
        itemsDesktopSmall: [1200, 1],
        itemsTablet: [768, 1],
        itemsMobile: [650, 1],
        pagination: false,
        navigation: true,
        navigationText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
        autoPlay: false,
      });
    });
  }

  // listView
  // gridView
  $(function () {
    if ($(window).width() > 768) {
      $("#listView").on("click", function () {
        $(".product__chunks").addClass("listView");
        $(".changeView").removeClass("current");
        $(this).addClass("current");
      });

      $("#gridView").on("click", function () {
        $(".product__chunks").removeClass("listView");
        $(".changeView").removeClass("current");
        $(this).addClass("current");
      });
    }
  });
});
