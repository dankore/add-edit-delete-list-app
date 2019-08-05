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
      <button class="delete-me rounded text-white font-bold px-3 py-2 hover:bg-red-400 bg-red-600">DELETE</button>
      </div>`;
    })
    .join("");
  document.querySelector("#input").value = "";
  document.querySelector("#input").focus();
}

document.addEventListener("click", e => {
  if (e.target.classList.contains("delete-me")) {
    let item = e.target.parentNode.firstChild.innerHTML;
    let index = array.indexOf(item);
    // Remove specific array
    if (index > -1) {
      array.splice(index, 1);
    }
    console.log(array);

    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }
});
