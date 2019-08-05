const submitButton = document.querySelector("#submit");
const receiver = document.querySelector(".receiver");

const array = [];

const add = e => {
  e.preventDefault();

  const text = document.querySelector("#input").value;

  //Add items to array
  if (text) {
    array.push(text);
  }
  addToList(array);
};

submitButton.addEventListener("click", add);

function addToList(data) {
  receiver.innerHTML = array
    .map(item => {
      return `<div id="list" class="flex items-center border-b-2 justify-between mb-2">
      <li>${item}</li>
      <div class="font-bold">
      <button class="edit-me text-white rounded px-3 py-2 bg-gray-900 hover:bg-gray-600">EDIT</button>
      <button class="delete-me rounded px-3 py-2 text-white hover:bg-red-400 bg-red-600">DELETE</button>
      </div>
      </div>`;
    })
    .join("");
  document.querySelector("#input").value = "";
  document.querySelector("#input").focus();
}

document.addEventListener("click", e => {
  if (e.target.classList.contains("delete-me")) {
    let text = e.target.parentNode.parentNode.firstChild.nextSibling.innerHTML;
    // console.log(item);
    let index = array.indexOf(text);
    // Remove specific array
    if (index > -1) {
      array.splice(index, 1);
    }
    console.log(e.target.parentNode.parentNode.parentNode);
    // e.target.parentNode.parentNode.parentNode ==> Gives UL tag
    // e.target.parentNode.parentNode.parentNode.firstChild ==> Gives whole div

    e.target.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode.parentNode.firstChild
    );
  }
});

document.addEventListener("click", e => {
  if (e.target.classList.contains("edit-me")) {
    let text = e.target.parentNode.parentNode.firstChild.nextSibling.innerHTML;
    let index = array.indexOf(text);
    //Get prompt value
    let userInput = prompt(
      "Edit your input",
      e.target.parentNode.parentNode.firstChild.nextSibling.innerHTML
    );
    //The beginning if statement tells the browser to only return if the user inputs info into the text box
    if (userInput) {
      array.splice(index, 1, userInput);
      e.target.parentNode.parentNode.firstChild.nextSibling.innerHTML = userInput;
    }
  }
});
