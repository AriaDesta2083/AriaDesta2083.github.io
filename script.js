var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000);
}

function sayHello(){
    yourName = document.getElementById("username").value;
    if (yourName == "" || !yourName)
        alert("Maaf Masukkan Username Anda Terlebih Dahulu")
    else
        alert("Hallo "+yourName+" Selamat Datang Di Tani IT")
}

function showhide(toggle) {
    var elementmode = document.getElementById(toggle).style;
    elementmode.display = (!elementmode.display) ? 'none' : '';
}
function openclose(toggle) { showhide(toggle); }


function mypassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
