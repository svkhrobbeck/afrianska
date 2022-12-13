elBtnOpener = document.querySelector("[data-btn-opener]");
elBtnCloser = document.querySelector("[data-btn-closer]");
elNavList = document.querySelector(".sitenav__list");

elBtnOpener.addEventListener("click", () => {
  elNavList.style.right = "0";
});

elBtnCloser.addEventListener("click", () => {
  elNavList.style.right = "-100%";
});
