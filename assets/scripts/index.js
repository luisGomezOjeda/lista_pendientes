import {local_storage,theme_selector} from "./theme.js";
import {list_chores,load_list_chores,create_li,load_todo,create_todo} from "./create_delete--li.js"


let settings_items__counter = list_chores.length,
settings_items__counter_true = list_chores.filter((item)=>item.status === true),
items__counter = document.querySelector(".settings-items__counter").innerHTML =`${settings_items__counter}/${settings_items__counter_true.length}`,
$li = document.querySelectorAll(".list-ul-todo-li");

function load_counter(){
 settings_items__counter = document.querySelectorAll(".list-ul-todo li").length;
  settings_items__counter_true = list_chores.filter((item)=>item.status === true);
  items__counter = document.querySelector(".settings-items__counter").innerHTML =`${settings_items__counter}/${settings_items__counter_true.length}`;
}

 const status__all = document.getElementById("status__all");
status__all.checked = true;

const status__earring = document.getElementById("status__earring");
const status__completed = document.getElementById("status__completed");

window.addEventListener("click",(e)=>{
 if(e.target.matches(".list-ul-todo-li input"))load_counter();
 if(e.target.matches("li button"))load_counter();
 if(e.target.matches(".list-ul-todo-li button"))load_counter();

 if(e.target.matches("#status__all")){
   if(status__all.checked){
      status__completed.checked = false;
      status__earring.checked = false;
      $li.forEach(li=>{
        li.style.setProperty("display","flex");
      });
    }

  if(!(status__earring.checked || status__completed.checked)){
   status__all.checked = true;
  }
 }
  if(e.target.matches("#status__completed")){
    if(status__completed.checked){
      status__all.checked = false;
      status__earring.checked = false;

      list_chores.forEach((li,index)=>{
        $li[index].style.setProperty("display","flex");
        if(!li.status){
          $li[index].style.setProperty("display","none");
        }
      });
    }
    if(!(status__all.checked || status__earring.checked)){
    status__completed.checked = true;
   }
  }
  if(e.target.matches("#status__earring")){
   status__all.checked = false;
   status__completed.checked = false;

    list_chores.forEach((li,index)=>{
      $li[index].style.setProperty("display","flex");
      if(li.status){
        $li[index].style.setProperty("display","none");
      }
    });

   if(!(status__all.checked || status__completed.checked)){
    status__earring.checked = true;
   }
  }
});