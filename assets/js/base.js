
$("#share").jsSocials({
    shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
});
            $(document).ready(function(){
                $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });
            });
           
//----------------Like ---------------------------------------

function like1(method,instance,value,second = null){
        var element = document.getElementById(value);
        if(second != null){
            var element2 = document.getElementById(second);
        }
        $.ajax({
                    type: "GET",
                    data: {
                        method:method,
                        instance:instance,
                    },
                    url: '/like/',
                    success: function(data) {
                        data = JSON.parse(data);
                        if (data[0] == 0){
                            element.style['-webkit-text-stroke-color'] = "#2EA8E6";
                            element.style.color = "#fff";
                            element.classList.remove('pulse');
                            if(second != null){
                                element2.style['-webkit-text-stroke-color'] = "#2EA8E6";
                            element2.style.color = "#fff";
                            element2.classList.remove('pulse');
                            }
                            var notify = new Notyf();
                        notify.error("Removed from like section.");
                        }
                        else{
                           element.style['-webkit-text-stroke-color'] = "#E57851";
                           element.style.color = "#E57851";
                           element.classList.add('pulse'); 
                           if(second != null){
                            element2.style['-webkit-text-stroke-color'] = "#E57851";
                           element2.style.color = "#E57851";
                           element2.classList.add('pulse'); 
                            }
                           var notify = new Notyf();
                        notify.success("Added to like section.");
                        }
                      
                      
                        
                        
                    }
                });
    }
            

    function dislike1(method,instance,value,count,discount,oppo){
        var element = document.getElementById(value);
        var diselem = document.getElementById(discount);
        $.ajax({
                    type: "GET",
                    data: {
                        method:method,
                        instance:instance,
                    },
                    url: '/dislike/',
                    success: function(data) {
                        data = JSON.parse(data);
                        if (data[0] == 0){
                            element.style['-webkit-text-stroke-color'] = "#546E7A";
                            element.classList.remove('pulse');
                            var notify = new Notyf();
                        notify.error("Removed from disliked section.");
                        }
                        else{
                           element.style['-webkit-text-stroke-color'] = "#E57851";
                           element.classList.add('pulse'); 
                           var notify = new Notyf();
                        notify.success("Added to disliked section.");
                        }
                        diselem.style['-webkit-text-stroke-color'] = "#546E7A";
                        diselem.classList.remove('pulse');
                            document.getElementById(count).innerHTML = data[1];
                            document.getElementById(oppo).innerHTML = data[2];
                          
                        
                    }
                });
    }

    function follow(us,value,value2=null,value3=null){
        var element = document.getElementById(value);
        if (value2 != null){
            var element2 = document.getElementsByClassName(value2);
        }
        if(value3 == null){
            value3 = 'Follow';
        }
        var i;
       
        $.ajax({
                    type: "GET",
                    data: {
                        method:us,
                    },
                    url: '/follow/',
                    success: function(data) {
                        data = JSON.parse(data);
                        if (data[0] == 0){
                            element.style['-webkit-text-stroke-color'] = "#2EA8E6";
                            
                            element.classList.remove('pulse1');
                            if(value2 != null){
                                for(i=0; i<element2.length; i++){
                                element2[i].innerHTML = value3;

                            }
                            }
                            var notify = new Notyf();
                            notify.error("You unfollowed "+data[1]);
                        }
                        else if (data[0] == 2){
                            var notify = new Notyf();
                            notify.error("You can't follow yourself");
                        }
                        else{
                           
                           element.style['-webkit-text-stroke-color'] = "#2EA8E6";
                           element.classList.add('pulse1'); 
                           if(value2 != null){
                                for(i=0; i<element2.length; i++){
                                element2[i].innerHTML = "Unfollow";
                                }

                            }
                           var notify = new Notyf();
                        notify.success("You started following "+data[1]);
                        }
                        
                        
                    }
                });
    }

    function bookmark(method,instance,value,second=null){
        var element = document.getElementById(value);
        if(second != null){
            var element2 = document.getElementById(second);
        }
        var notify = new Notyf();
        $.ajax({
                    type: "GET",
                    data: {
                        method:method,
                        ins:instance,
                    },
                    url: '/mark/',
                    success: function(data) {
                        data = JSON.parse(data);
                        if (data[0] == 0){
                            element.style['-webkit-text-stroke-color'] = "#2EA8E6";
                            element.style.color = "#fff";
                            element.classList.remove('pulse');
                            if(second != null){
                                element2.style['-webkit-text-stroke-color'] = "#2EA8E6";
                            element2.style.color = "#fff";
                            element2.classList.remove('pulse');
                            }
                            var notify = new Notyf();
                        notify.error("Bookmark removed.");
                        }
                        else{
                           element.style['-webkit-text-stroke-color'] = "#E57851";
                           element.style.color = "#E57851";
                           element.classList.add('pulse'); 
                           if(second != null){
                            element2.style['-webkit-text-stroke-color'] = "#E57851";
                           element2.style.color = "#E57851";
                           element2.classList.add('pulse'); 
                            }
                           var notify = new Notyf();
                        notify.success("Bookmark added.");
                        }
                        
                        
                    }
                });
    }

    function delete_all(method,instance,div){
        var result = confirm("Are you sure you want to delete this item?");
        if(result){
        var element = document.getElementById(div);
        $.ajax({
            type:"GET",
            url:"/delete/all/",
            data:{
                "ins":instance,
                "method":method,
            },
            success:function(data){
                data = JSON.parse(data);
                if(data == 1){
                    element.innerHTML = "";
                    var notify = new Notyf();
                    notify.success(method +" deleted successfully.");
                }
                else{
                    var notify = new Notyf();
                    notify.error("Something might be wrong.");
                }
            }
        });
    }
   
}

function searchquery() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myItems");
    cards = cardContainer.getElementsByClassName("carding");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".content");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

    

  $(document).ready(function () {
  $('.title').attr({
      "data-aos": "zoom-in",
      "data-aos-duration": "2000"
  });
  setTimeout(() => {
      AOS.init();
  }, 120);
});



function notification_balance(){
    document.getElementById('div_notification').innerHTML = `
    <div style="width: 100%; height:100%; display: flex; justify-content: center; align-items: center; color: #2EA8E6; pos">
             <i class="fa fa-spinner fa-spin" id="notification_loader"></i>
           </div>
           `;
    $.ajax({
        type:'GET',
        url:'/notification_balance/',
        
        success:function(data){
           
            data = JSON.parse(data);
            if (data[0] == 1){
                
                var i;
                var s = "";
                for(i=0; i<data[1].length; i++){
                    if (data[1][i]['new'] == true){
                        s+= `
                    
                    <div class="pl-3 pt-3 pb-2 pr-4 d-flex justify-content-start border-bottom notification_new" style="" >`;
                    }
                    else{
                        s+= `
                    
                    <div class="pl-3 pt-3 pb-2 pr-4 d-flex justify-content-start border-bottom notification_palette" style="" >`;
                    }
                  s +=  `
             
             <div>
               <img src="/media/`+data[1][i]['image']+`" style="width:40px; height:40px; border-radius:50%;">
             </div>
             `;

                s+=   `
             <div class="ml-2" style="width: 100%;">
               <div class="d-flex justify-content-between">
                 <div style="font-size: 13px; font-weight: 500; color: rgb(0,0,0,0.4);">
                    ` + data[1][i]['category'];
                    if (data[1][i]['new'] == true){
                        s+=`<span class="badge badge-sm ml-1" style="background-color: #2EA8E6; color: #fff; border-radius: 20px; font-size: 9px;"> New </span>`;
                    }
                    s+=`
                </div>
                 <div style="font-size: 13px; font-weight: 500; color: rgb(0,0,0,0.4);">
                   `+data[1][i]['created']+`
                 </div>
               </div>
               <div style="font-size: 13px; font-weight: 500;">
                 `+data[1][i]['activity']+`
               </div>
               
             </div>
           </div>
           `;
                    
                /*
                
                 
           
           */

                }
                document.getElementById('div_notification').innerHTML = s;
                
            }

        }
    });
}
