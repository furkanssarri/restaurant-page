import data from "./assets/data/home.json";
// import { homeMainModule } from "./homeModule";
import { Product } from "./Product.js";
import pizzaPic from "./assets/img/pizza.jpg";
import quattroFromaggiPic from "./assets/img/quattro-fromaggi.jpg";
import chickenBurgerPic from "./assets/img/chickenburger.jpg";
import fetucciniPic from "./assets/img/fetuccini.jpg";



export const menuModule = function () {
   const products = [
      {
         name: "Regular Pizza",
         ingredients: ["tomato sauce", "mozzarella", "olives"],
         img: pizzaPic,
         price: `$5`,
      },
      {
         name: "Quattro Formaggi Pizza",
         ingredients: ["mozarella", "gorgonzola", "parmigiano-reggiano"],
         img: quattroFromaggiPic,
         price: `$5`,
      },
      {
         name: "Chickenhburger",
         ingredients: ["caramelized onions", "burger sauce", "cheddar cheese"],
         img: chickenBurgerPic,
         price: `$5`,
      },
      {
         name: "Fetuccini Alfredo",
         ingredients: ["butter", "parmigiano reggiano cheese"],
         img: fetucciniPic,
         price: `$5`,
      },
   ];

   const mediaQuery = window.matchMedia("(min-width: 992px)");
   const body = document.querySelector("body");
   // const newAside = homeMainModule().aside;
   const section = document.createElement("section");
   const newMain = document.createElement("div");
   newMain.classList.add("menu-wrap");
   products.forEach(element => {
      const cell = document.createElement("div");
      const productName = document.createElement("h6");
      const productDesc = document.createElement("p");
      const priceTag = document.createElement("span");
      const productImg = document.createElement("img");
      cell.classList.add("cell", "menu");
      productDesc.classList.add("ingredients");
      productImg.classList.add("product-image");
      productImg.src = element.img;
      productName.textContent = element.name;
      productDesc.textContent = element.ingredients.join(", ");
      priceTag.textContent = element.price;
      cell.appendChild(productImg);
      cell.appendChild(productName);
      cell.appendChild(productDesc);
      cell.appendChild(priceTag);
      newMain.appendChild(cell);
   });


   section.appendChild(newMain);
   
   return { section };
}