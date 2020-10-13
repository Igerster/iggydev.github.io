var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("myImages");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}










// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("myImages");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2000); 
// }






// var slideIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("myimages");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
// }
// slideIndex++;
// if (slideIndex > x.length) {slideIndex = 1}
// x[slideIndex-1].style.display = "block";
// setTimeout(carousel, 2000);
//}
