window.onload = function(e) {

    stickyNav();
    smoothScrolling();
    scroll_on_tour_press();
    checkScroll();
  
   
    
    

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
              let active_link=document.querySelector(".active");
              if(active_link){
                  active_link.classList.remove("active");
              }
                    
                
         }
}

function smoothScrolling(e){
   
    let links= Array.from(document.getElementsByClassName("nav-link"));
    
     links.forEach(link=>{
       link.addEventListener("click",scrollToElement); 
    });
    
    
}

function scrollToElement(e){
    e.preventDefault();
    let section=document.getElementById(e.target.getAttribute("href").substring(1));
    scrollSmoothlyTo(section.offsetTop);
    
    
}

function scroll_on_tour_press(){
    let button = document.querySelector(".tour");
    let landing_page = document.querySelector(".landing_page");
    let skills_section=document.querySelector(".skills");
    button.addEventListener("click",(e)=>{
        e.preventDefault();
        scrollSmoothlyTo(skills.offsetTop);
       
    });
    
        
}

function scrollSmoothlyTo(offset){
    const STEP=20;
    const TIME=30;
    let newOffset=0;
    let currentOffset=window.pageYOffset;
    let navbar_height=document.querySelector(".navbar").clientHeight;
    
   
    
    
    if(currentOffset+navbar_height-STEP>=offset){
        newOffset=currentOffset-STEP;  
        window.scrollTo(currentOffset,newOffset);
        if(checkIfEndScroll()) return
        setTimeout(function(){scrollSmoothlyTo(offset);},TIME);
    }else if(currentOffset+navbar_height+STEP<=offset){
        newOffset=currentOffset+STEP;
        window.scrollTo(currentOffset,newOffset);
         if (checkIfEndScroll()) return 
        setTimeout(function(){scrollSmoothlyTo(offset);},TIME);
    }
   

}

function checkIfEndScroll(){
    
    if(window.pageYOffset==0 || window.pageYOffset+window.innerHeight==document.body.clientHeight){
        return true;     
    }else{
        return false;
    }
}


function checkScroll(){
     
    let sections=[...document.querySelectorAll("section")];
    window.addEventListener("scroll", debounce(()=>getOfssetOfSections(sections)));
}

function getOfssetOfSections(sections){
  
    
    sections.forEach((value,index)=>{
      
        if(window.innerHeight+window.pageYOffset>value.offsetTop+150){
             name= value.classList[0];
             if(document.querySelector(".active"))
                document.querySelector(".active").classList.remove("active");
             document.querySelector(`a[href^="#${value.classList[0]}"]`).classList.add("active");
            
        }
    });
}

function debounce(func, wait = 20, immediate = true) {
    console.log(func);
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };






