const menuToggle=document.querySelector("menu-toggle");
 const navMenu=document.querySelector("nav-menu");
 //Abrir/cerrar nemu
 menuToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("active");


    if (navMenu.classList.contains("active")){
        navMenu.classList.remove("active");
    } else{
        navMenu.classList.add("active");
    }
 });
 document.addEventListener("click",(e)=>{
    if(
        !menuToggle.contains(e.target)&&
        !navMenu.contains(e.target)
    ){
        navMenu.classList.remove("active");
    }
 });
