var dot1 = $("#dot1 > ul >li");
var contents = $("#contents > div");

dot1.on("click", function(e){
  e.preventDefault();

  var target = $(this);
  var index = target.index();
  //alert(index);
  var section = contents.eq(index);
  var offset = section.offset().top;
  //alert(offset);

  $("body, html").animate({scrollTop:offset},400,"easeOutQuint");
});

$(window).on("scroll", function(){
  var wScroll = $(this).scrollTop();

  if(wScroll >= contents.eq(0).offset().top){
    dot1.removeClass("on");
    dot1.eq(0).addClass("on");
  }

  if(wScroll >= contents.eq(1).offset().top){
    dot1.removeClass("on");
    dot1.eq(1).addClass("on");
  }

  if(wScroll >= contents.eq(2).offset().top ){
    dot1.removeClass("on");
    dot1.eq(2).addClass("on");
  }
  if(wScroll >= contents.eq(3).offset().top){
    dot1.removeClass("on");
    dot1.eq(3).addClass("on");
  }
  if(wScroll >= contents.eq(4).offset().top){
    dot1.removeClass("on");
    dot1.eq(4).addClass("on");
  }
  if(wScroll >= contents.eq(5).offset().top){
    dot1.removeClass("on");
    dot1.eq(5).addClass("on");
  }
  if(wScroll >= contents.eq(6).offset().top){
    dot1.removeClass("on");
    dot1.eq(6).addClass("on");
  }

  // Masonry Grid
  $('.grid').masonry({
    itemSelector: '.item',
    columnWidth: 160,
    gutter: 10
  });


  $('.item').each(function(i){
    setTimeout(function(){
      $('.item').eq(i).addClass('is-visible');
    }, 200 * i);
  });

//show me


      jQuery(document).ready(function(){
        $(window).scroll(function(e){
        	parallaxScroll();
      	});

      	function parallaxScroll(){
      		var scrolled = $(window).scrollTop();
      		$('.test-bird1').css('top',(0-(scrolled*.2))+'px');
      		$('.test-bird2').css('top',(0-(scrolled*.38))+'px');
      	}
       });




});


//Scroll to position
$('a').on('click', function(event) {
debugger;
  var target = $(this).attr("href");

    if( target.length ) {
    event.preventDefault();
        $('html, body').stop().animate({
         scrollTop: $(target).offset().top - 380
        }, 1500, 'easeInOutExpo');
    }
});
//scroll End

//Cache reference to window and animation items
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height );

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }
    //else {
     // $element.removeClass('in-view');
    //}
  });
}

// event handler that listens for the scroll event.
$window.on('scroll', check_if_in_view);
//event handler to listen for both the scroll and resize events.
$window.on('scroll resize', check_if_in_view);

//jQuery trigger method to trigger a scroll event as soon as the DOM is ready.
$window.trigger('scroll');
