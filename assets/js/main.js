const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
//  Search
const getsearch = $("#search-btn");
const getsearchInput = $(".header_search");
const getsearchClose = $(".header_search-close");
getsearch.onclick = () => {
  getsearchInput.classList.toggle("active");
  getcartItem.classList.remove("active");
};

getsearchClose.onclick = () => {
  getsearchInput.classList.remove("active");
};
// Cart
const getcart = $("#cart-btn");
const getcartItem = $(".header_cart");

getcart.onclick = () => {
  getcartItem.classList.toggle("active");
  getsearchInput.classList.remove("active");
};

// Xử lý menu khi responsive

const getMenuIcon = $("#menu-btn");
const getMenulist = $(".navbar");
const getOverlay = $(".overlay");

getMenuIcon.onclick = () => {
  getMenulist.classList.add("active");
  getOverlay.classList.add("active");
};

// Tắt menu
const getCloseMenuIcon = $(".navbarCloseIcon span");

getCloseMenuIcon.onclick = () => {
  getMenulist.classList.remove("active");
  getOverlay.classList.remove("active");
};
getOverlay.onclick = () => {
  getMenulist.classList.remove("active");
  getOverlay.classList.remove("active");
};
window.onscroll = () => {
  getcartItem.classList.remove("active");
  getsearchInput.classList.remove("active");
  getMenulist.classList.remove("active");
};
//

// Slider section
window.addEventListener("load", function () {
  const slider = $(".section_slider");
  const sliderMain = $(".section_slider-main");
  const sliderItem = $$(".secton_slider-item");
  const nextBtn = $(".next-btn");
  const prevBtn = $(".prev-btn");
  const sliderItemHeight = sliderItem[0].offsetHeight;
  const sliderItemLength = sliderItem.length;

  const sliderContainers = $$(".section_slider-container");
  let index = 0;
  nextBtn.addEventListener("click", function () {
    handlechangeSlider(1);
  });

  prevBtn.addEventListener("click", function () {
    handlechangeSlider(-1);
  });

  function handlechangeSlider(direction) {
    if (direction === 1) {
      index++;
      if (index >= sliderItemLength) {
        index = 0;
      }
      sliderMain.style = `transform: translateY(-${100 * index}%)`;
      sliderContainers[index].classList.add("active");
    } else if (direction === -1) {
      index--;
      if (index < 0) {
        index = sliderItemLength - 1;
      }
      sliderMain.style = `transform: translateY(-${100 * index}%)`;
      sliderContainers[index].classList.add("active");
    }
  }
});

// Scroll To Top
const scrollTop = $(".scrollTop");
console.log(scrollTop);

function handleScrollTop() {
  if (window.scrollY > 50) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
}

window.addEventListener("scroll", handleScrollTop);
scrollTop.onclick = function () {
  document.documentElement.scrollTop = 0;
};
