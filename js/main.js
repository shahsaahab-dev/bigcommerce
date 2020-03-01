// Homepage Carousel Activated
$('.homepage-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// Append the current menu in the navigation mobile menu 
var menu = $("ul.navigation-main");
const mq = window.matchMedia( "(max-width: 500px)" );
if(mq.matches){
    $(".side-menu-wrapper").append(menu);
}



$("button#mobile-menu-activate").on('click',function(){
    $(".side-menu-wrapper").toggleClass("active");
})

