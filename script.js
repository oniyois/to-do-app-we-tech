const addBtn = document.getElementById ("add-btn");
const inputText = document.getElementById("todo-input") 
const todoList = document.getElementById("todo-list")





// added a click event to my add button
addBtn.addEventListener("click", () => {
const listItem = document.createElement ("p");
const textSpan =document.createElement("span");
textSpan.textContent = inputText.value;

// created a checkbox
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.addEventListener("click", ()=>{
    if(checkbox.checked){
        textSpan.style.textDecoration= "line-through";
    }else{
        textSpan.style.textDecoration= "none";
    }
})
textSpan.classList.add("textspan")


// create an edit btn
const editBtn= document.createElement("button");
const editTextNode = document.createTextNode("✏️");
editBtn.appendChild(editTextNode);
editBtn.addEventListener("click", ()=>{
    let editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = textSpan.textContent;
    editBtn.classList.add("edit-btn");
    
// instead of the seeing the newly created edit ,i replace it with my current textSpan value
    listItem.replaceChild(editInput, textSpan);
    


})

// create a delete btn
const deleteBtn = document.createElement("button");
const deleteBtnTextNode =document.createTextNode("X"); 
deleteBtn.appendChild(deleteBtnTextNode);
deleteBtn.classList.add("btn-delete");
deleteBtn.addEventListener("click",()=>{
    listItem.style.display="none";
})

let todoListTextNode = document.createTextNode(inputText.value);
// appended the checkbox to my listitem

listItem.append( checkbox,textSpan,editBtn,deleteBtn);
todoList.appendChild(listItem);

// styling my list items
listItem.classList.add("item-style");

// it deletes the p-text in my div when the add button is clicked
const pText =document.getElementById("p-text");
pText.style.visibility="hidden"
// if no iput text is typed the it displays nothing
if(inputText.value === ""){
    listItem.style.display="none";
}

// to clear my input bo immediately
inputText.value = "";
  });