let i = 0;
const create_id = ()=> i+= 1,
lg = localStorage;

function create_li(id,text,ul,templateLi,listLi,fun){
  let $list_ul_todo = document.querySelector(ul),
  $template__li = document.getElementById(templateLi).content;
  // create new li
  const $clone = document.importNode($template__li,true);
  $clone.querySelector("li input").setAttribute("id",id);
  $clone.querySelector("li input + label").setAttribute("for",id);
  const text_p = document.createTextNode(text);
  $clone.querySelector("li p").appendChild(text_p);
  $clone.querySelector("li button").setAttribute("id",id);
  $list_ul_todo.appendChild($clone);
  // todo:checked
    let $list_ul_todo_li_checked = $list_ul_todo.querySelectorAll(listLi +" input[type = checkbox]").forEach(input =>{  
    input.checked = JSON.parse(lg.getItem(`${input.getAttribute("id")}`)).status;
    input.addEventListener("click",()=>{
      let id_input = input.getAttribute("id");
    localStorage.setItem(`${id_input}`,JSON.stringify({todo:JSON.parse(localStorage.getItem(`${id_input}`)).todo,status:input.checked,id:id_input}));
    fun();
  });
});
  // todo:delete
  let $list_ul_todo_li_delete = $list_ul_todo.querySelectorAll("li button");
  $list_ul_todo.addEventListener("click",(e)=>{
    if(e.target.matches(listLi + " button")){
      $list_ul_todo.removeChild(e.target.closest("li"));
      lg.removeItem(e.target.getAttribute("id"));
      fun();
    }
  });
}

export function create_todo(idInputText,ul,templateLi,listLi,fun){
  let $text = document.getElementById(idInputText).value;
  if($text.length > 0 ){
    let new_todo = {todo:$text,status:false,id:`value${i}`};
    lg.setItem(`${new_todo.id}`,JSON.stringify(new_todo));
    lg.setItem(`order`,`${i}`);
    create_li(new_todo.id,new_todo.todo,ul,templateLi,listLi,fun);
    create_id();
    fun();
  }
}

export const load_todo = (ul,templateLi,listLi,fun)=>{
  length = JSON.parse(lg.getItem("order"));
  while(i <= length){
    let local_item_i = JSON.parse(lg.getItem(`value${i}`));
    if(local_item_i !== null){
      create_li(local_item_i.id,local_item_i.todo,ul,templateLi,listLi,fun);
      create_id();
    }else create_id();
    fun();
  }
}