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
      <button class="text-white rounded px-3 py-2 bg-gray-900 hover:bg-gray-600">EDIT</button>
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
    let item = e.target.parentNode.parentNode.firstChild.nextSibling.innerHTML;
    // console.log(item);
    let index = array.indexOf(item);
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
