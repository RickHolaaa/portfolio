// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.animate({scrollTop: "0"}, 3000); // For Safari
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
}

function homeFun() {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
    });
}