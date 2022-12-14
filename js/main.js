// hamburger
elBtnOpener = document.querySelector("[data-btn-opener]");
elBtnCloser = document.querySelector("[data-btn-closer]");
elNavList = document.querySelector(".sitenav__list");

elBtnOpener.addEventListener("click", () => {
  elNavList.style.right = "0";
});

elBtnCloser.addEventListener("click", () => {
  elNavList.style.right = "-100%";
});

// header
elheader = document.querySelector(".site-header");
window.addEventListener("scroll", function () {
  if (this.pageYOffset >= 10) {
    elheader.style.paddingTop = "20px";
    elheader.style.paddingBottom = "20px";
  } else {
    elheader.style.paddingTop = "40px";
    elheader.style.paddingBottom = "40px";
  }
});
