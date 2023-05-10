$('.menu-toggle').click(function () {
    $('ul').toggleClass('active');
});

$('.link-toggle').click(function () {
    $('ul').toggleClass('active');
});

// hide when you scroll down and show menu when you scroll up
var previousScroll = 0;
$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll < 100) {
        showTopNav();
    } else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
        if (currentScroll > previousScroll) {
            hideNav();
            $('ul').removeClass('active');
        } else {
            showNav();

        }
        previousScroll = currentScroll;
    }
});

function hideNav() {
    $(".nav").addClass("hide");
}

function showNav() {
    $(".nav").removeClass("hide");
}

$(document).ready(function () {
	$(".therapists_slides").slick({
		slidesToShow: 1,
		arrows: true,
		infinite: true,
        speed: 300,
		autoplay: false,
        adaptiveHeight: true
	});
	$(".prev-btn").click(function () {
		$(".therapists_slides").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".therapists_slides").slick("slickNext");
	});
	$(".prev-btn").addClass("slick-disabled");
	$(".therapists_slides").on("afterChange", function () {
		if ($(".slick-prev").hasClass("slick-disabled")) {
			$(".prev-btn").addClass("slick-disabled");
		} else {
			$(".prev-btn").removeClass("slick-disabled");
		}
		if ($(".slick-next").hasClass("slick-disabled")) {
			$(".next-btn").addClass("slick-disabled");
		} else {
			$(".next-btn").removeClass("slick-disabled");
		}
	});
});

var tp_desc = document.querySelector(".tp_desc");
var result;

// Slice is JS function
result = tp_desc.slice(0, 10)+'...';


var longText = $('#tp_desc');
longText.text(longText.text().substr(0, 10));