const firstPost = document.querySelector("#folding-list-1");
const secondPost = document.querySelector("#folding-list-2");
const thirdPost = document.querySelector("#folding-list-3");
const clickListFirst = document.querySelector("#wrapper-click-1");
const clickListSecond = document.querySelector("#wrapper-click-2");
const clickListThird = document.querySelector("#wrapper-click-3");

clickListFirst.addEventListener("click", () => {
  if (firstPost.style.height === "0px") {
    firstPost.style.height = "270px";
    clickListFirst.classList.toggle("post-list-1");
  } else {
    firstPost.style.height = "0px";
  }
});
clickListSecond.addEventListener("click", () => {
  if (secondPost.style.height === "0px") {
    secondPost.style.height = "270px";
  } else {
    secondPost.style.height = "0px";
  }
});
clickListThird.addEventListener("click", () => {
  if (thirdPost.style.height === "0px") {
    thirdPost.style.height = "270px";
  } else {
    thirdPost.style.height = "0px";
  }
});
