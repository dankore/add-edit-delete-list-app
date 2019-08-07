const submitButton = document.querySelector("#submit");
const receiver = document.querySelector(".receiver");

const array = [];

document.addEventListener("click", e => {
  //Edit item
  if (e.target.classList.contains("edit-me")) {
    let text = e.target.parentNode.parentNode.firstChild.nextSibling.innerHTML;
    let index = array.indexOf(text);

    //Get prompt value
    let userInput = prompt(
      "Edit Your Item",
      e.target.parentNode.parentNode.firstChild.nextSibling.innerHTML
    );
    //The beginning if statement tells the browser to only return if the user inputs info into the text box
    if (userInput) {
      array.splice(index, 1, userInput);
      e.target.parentNode.parentNode.firstChild.nextSibling.innerHTML = userInput;
    }
  }
  // Delete item
  if (e.target.classList.contains("delete-me")) {
    e.target.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode
    );
    let textToDelete =
      e.target.parentNode.parentNode.firstChild.nextSibling.innerHTML;
    let indexToDelete = array.indexOf(textToDelete);

    array.splice(indexToDelete, 1);
  }
});

function addToList(e) {
  e.preventDefault();
  // Get input value
  const text = document.querySelector("#input").value;

  //Add items to array
  if (text) {
    array.push(text);
  }

  receiver.innerHTML = array
    .map(item => {
      return `<div id="list" class="flex pl-2 pt-3 border-gray-200 border-b items-center justify-between ">

      <li class="text-xl">${item}</li>
      <div class="font-bold">
      <button class="edit-me px-2 text-white rounded bg-gray-900 hover:bg-gray-600">EDIT</button>
      <button class="delete-me px-2 rounded  text-white hover:bg-red-400 bg-red-600">DELETE</button>
      </div>
      </div>`;
    })
    .join("");
  document.querySelector("#input").value = "";
  document.querySelector("#input").focus();
}
submitButton.addEventListener("click", addToList);
