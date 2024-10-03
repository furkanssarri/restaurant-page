import "./styles.css";
import { homeMainModule } from "./homeModule.js";
import { aboutModule } from "./aboutModule.js";
import { menuModule } from "./menuModule.js";

const mediaQuery = window.matchMedia("(min-width: 992px)");
const contentWrapper = document.getElementById("content");
const navBtns = document.querySelectorAll("li");


window.addEventListener("load", () => {


   contentWrapper.appendChild(homeMainModule().mainTag);
   contentWrapper.appendChild(homeMainModule().aside);
});

navBtns.forEach(btn => {
   btn.addEventListener("click", updateDom);
});


function updateDom(e) {
   const pointerEvent = e.target.textContent;
   switch (pointerEvent) {
      case "Home":
         removeNodes();
         contentWrapper.appendChild(homeMainModule().mainTag);
         contentWrapper.appendChild(homeMainModule().aside);
         break;
      case "Menu":
         removeNodes();
         contentWrapper.appendChild(menuModule().section);
         break;
      case "About":
         removeNodes();
         contentWrapper.appendChild(aboutModule().section);
         contentWrapper.appendChild(aboutModule().newAside);
         break;
   }
}

function removeNodes() {
   while (contentWrapper.firstChild) {
      contentWrapper.removeChild(contentWrapper.firstChild)
   }
}