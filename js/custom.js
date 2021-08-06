
      // dropdown menu js 
       // var getClass = document.getElementById('mydropdown');
       // getClass.addEventListener("click",()=>{
       //    getClass.classList.toggle('active');
       // });

  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  
  /*=======================
      Services started here
   ========================*/
      var iconBx = document.querySelectorAll('.iconbox'); 
      var contentBx = document.querySelectorAll('.contentbox'); 

      for(var i=0;i<iconBx.length;i++){
        iconBx[i].addEventListener('click',function(){
          for(var i=0;i<contentBx.length;i++){
            contentBx[i].className='contentbox'
          }
          document.getElementById(this.dataset.id).className = 'contentbox active';
          for(var i=0;i<iconBx.length;i++){
            iconBx[i].className = 'iconbox';
          }
          this.className = 'iconbox active';
        });
      }
  /*=======================
      FAQs code started here
    ========================*/
       const faqs = document.querySelectorAll(".faq");
       faqs.forEach(faq =>{
         faq.addEventListener("click",()=>{
           faq.classList.toggle("active");
         });
       });

// client section started here
$('.testi1').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: true,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    1024: {
      items: 2
    }
  }
});