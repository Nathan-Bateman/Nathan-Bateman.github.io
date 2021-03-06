//make sticky header functionality
var sticky = $('.sticky');
var defaultHeader = $('.default');
var projectOne =  $('.c-one');
var projectTwo =  $('.c-two');
var projectThree =  $('.c-three');
var projectFour =  $('.c-four');
var projectFive =  $('.c-five');
var projectSix =  $('.c-six');
$(window).scroll(function() {
	if ($(window).width() >= 768 && $(this).scrollTop() >=180) {
		sticky.removeClass( "hide-menu" );
		sticky.addClass('show-sticky');

	} else {
		sticky.addClass('hide-menu');
		sticky.removeClass('show-sticky');
	};
});
//modal data attributes to load
var projectModal = $('#work').on('show.bs.modal', function (event) {
  var imgClicked = $(event.relatedTarget); // Button that triggered the modal
  var imgFiletoLoad = imgClicked.data('img'); // Extract info from data-* attributes
  var description = imgClicked.data('description');
  var skills = imgClicked.data('skills');
  var titleToLoad = imgClicked.data('title');
  var liveLink = imgClicked.data('live');
  var gitLink = imgClicked.data('git');
  var modal = $(this);
  modal.find('.modal-title').text(titleToLoad);
  modal.find('.modal-body .description').text(description);
  modal.find('.modal-body .skills').text(skills);
  modal.find('.modal-body img').attr("src",imgFiletoLoad);
  modal.find('.modal-footer .live').attr("href",liveLink);
  modal.find('.modal-footer .git').attr("href",gitLink);
});

//slider carousel
$(document).ready(function() { 

	var displayCarousel = [projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix];
	$(".carousel-wrapper li:first").before($(".carousel-wrapper li:last"));
	$( ".arrow-wrapper-right" ).click(function() {
		console.log('right');
		var item_width = $('.carousel-wrapper li').outerWidth();
		var left_indent = parseInt($('.carousel-wrapper').css('left')) - item_width;
	  		$( ".carousel-wrapper" ).animate({ "left": left_indent }, 'slow', function(){ 

	  			$('.carousel-wrapper li:last').after($('.carousel-wrapper li:first'));
	  			$('.carousel-wrapper').css({'left' : '-450px'}); 
	  		}); 
	});

	$( ".arrow-wrapper-left" ).click(function() {
		console.log('left');
		var item_width = $('.carousel-wrapper li').outerWidth();
		var left_indent = parseInt($('.carousel-wrapper').css('left')) + item_width;
		$( ".carousel-wrapper" ).animate({ "left": left_indent }, 'slow', function(){ 
			$('.carousel-wrapper li:first').before($('.carousel-wrapper li:last'));
			$('.carousel-wrapper').css({'left' : '-450px'});

		});
	});

	$( "#menu" ).click(function() {

  		$( "#menu-num p" ).toggleClass('transform-visibility');
	});
	$( ".sticky .header #menu" ).click(function() {
		$( ".sticky .header #menu" ).toggleClass('hide-menu');
  		$( ".show-sticky #menu-num" ).toggleClass('hide-menu');
	});

	$('.flexslider').flexslider({
	    animation: "slide",
	    animationLoop: false,
	    animationSpeed: 700,
	    itemWidth: 300,
	    itemMargin: 15,
	    maxItems: 3,
	    useCSS: true,
	    pauseOnAction: true,
	    touch: true
  });
	var carouselProjects = $('.flex-viewport');
var normalProjects = $('.not-carousel');

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
	
if (window.mobileAndTabletcheck() === true) {
	carouselProjects.addClass( "no-margin" );
	console.log('mobile device');

} else {
	// carouselProjects.addClass( "no-margin" );
	console.log('not mobile');

	}

});
//display carousel but not on mobile or small

