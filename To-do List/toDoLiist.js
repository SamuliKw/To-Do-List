var deleteToDo = document.querySelector("#delete");
var liText = document.getElementById("uI");
var addToDo = document.getElementById("addText");
var list = document.querySelectorAll("li");
var minusIcon = document.querySelector("#minus");

// ---------- hide/unhide minus/plus icons ----------------

// here we create plus icon
var plusIcon = document.createElement("i");
plusIcon.classList.add("fa-plus-circle");
plusIcon.classList.add("fa");
plusIcon.setAttribute("id", "plus");

// when minus sign is clicked hides the text input
minusIcon.addEventListener("click", function() {
  hide();

  // when plus sign in clicked unhides the text input
  var plus = document.querySelector("#plus");
  plus.addEventListener("click", function() {
    unHide();
  });
});

function hide() {
  addToDo.style.display = "none";
  event.currentTarget.replaceWith(plusIcon);
}

function unHide() {
  addToDo.style.display = "unset";
  event.currentTarget.replaceWith(minusIcon);
}

// ----------------- These few function contains almost all the todo lists functions :D  ------------------

// array for todo's
var toDoList = []

function writeToDo(event) {
  // prevents page from reloading
  event.preventDefault();
  // pushes user inputs value to toDoList array
  toDoList.push(addToDo.value);
  // added function renderList
  renderFunctions();
}

function renderFunctions() {
// ---------------- add's to-do -----------
  // Creates new li
  var newList = document.createElement("li");
  // adds class 'lis' to a newList(li)
  newList.classList.add("lis");
  // add class 'borders' to a newList(li)
  newList.classList.add("borders");
  // gets ul and makes newlist ul's child element which is li
  document.getElementById("uI").appendChild(newList);
  // Takes last index from array toDoList and makes it newLists innerHTML
  newList.innerHTML = toDoList[toDoList.length - 1];
  // ------------------------------------------------------------------------


  //  ---------- when mouse is over an li, makes trashicon appear -------------
  newList.addEventListener("mouseover", function() {
    newList.appendChild(trashParent);
    trashParent.appendChild(trashIcon);
    // basically makes trashicon to appear because when mouse is out we hide the trashicon
    trashIcon.style.display = "unset";
    trashParent.style.display = "unset";
    // Adds padding to the li's
    this.classList.remove("borders");
  });

  //  ----------------- when mouse is moved away from li, hides the trashicon --------------------
  newList.addEventListener("mouseout", function() {
    trashIcon.style.display = "none";
    trashParent.style.display = "none";
    // removes padding from the li
    this.classList.add("borders");
  });

  // ----------------- when li is clicked marks it done (line-through) ----------------
    newList.addEventListener("click", function() {
      newList.classList.toggle("markedDone");
    });

  //  ------------ makes text input empty after enter is pressed ---------------------
  document.getElementById("addText").value = "";

  // ------------------ Removes to do ---------------------
  trashParent.addEventListener("click", function() {
    event.currentTarget.parentElement.remove();
  });
}

// ------------------ Creating trashParent and trashIcon ----------

// makes div trashParent which is trashIcons parent element
var trashParent = document.createElement("div");
trashParent.classList.add("parent");
// makes trashIcon
var trashIcon = document.createElement("i");
trashIcon.classList.add("fa-trash");
trashIcon.classList.add("fa");
trashIcon.setAttribute("id", "trash");
