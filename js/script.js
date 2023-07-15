/*Atviar menu hamburguer*/
const btnMenu=document.querySelector(".content-navbar .navbarTop .brand");
const menu=document.querySelector(".content-navbar .navbar");
/*Funcao menu hamburguer*/
btnMenu.onclick=()=>{
    if(btnMenu.classList.contains('active')){
       	  btnMenu.classList.remove('active')
       	  menu.style.display="none";

       	  btnMenu.style.display="none";
       	  btnMenu.setAttribute("class","bi-list")
       	  btnMenu.setAttribute("style","font-size:1.8rem;")
       }else{
       	 btnMenu.classList.add('active');
       	 menu.style.display="block";
       	 btnMenu.setAttribute("class","active bi-x-lg")
         btnMenu.setAttribute("style","font-size:1.8rem;")
     }
  }
  /*Atviar menu hamburguer end*/
 /*Ativar link de menu*/
const linkMenu=document.querySelectorAll(".navbar ul li a")
    function activeLinkMenu()
    {
    linkMenu.forEach((item)=>item.classList.remove("linkActive"))
    this.classList.add("linkActive");
    }
   linkMenu.forEach((item)=>item.addEventListener("click",activeLinkMenu))
   /*Ativar link de menu end*/