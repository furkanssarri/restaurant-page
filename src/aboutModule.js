import data from "./assets/data/home.json";
import { homeMainModule } from "./homeModule";

export const aboutModule = function () {
   const mediaQuery = window.matchMedia("(min-width: 992px)");
   const newAside = homeMainModule().aside;
   const section = document.createElement("section");
   const article = document.createElement("article");
   const aboutH1 = document.createElement("h1");
   const aboutH2 = document.createElement("h2");
   const aboutPara1 = document.createElement("p");
   const aboutPara2 = document.createElement("p");
   newAside.classList.add("about-bg");
   section.classList.add("about-page-section");
   aboutH1.textContent = "3 Michelin Restaurant";
   aboutH2.textContent = "Authentic Flavours";
   aboutPara1.textContent = data.AboutParagraph1;
   aboutPara2.textContent = data.AboutParagraph2;


   article.appendChild(aboutH1);
   article.appendChild(aboutPara1);
   article.appendChild(aboutH2);
   article.appendChild(aboutPara2);
   section.appendChild(article)

   return { section, newAside };
}