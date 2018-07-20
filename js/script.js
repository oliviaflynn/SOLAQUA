//weather api

function cat(data) {                           // Callback when JSON loads
    var newContent = '';                                // Variable to hold HTML
    
      // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
      //for (var i = 0; i < data.events.length; i++) {    // Loop through object
       newContent += '<div class="event">';
       newContent += '<p>' + data.name + '</p>';
       newContent += '<p>' + data.weather[0].main + '</p>';
       newContent += '<p>' + data.weather[0].description + '</p>';
       newContent += '<p>' + data.main.temp + '</p>';
       newContent += '<img src=\"https://openweathermap.org/img/w/'+ data.weather[0].icon + '.png\">';
       newContent += '</div>';
      //}
   
      // Update the page with the new content
      document.getElementById('content').innerHTML = newContent;
  }


/*

NAV

*/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 


/*

Back To Top Button

*/


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

