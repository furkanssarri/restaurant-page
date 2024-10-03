import data from "./assets/data/home.json";



export const homeMainModule = function () {
   const mediaQuery = window.matchMedia("(min-width: 992px)");
   
   const contentWrapper = document.getElementById("content");
   contentWrapper.classList.add("home-content-wrapper");
   const mainTag = document.createElement("main");
   const landingH1 = document.createElement("h1");
   const landingPara = document.createElement("p");
   const aside = document.createElement("aside");
   landingH1.textContent = "Welcome to our restaurant";
   landingPara.textContent = data.landingParagraph;
   // mainTag.classList.add("bg-displayer");
   const body = document.querySelector("body");
   body.classList.add("body-home");
   mainTag.classList.add("home-page-main");
   aside.classList.add("home-page-aside");
   

   mainTag.appendChild(landingH1);
   mainTag.appendChild(landingPara)
   
   return { mainTag, aside };
}

