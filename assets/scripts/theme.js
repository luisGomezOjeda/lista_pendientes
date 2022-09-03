export {local_storage,theme_selector};

const main = document.querySelector(".main");

const theme_button = document.querySelector("#theme-button");

const local_storage = window.addEventListener("DOMContentLoaded",()=>{
 
  const theme = localStorage.getItem("theme");

 if(theme === null){

  main.classList.add("dark");
 localStorage.setItem("theme","dark");
 }else{
  main.classList.add(theme);
 }
 if(theme === "dark"){

  theme_button.checked = false;

 }else if(theme === "light"){

  theme_button.checked = true;
  
  }
});

const theme_selector = theme_button.addEventListener("click",()=>{
 if(theme_button.checked){
  main.classList.replace("dark","light"); 
  localStorage.setItem("theme","light");
 }else{
  main.classList.replace("light","dark");
  localStorage.setItem("theme","dark");
 }
});