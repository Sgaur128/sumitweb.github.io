console.log('hi web');
// =======================================//
//  crating a responsive navbar component  //
//========================================//

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click',() =>{
  headerElem.classList.toggle("active");
});
// =======================================//
//  crating a portfolio tabbed component  //
//========================================//

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll("p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click',(e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);
    
    p_btn.forEach((curElem)=> curElem.classList.remove(".p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);
    
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    
    p_img_elem.forEach((curElem)=> curElem.classList.add("p-image-not-active"));
   
    img_active.forEach((curElem)=>
     curElem.classList.remove("p-image-not-active"));
});

// =======================================//
//  crating a Testimonial component  //
//========================================//

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay:2500
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  // =======================================//
//  crating a Testimonial component  //
//========================================//

const myJsmedia = (widthSize)=> {
  if( widthSize.matches ){
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      
       
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
  });
  }
}

const widthSize = window.matchMedia("(max-width: 780px)");
// call listener function at run time
myJsmedia(widthSize);
// Attach listener function on state changes

widthSize.addEventListener("change",myJsmedia);


  // =======================================//
//  crating a Scrool-top component  //
//========================================//
const heroSection = document.querySelector(".section-hero");

const footerElement = document.querySelector(".section-footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

// scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icons>`;

scroollElement.innerHTML = `<h3 class="scroll-top">GoTop</h3>`;

footerElement.after(scroollElement);

const scrollTop = () => {
heroSection.scrollIntoView({behavior: "smooth"});
};

scroollElement.addEventListener("click", scrollTop);



 //  Our Work-Data Section Start

 // our animated number section

 const counterNum = document.querySelectorAll(".counter-number");

 const speed = 200;

 counterNum.forEach((curElem)=>{
  const updataNumber =()=>{
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const initialNum = parseInt(curElem.innerText);
   // console.log(initialNum);

    const incrementNumber = Math.trunc(targetNumber / speed)
    // console.log(incrementNumber);
    if (initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incrementNumber}+`
      setTimeout(updataNumber,10)
    }
  };

  updataNumber();
 });
       