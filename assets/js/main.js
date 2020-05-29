
    var myNav = document.getElementById('mynav');
    var nav_link = document.getElementsByClassName('nav-link');
   
   
    window.onscroll = function () { 
    if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
        if(document.body.scrollTop >= 200 || document.documentElement.scrollTop >=200){
        
           
        }
       
      
        myNav.style.background="white";
        this.myNav.style.transition = ".5s linear";
        var nav_brand= document.getElementsByClassName('brand')[0].style.color='#2A2D2E';
        for(i=0;i<=this.nav_link.length;i++){
            this.nav_link[i].style.color='#2A2D2E';

        }


 
        
    } 
  
    else {
        myNav.style.background="none";
        var nav_brand= document.getElementsByClassName('brand')[0].style.color='white';
        for(i=0;i<=this.nav_link.length;i++){
            this.nav_link[i].style.color='white';
        }
       
       
    }
    
      
};


var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementsByClassName("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem[0].style.width = width + "%";
        elem[1].style.width = width-20 + "%";
        elem[2].style.width = width+10 + "%";
        elem[3].style.width = width-10 + "%";
        elem[4].style.width = width+20 + "%";
        elem[5].style.width = width+15 + "%";
      }
    }


  }
}
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  function openModal1() {
    document.getElementById("myModal1").style.display = "block";
  }
  
  function closeModal1() {
    document.getElementById("myModal1").style.display = "none";
  }

  function openModal2() {
    document.getElementById("myModal2").style.display = "block";
  }
  
  function closeModal2() {
    document.getElementById("myModal2").style.display = "none";
  }

  function openModal3() {
    document.getElementById("myModal3").style.display = "block";
  }
  
  function closeModal3() {
    document.getElementById("myModal3").style.display = "none";
  }

  function openModal4() {
    document.getElementById("myModal4").style.display = "block";
  }
  
  function closeModal4() {
    document.getElementById("myModal4").style.display = "none";
  }

  function openModal5() {
    document.getElementById("myModal5").style.display = "block";
  }
  
  function closeModal5() {
    document.getElementById("myModal5").style.display = "none";
  }

  function openModal6() {
    document.getElementById("myModal6").style.display = "block";
  }
  
  function closeModal6() {
    document.getElementById("myModal6").style.display = "none";
  }



  // or enable responsive functionality:
 

  // Use a proxy
 