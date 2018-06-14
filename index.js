window.onload = function(e) {

    stickyNav();
    smoothScrolling();
    scroll_on_tour_press();

};

//function that makes the navbar sticks to the top when scrolling
function stickyNav(e){
   
    let navbar=document.getElementById("navbar");
    let navbarOffset=navbar.offsetTop;
    
     check_offset(pageYOffset,navbarOffset);
    
      document.addEventListener("scroll",function(e){
        check_offset(pageYOffset,navbarOffset);
      });

}
//compare between two offsets 
function check_offset(pageOffset,navbarOffset){
     let navbar=document.getElementById("navbar");
     if(pageOffset>=navbarOffset){
            navbar.classList.add("fix");
         }else{
             navbar.classList.remove("fix");
         }
}

function smoothScrolling(e){
   
    let links= Array.from(document.getElementsByClassName("nav-link"));
    
     links.forEach(link=>{
       link.addEventListener("click",scrollTo); 
    });
}

function scrollTo(e){
    e.preventDefault();
    let section=document.getElementById(e.target.getAttribute("href").substring(1));
    section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "nearest"  });
    
    
}

function scroll_on_tour_press(){
    let button = document.querySelector(".tour");
    let landing_page = document.querySelector(".landing_page");
    button.addEventListener("click",(e)=>{
        e.preventDefault();
        window.scroll({
                       top:landing_page.clientHeight,
                       behavior:'smooth'});    
    });
    
    
}