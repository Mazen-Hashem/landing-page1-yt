// function scope for navbar
function navBar() {
  const btn = document.querySelector("#navbar_btn");
  const list = document.querySelector(".list");

  // adding(display: block;) and removing(display: none;) active class to ul by clicking on the button
  btn.addEventListener("click", e => {
    e.stopPropagation();
    list.classList.toggle("active_list");
  });

  // hide the list if the clicked target is anything accept list
  document.addEventListener("click", e => {
    if (e.target !== list) {
      list.classList.remove("active_list");
    }
  });
} navBar();



// function scope for portfolio
function portfolioHeight() {
  const Btn = document.querySelector("#hight_btn");
  const portfolioContainer = document.querySelector("#portfolio_container");

  // resize the height of the container dynamicly by the height of the article
  function resizeHeight() {
    const portfolioArticle = document.querySelector("#portfolio_article").clientHeight;
    portfolioContainer.style.cssText = `height: ${portfolioArticle}px;`;
  } resizeHeight(); window.addEventListener("resize", resizeHeight);

  /*
    by clicking on the button
    - fit-content the height of the container
    - adding(display: none;) unactive class to button
    - removing resize event from resizeHeight function
  */
  function hightBtn() {
    portfolioContainer.style.cssText = `height: fit-content;`;
    Btn.classList.add("unactive_btn");
    window.removeEventListener("resize", resizeHeight);
  } Btn.addEventListener("click", hightBtn);
  
} portfolioHeight();