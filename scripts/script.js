$('.menu-toggle').click(function () {
	$('ul').toggleClass('active');
});

$('.link-toggle').click(function () {
	$('ul').toggleClass('active');
});

var read_more_btn = document.getElementsByClassName("read_more_link");
const tp_description = document.querySelectorAll(".tp_description");

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

// slick slider
$(document).ready(function () {
	$(".therapists_slides").slick({
		slidesToShow: 1,
		arrows: true,
		infinite: true,
		speed: 300,
		autoplay: false,
		adaptiveHeight: false
	});
	$(".prev-btn").click(function () {
		$(".therapists_slides").slick("slickPrev");
		for (var i = 0; i < tp_description.length; i++) {
			tp_description[i].classList.remove("initial_height");
		}
	});

	$(".next-btn").click(function () {
		$(".therapists_slides").slick("slickNext");
		for (var i = 0; i < tp_description.length; i++) {
			tp_description[i].classList.remove("initial_height");
		}
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


// read more button on therapist slide
for (var i = 0; i < read_more_btn.length; i++) {
	read_more_btn[i].addEventListener('click', () => {
		for (var i = 0; i < tp_description.length; i++) {
			tp_description[i].classList.toggle("initial_height");
		}
	}, false);
}

// form submittion
let form_submit = document.querySelector(".form");
let first_name = document.querySelector("#first_name");
let last_name = document.querySelector("#last_name");
let phone_number = document.querySelector("#phone_number");
let email = document.querySelector("#email");
let therapy_service = document.querySelector("#therapy_service");
let therapist = document.querySelector("#therapist");

form_submit.addEventListener('submit', (e) => {
	e.preventDefault();

	Email.send({
		Host : "smtp.gmail.com",
		Username : "clsuccess6@gmail.com",
		Password : "lungh!le_7",
		To : "lunghilesuccess1@gmail.com",
		From : email.value,
		Subject : "New email from Mindspace",
		Body :
			"New email has been sent from the mindspace website by" + first_name.value + last_name.value + "with the phone number: " + phone_number.value
			 + " requesting services of " + therapy_service.value + " from " + therapist.value
	}).then(
	  message => alert("Thank you!. The email has been sent."), 
	  console.log()
	);

	reset();
}, false);