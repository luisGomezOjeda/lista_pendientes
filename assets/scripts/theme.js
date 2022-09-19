// load theme
export function local_storage(classMain,idButton){

  const theme_main = document.querySelector(classMain);
  const theme_button = document.getElementById(idButton);
  const theme = localStorage.getItem("theme");
  if(theme === null){
    theme_main.classList.add("dark");
 localStorage.setItem("theme","dark");
 
}else theme_main.classList.add(theme);

 if(theme === "dark") theme_button.checked = false;

 else if(theme === "light") theme_button.checked = true;
}

// theme selection

export function theme_selector(classMain,idButton){
  const main = document.querySelector(classMain);
  const button = document.getElementById(idButton);
 if(button.checked){
  main.classList.replace("dark","light"); 
  localStorage.setItem("theme","light");
 }else{
  main.classList.replace("light","dark");
  localStorage.setItem("theme","dark");
 }
}