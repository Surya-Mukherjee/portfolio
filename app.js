
  const FULL_CIRCLE = 534; 
const scrollToTop=document.querySelector(".topscreenscroll");
   
 
   
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const percent = Number(el.getAttribute("data-percentage")) || 0;
        const wrapper=el.closest(".wrapper");
               const num=wrapper.querySelector("#number");
           let count=0;   
         let interval= setInterval(() => {
              if(count===percent){
                clearInterval(interval);
                return;
              }else{
              count++;
              num.innerText=count+"%";}
             },1000/percent);
          
        
        console.log(percent);
        const offset = FULL_CIRCLE * (1 - percent / 100); 

        el.style.strokeDashoffset = offset;
        observer.unobserve(el); 
      }
    });
  }, { threshold: 1 });

  document.querySelectorAll(".animate-on-scroll").forEach(el => {
    observer.observe(el);
  });

window.addEventListener("scroll",()=>{
  const trigger=window.innerWidth<=480?300:200;
  if(window.scrollY>40){
    scrollToTop.style.opacity=1;
    scrollToTop.style.transform="scale(1)";
  
  }else{
    scrollToTop.style.opacity=0;
    scrollToTop.style.transform="scale(0)";
    
  }
})
scrollToTop.addEventListener("click", () => {
  (document.documentElement || document.body).scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.querySelectorAll('.has-dropdown > a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent "#" from jumping
    const parentLi = this.closest('.has-dropdown');
    parentLi.classList.toggle('open');
  });
});
function hideMenu(){
const sideBar=document.querySelector(".sidebar");

sideBar.style.display="none";
}
function showSidebar(){
  const sideBar=document.querySelector(".sidebar");

sideBar.style.display="flex";
}
window.addEventListener("scroll",()=>{
  console.log("scrollY: ",window.scrollY);
})