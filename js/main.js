//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

 $( document ).ready(function() {
    
    
      var userInfo = {
          firstName: 'Jane',
          lastName: 'Doe'
      };
      var voteCounts = {
         great: 0,
          greatest: 0,
          total: 0
      };
    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.
    // TODO: Create a function to listen for clicks on the "login" button.
    //      1. When a user clicks the "login" button, hide the login
    //          form elements on the page.
    //      2. Fill the user's first and last name into `div.user-info`.
    //      (NOTE: You do not have to perform any validation on the data as
    //          a base requirement.)


    // TODO: Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the    // proper part of the screen.
    //      2. Within that parent, find all the elements that have the class `details`.
    //      3. Toggle visibility of all the elements within that parent with the class `details`.
    //      4. Change the text of the "view details" button to read "hide details" so the user
    //          understands they can hide the text again.
<<<<<<< HEAD
=======
//$ ('.user-button').on('click', function(event) {
   //  console.log(event);
   //  var userInfo = $ ('.user-info');
   //  var loginForm = $ ('#login-form');
   //      1. When a user clicks the "login" button, hide the login
   //      form elements on the page.
   //  if (userInfo.is(':visible')) {
       //  userInfo.fadeOut();
     //    loginForm.show();
   //  } else {
  //     loginForm.fadeIn();
     
   $('.btn-sm').click(function(){
        $('#login-form').hide();
        $('.user-info').show();
        $('.user-fullname').html(userInfo.firstName + " " + userInfo.lastName);
    });

   
>>>>>>> gh-pages

    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
    //      2. When a button is clicked, look at the `data-vote` attribute to determine    //         
    //      3. Increment the counter for whichever vote talley is affected.
    //      4. Determine the respective percentages (out of 100) for each progress bar.
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.
<<<<<<< HEAD
	
	
	// allows call-to-action text to differ on any id-ed buttton 
      var viewText0 = $('#view0').text();
      var viewText1 = $('#view1').text();
      var viewText2 = $('#view2').text();
      var viewText3 = $('#view3').text();
      // call-to-action text after button is clicked
      var hideDetails = 'Hide Details';
      
      
     $('#login').click(function() {
          $('div.user-info').removeClass('user-info');
        $('#login-form').addClass('details');
        // read that it's better to use .text instead of .html
        $('span.user-fullname').text(' ' + userInfo.firstName + ' ' + userInfo.lastName);
     
     });
 	 
  
  	$('.view-details').click(function() {
 		// checks string matches original, toggles 
 		    $.fn.toggleText = function(t1, t2){
   		if (this.text() == t1) this.text(t2);
   		else this.text(t1);
   		return this;
 		};
 		// individually selects show/hide more details & toggles button msg
 		if (this.id == 'view0') {
 		  	$('#detail0').toggleClass('details');
 		  	$(this).toggleText(viewText0, hideDetails);
 		} else if (this.id == 'view1') {
 			  $('#detail1').toggleClass('details');
        $(this).toggleText(viewText1, hideDetails);
 		} else if (this.id == 'view2') {
        $('#detail2').toggleClass('details');
        $(this).toggleText(viewText2, hideDetails);
 		} else if (this.id == 'view3') {
        $('#detail3').toggleClass('details');
        $(this).toggleText(viewText3, hideDetails);
 		}	
 	});
 	
 	$('button.vote').click(function() {
 			
      function calPercent() {
        
        voteCounts.total = voteCounts.great + voteCounts.greatest;
        var greatPercent = (((voteCounts.great) / voteCounts.total) * 100) + '%';
        var greatestPercent = (((voteCounts.greatest) / voteCounts.total) * 100) + '%';
        $('.great-progress').css('width', greatPercent);
        $('.greatest-progress').css('width', greatestPercent);
        
      };
        //checks value of data-vote and add 1 to either great/est count
      if ($(this).attr('data-vote') == 'great') {
        ++voteCounts.great;
        calPercent();
      } 
      
      else {
        ++voteCounts.greatest;
        calPercent();
        
      }	
    });
  });
=======

})
}
>>>>>>> gh-pages
