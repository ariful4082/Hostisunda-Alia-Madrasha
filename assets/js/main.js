$(document).ready(function(){
	$('.respo-menu').click(function(){
		$('nav.manu').toggleClass('act-menu');
	})

	var overlay = document.getElementById('load-wrapper');
	window.addEventListener('load', function(){
		overlay.style.display='none';
	});

	// Our Students Category for mixitup (STUDENT PAGE)
    var containerEl = document.querySelector('.container-mix');
    var mixer = mixitup(containerEl);

    // Condition of Madrasha all Students for CounterUp (STUDENT PAGE)
    $('.counter').counterUp({
	    delay: 20,
	    time: 2000
	});

	// Students Activities (STUDENT PAGE)
	$('.skillbar').skillbar({
	    speed: 2000
	  });
	// all teacher Information( teacher Page)
	$(".tech-ph").magnificPopup({
            // Specify the lightbox in image.
            type: 'image'
        });
     // Our Madrasha song( about Page)
	 $('#youTube-video').magnificPopup({
	 	type:'iframe',
	 		iframe: {
			  patterns: {
			    youtube: {
			      index: 'youtube.com/', 

			      id: 'v=', 

			      src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
			    },
	
			  },

			  srcAction: 'iframe_src',
			}
		});
	// teacher Activities (teacher PAGE)
	  $(function() {
        $('.chart').easyPieChart({
            size:180,
            barColor:'#4aa704',
            lineWidth:15,
			trackColor:'#cccccc'
			
        });
    });
	
})
$(window).load(function() {
	$('#slider').nivoSlider({
		effect: 'random',
		slices: 15,
		boxCols: 8,
		boxRows: 4,
		animSpeed: 500,
		pauseTime: 3000,
		startSlide: 0,
		directionNav: true,
		controlNav: false,
		controlNavThumbs: false,
		pauseOnHover: true,
		manualAdvance: false,
		prevText: 'Prev',
		nextText: 'Next',
		randomStart: false,
		beforeChange: function(){},
		afterChange: function(){},
		slideshowEnd: function(){},
		lastSlide: function(){},
		afterLoad: function(){}
	});
});
