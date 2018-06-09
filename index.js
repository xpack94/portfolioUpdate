window.onload = function(e) {

    stickyNav();

};

//function that makes the navbar sticks to the top when scrolling
function stickyNav(e){
    let navbar=document.getElementById("navbar");
    let navbarOffset=navbar.offsetTop;
      document.addEventListener("scroll",function(e){
         if(pageYOffset>=navbarOffset){
            navbar.classList.add("fix");
         }else{
             navbar.classList.remove("fix");
         }
      });

}