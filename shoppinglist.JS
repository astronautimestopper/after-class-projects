var Form = document.getElementById("myForm");
var Input = document.getElementById("myInput");
var Item = document.getElementById("myItem");

Form.addEventListener("submit",
    function(event){
       event.preventDefault()
       createItem(Input.value)
 }

)

function createItem(inputItem){
    var items = `<li> ${inputItem}
    <button onclick="deleteElement(this)">Delete</button> </li>`
    Item.insertAdjacentHTML("beforeend", items)
    Input.value = ""
    Input.focus()

}

function deleteElement(ElementToDelete){
    ElementToDelete.parentElement.remove()
}