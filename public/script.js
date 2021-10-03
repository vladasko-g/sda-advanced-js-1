const body = document.querySelector(".content");
const ul = document.createElement("ul");

ul.style.listStyleType = "none";
ul.style.paddingLeft = "10px";

const shopItems = ["bmw", "mercedes", "land rover"];

const createLi = (text, id) => {
  const li = document.createElement("li");
  li.innerText = text;
  li.id = id;

  li.style.marginBottom = "10px";
  li.style.border = "1px solid lightgrey";
  li.style.padding = "5px 10px";
  li.style.fontFamily = "Arial";
  li.style.color = "#333";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "x";
  deleteButton.style =
    "float: right; height: 20px; background: darkred; color: white; border: none";

  deleteButton.addEventListener("click", () => {
    document.getElementById(id).remove();
  });

  li.append(deleteButton);

  return li;
};

const listItems = shopItems.map(createLi);

ul.append(...listItems);
body.append(ul);

const addInput = document.createElement("input");
body.append(addInput);

const addButton = document.createElement("button");
addButton.innerText = "add";
addButton.style = "background: #333; color: white; padding: 10px; border: none";

addButton.addEventListener("click", () => {
  const li = createLi(addInput.value, addInput.value);
  addInput.value = "";

  ul.appendChild(li);
});

body.append(addButton);
