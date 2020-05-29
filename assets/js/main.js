
    var myNav = document.getElementById('mynav');
    var nav_link = document.getElementsByClassName('nav-link');
   
   
    window.onscroll = function () { 
    if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
        if(document.body.scrollTop >= 200 || document.documentElement.scrollTop >=200){
        
            move();
        
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
