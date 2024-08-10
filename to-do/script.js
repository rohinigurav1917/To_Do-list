const inputBox = document.querySelector("#input");
const lists = document.querySelector(".lists");

const addNote = () => {
  if (inputBox.value === "") {
    alert("You should write something!!");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    lists.appendChild(li);

    let span = document.createElement("span");
    span.innerText = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  storeData();
};

lists.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      storeData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      storeData();
    }
  },
  false
);

// const storeData = () => {
//   localStorage.setItem("data", lists.innerHTML);
// };

// const displayNote = () => {
//   lists.innerHTML = localStorage.getItem("data");
// };

// displayNote();