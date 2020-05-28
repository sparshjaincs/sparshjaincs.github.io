
    var myNav = document.getElementById('mynav');
    var nav_link = document.getElementsByClassName('nav-link');
    

   
    window.onscroll = function () { 
    if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
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
