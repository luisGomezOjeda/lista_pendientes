export function load_counter(){
  let $li = document.querySelectorAll(".list-ul-todo-li"),
  li_input = document.querySelectorAll(".list-ul-todo-li input"),
  li_input__true = Array.from(li_input).filter(input=> input.checked),
  settings_items__counter = document.querySelector(".settings-items__counter").innerHTML = `${$li.length}/${li_input__true.length}`;
}

function li_display(status){
  const $li = document.querySelectorAll(".list-ul-todo-li");
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

export function settingsStatus(e,all,earring,completed){
  const status__all = document.getElementById(all),
  status__earring = document.getElementById(earring),
  status__completed = document.getElementById(completed);

  if(e.target.matches(`#${all}`)){
    status__earring.checked = false;
    status__completed.checked = false;
    if(!status__earring.checked && !status__completed.checked) status__all.checked = true;
    li_display("all");
  }
  if(e.target.matches(`#${earring}`)){
    status__all.checked = false;
    status__completed.checked = false;
    if(!status__all.checked && !status__completed.checked) status__earring.checked = true;
      li_display("earring");
  }
  if(e.target.matches(`#${completed}`)){
    status__all.checked = false;
    status__earring.checked = false;
    if(!status__all.checked && !status__earring.checked) status__completed.checked = true;
      li_display("completed");
  }
}

export function settingsClear(e,resetStatus,reset,ul,li,fun){
  if(e.target.matches(`#${resetStatus}`)){
    const $ul = document.querySelector(ul),
    $listLi = document.querySelectorAll(li)
      .forEach(li=>{
        if(li.querySelector("input").checked){
          $ul.removeChild(li);
        localStorage.removeItem(li.querySelector("input").id);
        }
        fun();
      });
  }
  if(e.target.matches(`#${reset}`)){
    let i = 0;
    let length = JSON.parse(localStorage.getItem("order"));
    while(i <= length){
      localStorage.removeItem(`value${i}`);
      i++;
    }
    document.querySelector(ul).innerHTML = "";
    fun();
  }
}