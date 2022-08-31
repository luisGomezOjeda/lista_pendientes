export {load_counter,li_display,section_settings,$li,list_ul_todo};

let li_input__true;
let li_input,
list_ul_todo = document.querySelector(".list-ul-todo"),
$li = document.querySelectorAll(".list-ul-todo-li"),
status__all = document.getElementById("status__all"),
status__earring = document.getElementById("status__earring"),
status__completed = document.getElementById("status__completed");
status__all.checked = true;

function load_counter(){
 let $li = document.querySelectorAll(".list-ul-todo-li"),
 li_input = document.querySelectorAll(".list-ul-todo-li input");
 li_input__true = Array.from(li_input).filter(input=> input.checked);
 let settings_items__counter = document.querySelector(".settings-items__counter").innerHTML = `${$li.length}/${li_input__true.length}`;
}load_counter();

function li_display(status){
 if(status == "all"){
  $li.forEach(li=> li.style.setProperty("display","flex"));
 } 
 if(status == "earring"){
  $li.forEach(li=>{
   li.style.setProperty("display","flex");
    if(li.querySelector("input").checked)li.style.setProperty("display","none");
  });
 }
 if(status == "completed"){
  $li.forEach(li=>{
   li.style.setProperty("display","flex");
    if(!(li.querySelector("input").checked))li.style.setProperty("display","none");
  });
 }
}


const section_settings = window.addEventListener("click",(e)=>{
 // counter //
 if(e.target.matches("li input,li button")) load_counter();
 // setting //
 status__all
status__earring
status__completed
 if(e.target.matches("#status__all")){
  status__earring.checked = false;
  status__completed.checked = false;
  if(!status__earring.checked && !status__completed.checked) status__all.checked = true;
  li_display("all");
 }
 if(e.target.matches("#status__earring")){
  status__all.checked = false;
  status__completed.checked = false;
  if(!status__all.checked && !status__completed.checked) status__earring.checked = true;
  li_display("earring");
 }
 if(e.target.matches("#status__completed")){
  status__all.checked = false;
  status__earring.checked = false;
  if(!status__all.checked && !status__earring.checked) status__completed.checked = true;
  li_display("completed");
 }
  // clear //
  if(e.target.matches("#status__reset")){
    $li.forEach(li=>{
      if(li.querySelector("input").checked){
        list_ul_todo.removeChild(li);
        localStorage.removeItem(li.querySelector("input").getAttribute("id"));
      }
    });
  }
  if(e.target.matches("#reset")){
    localStorage.clear();
    location.reload();
  }
});