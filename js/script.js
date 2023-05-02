$('a').hover(
    function(){ 
      $("a.active").addClass('inactive').removeClass('active');
    },
    function(){ 
      $("a.inactive").addClass('active').removeClass('inactive'); 
    }
  );

  $('div.navbaractive a').on('click', function () {
    var id = $(this).attr('id');
    var ids = $("#navanimation").attr('class');
    var active = "#"+id;
    var removestartat = "start-"+ids;
    var addstartat = "start-"+id;
  
    //$("a").removeClass("active");
    //$("a").removeClass("inactive");
    //$(active).addClass("active");

    $("#navanimation").removeClass(removestartat);
    $("#navanimation").addClass(addstartat);
  });

  $('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

/*Menu icon*/
let menuIcon = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('#navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
  
  let section = document.querySelectorAll('section');
  let navlink = document.querySelectorAll('header nav #navanimation');
  window.onscroll = () => {
    section.forEach(sec =>{
      let top = window.scrollY;
      let offset = sec.offsetTop - 50;
      let height = sec.offsetHeight;
      let idbefor = sec.getAttribute('id');

      
      if(top >= offset && top < offset + height){
        navlink.forEach(links => {
          links.className="";
          /*links.classList.remove('start-'+idbefor);*/
          let idafter = sec.getAttribute('id');
          document.querySelector('header nav #navanimation').classList.add('animation');
          document.querySelector('header nav #navanimation').classList.add('start-'+idafter);
        });
      };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*remove menu icon when click navlink*/ 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
  

  /*dark-light mode*/ 
  let darkmodeicon = document.querySelector('#darkmode-icon');

  darkmodeicon.onclick = () =>{
    darkmodeicon.classList.toggle('bx-sun')
    document.body.classList.toggle('darkmode')
  };

  // scroll reaval

  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 150
  });

  ScrollReveal().reveal('.home-content', { origin: 'top' });
  ScrollReveal().reveal('.home-content h1', { origin: 'left' });
  ScrollReveal().reveal('.home-content h3, .home-content p', { origin: 'right' });
  ScrollReveal().reveal('.home-img img', { origin: 'bottom' });

  ScrollReveal().reveal('.about-content', { origin: 'top' });
  ScrollReveal().reveal('.about-img img, .about-content h2, .about-content p', { origin: 'left' });
  ScrollReveal().reveal('.about-content h2', { origin: 'right' });

  ScrollReveal().reveal('.heading', { origin: 'top' });
  

  ScrollReveal().reveal('.services-container, .promotion-container, .contact-social, .iframe', { origin: 'bottom' });





  
