 jQuery(document).ready(function($) {

	"use strict";	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {

		if ( $('.hero-slide').length > 0 ) {
			$('.hero-slide').owlCarousel({
				items: 1,
				loop: true,
				margin: 0,
				autoplay: true,
				nav: true,
				dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				smartSpeed: 1000
			});
		}

		if ( $('.owl-slide-3').length > 0 ) {
			$('.owl-slide-3').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 30,
				autoplay: true,
				smartSpeed: 500,
				nav: true,
				dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive:{
					600:{
						items: 2
					},
					1000:{
						items: 2
					},
					1200:{
						items: 3
					}
				}
			});
		}

		if ( $('.owl-slide').length > 0 ) {
			$('.owl-slide').owlCarousel({
		    center: false,
		    items: 2,
		    loop: true,
				stagePadding: 0,
		    margin: 30,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        }
		    }
			});
		}


		if ( $('.nonloop-block-14').length > 0 ) {
			$('.nonloop-block-14').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			autoplay: true,
			pauseOnHover: false,
			nav: true,
			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
		});
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutCirc', function(){
        window.location.hash = hash;
      });

    });
  };
//   OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
	siteScroll();
	

	$(function () {
		// $("#bgndVideo").YTPlayer();
	});

});

// SUBSCRIBE METHODS
var form = document.getElementById("subscribe-form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function subscribeEmail(){
	let reader_email = document.getElementById('reader-email').value;
	let xhr = new XMLHttpRequest();
	xhr.open("POST", 'https://api.matheusgirardin.com/v1/subscribe', true);	
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function() {
		if (this.readyState !== XMLHttpRequest.DONE) {
			return;
		}  
		if (this.status === 200) {
			//do something 
			alert("Ok!");
		}
		else{
			//print error 
			alert("Ops!");
		} 
	}
	xhr.responseType = "json";	
	grecaptcha.ready(function() {
		grecaptcha.execute('6LdI_aYZAAAAABI5RJLvdHPDtQc36dFDWUScltD2', {action: 'submit'}).then(function(token) {
			xhr.send(JSON.stringify({"email": reader_email, "recaptcha": token}));	
		});
	  });
}


// LOADING ARTICLES METHOD

let all_articles = [];
let number_of_pages = 1;
let current_size = 0;
const page_size = 10;

function loadPage(response){
	all_articles = response["articles"];
	all_articles.sort(function(a,b){
		return a["created_on"]<b["created_on"]
	})
	console.log(all_articles)
	number_of_pages = Math.ceil(all_articles.length/page_size);
	reloadPage(1)
}

function reloadPage(page){
	renderPagination(page);
	current_size = Math.min(all_articles.length-10*(page-1), page_size);
	renderArticles(all_articles.slice(10*(page-1), 10*(page-1)+current_size));
	document.getElementById('loader').classList.remove("show");
}

function renderArticles(articles){
	let content = document.getElementById('content-block');
	content.innerHTML = "";
    for(let i=0; i<articles.length; i++){
        let article_block = `<div class="post-entry-2 d-flex">
        <div class="thumbnail order-md-2" style="background-image: url('images/img_h_4.jpg')"></div>
        <div class="contents order-md-1 pl-0">
          <h2><a href="blog-single.html">${articles[i]["title"]}</a></h2>
          <p class="mb-3">${articles[i]["subtitle"]}</p>
          <div class="post-meta">
            <span class="d-block"><a href="#">${articles[i]["author"]}</a> in <a href="#">${articles[i]["category"]}</a></span>
            <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> ${articles[i]["time_to_read"]} <span class="icon-star2"></span></span>
          </div>
        </div>
      </div>`
		content.innerHTML += article_block;
    }
}

function getPaginationLimits(page){
	if(parseInt(page) === 1){
		return [1, Math.min(4, number_of_pages+1)];
	}
	else if(parseInt(page) === number_of_pages){
		return [Math.max(1,parseInt(page)-2), parseInt(page)+1];
	}
	return [Math.max(1, parseInt(page)-1), parseInt(page)+2];
}

function renderPagination(page){
	let limits = getPaginationLimits(page)
	console.log(limits)
	let pagination_block = document.getElementById('pagination');
	pagination_block.innerHTML = "";
	for(let i=limits[0]; i<limits[1]; i++){
		let page_indicator;
		if(i!=page){
			page_indicator = `<li><a href="#${i}" onclick="changePage(this)">${i}</a></li>`
		}
		else{
			page_indicator = `<li><a class="active" onclick="changePage(this)">${i}</a></li>`
		}
		pagination_block.innerHTML += page_indicator;
	}
}

let xhr = new XMLHttpRequest();
xhr.open("GET", 'https://api.matheusgirardin.com/v1/articles', true);
document.getElementById('loader').classList.add("show");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function() { 
    if (this.readyState !== XMLHttpRequest.DONE) {
        return;
    }  
    if (this.status === 200) {
		loadPage(this.response)
    }
    else{
        console.log("erro");
    } 
}
xhr.responseType = "json";
xhr.send();

function changePage(e){
	let page = e.getAttribute("href").substr(1)
	reloadPage(page)
	window.scrollTo({ top: 0, behavior: 'smooth' });
}