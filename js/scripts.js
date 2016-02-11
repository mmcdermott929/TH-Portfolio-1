$(document).ready(function(){
//  //Jquery script to change clicked menu link to active - much simpler:
// $('.main-nav li a').click(function(e) { // select the links    
////     e.preventDefault(); //prevent the link from being followed
//     $('.main-nav li a').removeClass('active'); //get rid of active class
//     $(this).addClass('active'); // add active class to the  
//      alert('hello');
//  }); 
  
//  get the year for copyright in footer
  $(document).ready(function() {
  $("#year").text( (new Date).getFullYear() );
  });
  
});
