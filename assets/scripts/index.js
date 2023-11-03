import {local_storage,theme_selector} from "./theme.js";
import {load_todo,create_todo} from "./create_delete--li.js";
import {load_counter,settingsClear,settingsStatus} from "./li_settings.js"

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

document.addEventListener("DOMContentLoaded",(e)=>{
 local_storage(".main","theme-button");
 load_todo(
 ".list-ul-todo",
 "template--li",
 ".list-ul-todo-li",
 load_counter
);
});

document.addEventListener("click",(e)=>{
 if(e.target.matches("#theme-button"))theme_selector(".main","theme-button");
 if(e.target.matches(".ul__create-ul-li button"))create_todo(
  "text--new-todo",
  ".list-ul-todo",
  "template--li",
  ".list-ul-todo-li",
  load_counter
  );

 settingsStatus(e,
  "status__all",
 "status__earring",
 "status__completed",
 ".list-ul-todo-li"
 );

 settingsClear(e,
  "status__reset"
  ,"reset"
  ,".list-ul-todo",
  ".list-ul-todo-li",
  load_counter
  );
});