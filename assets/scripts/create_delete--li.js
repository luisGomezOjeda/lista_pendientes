export {list_chores,load_list_chores,create_li,load_todo,create_todo};



const list_chores = [];


let i = 0;
const create_id = ()=> i+= 1 ; 



let z;
function load_list_chores(value){
  list_chores.find((chores,index)=>{
    if(chores.id === value) z = index;
  }
)}



const $list_ul_todo = document.querySelector(".list-ul-todo"),
$template__li = document.getElementById("template--li").content;

let $list_ul_todo_li_checked,
$list_ul_todo_li_delete;


function create_li(id,text){
  const $clone = document.importNode($template__li,true);
  $clone.querySelector("li input").setAttribute("id",id);
  $clone.querySelector("li input + label").setAttribute("for",id);
  const text_p = document.createTextNode(text);

  $clone.querySelector("li p").appendChild(text_p);
  $clone.querySelector("li button").setAttribute("id",id);

  $list_ul_todo.appendChild($clone);


  $list_ul_todo_li_checked = $list_ul_todo.querySelectorAll("li input[type = checkbox]").forEach(input =>{  
    
    input.checked = JSON.parse(localStorage.getItem(`${input.getAttribute("id")}`)).status;

    input.addEventListener("click",()=>{
        localStorage.setItem(`${input.getAttribute("id")}`,JSON.stringify({todo:JSON.parse(localStorage.getItem(`${input.getAttribute("id")}`)).todo,status:input.checked,id:input.getAttribute("id")}));
        load_list_chores(input.getAttribute("id"));
        list_chores[z].status = input.checked;
    });
  });
  

  $list_ul_todo_li_delete = $list_ul_todo.querySelectorAll("li button").forEach(button =>{
      button.addEventListener("click",()=>{
      $list_ul_todo.removeChild(button.closest("li"));
      localStorage.removeItem(button.getAttribute("id"));
    });
  });
}





let local_item_i;

const load_todo = (()=>{

  const local_length = localStorage.length;

  while(i < local_length){
    
    local_item_i = JSON.parse(localStorage.getItem(`value${i}`));
    
    if(local_item_i !== null){
      create_li(local_item_i.id,local_item_i.todo);
      create_id();
      list_chores.push(local_item_i);

    }else create_id();
  }
})();





const $create_todo = document.querySelector(".ul__create-ul-li button");

function create_todo(){

  const $text = document.querySelector(".ul__create-ul-li input").value;
  
  if($text.length > 0 ){

    let new_todo = {todo:$text,status:false,id:`value${i}`};

    list_chores.push(new_todo);

    localStorage.setItem(`${new_todo.id}`,JSON.stringify(new_todo));
    create_li(new_todo.id,new_todo.todo);

    create_id();
    

  }
}$create_todo.addEventListener("click",create_todo);