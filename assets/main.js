let recipeName = document.getElementById("recipename")
let recipebtn = document.getElementById("recipebtn")
let title = document.getElementById("title")
let recipe = document.getElementById("recipe")
let incBtn = document.getElementById("inc-btn");
let incName = document.getElementById("inc-name")
let incGram = document.getElementById("inc-gram")
let table = document.getElementById("table-body");
let wholeTableEl = document.getElementById("table");

let createbody = document.createElement("tbody");
let list = document.getElementById("list");

// change constantly
recipebtn.addEventListener("click", () => {
    // console.log(recipeName.value)
    const newtitle = recipeName.value.toUpperCase() + " INCREDIENTS";
    title.innerText = newtitle;
    const btn = document.createElement("button")
    btn.innerHTML = "<a href='./feedback.html'>Feedback</a>";
    title.append(btn);

    // persistance change for recipe name
    localStorage.setItem(localStorageRecipeName, JSON.stringify([...JSON.parse(localStorage.getItem(localStorageRecipeName) || "[]"), { name: newtitle }]))
});


// live changes
recipeName.addEventListener("input", (e) => {
    title.innerText = e.target.value.toUpperCase();
})
// press enter key submit the values 
recipeName.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        recipebtn.click();
    }
});

// alert for adding incredients
function sucessalert() {
    let alertbox = document.getElementById("alert-success");
    alertbox.outerHTML = "<div id='alert-success' >successfully added !</div>";
    $(function () {
        setTimeout(function () { $("#alert-success").fadeOut(1000); }, 350)
    })
}
// alert for removing item
function dangeralert() {
    let alertbox = document.getElementById("alert-danger");
    alertbox.outerHTML = "<div id='alert-danger' >successfully removed !</div>";
    $(function () {
        setTimeout(function () { $("#alert-danger").fadeOut(1000); }, 350)
    })
}
// adding incredients
incBtn.addEventListener('click', () => {
    let row = document.createElement("tr")
    let data1 = document.createElement("td")
    let data2 = document.createElement("td")
    data1.innerHTML = incName.value;
    data2.innerHTML = incGram.value;
    data2.innerHTML += "<button onclick='closeBtn(event)'><i class='fa-solid fa-xmark'></i></button>";
    row.append(data1, data2)
    // console.log(row);
    // if (table) {
    //     createbody.setAttribute("id", "table-body")
    //     wholeTableEl.append(createbody);
    //     // console.log("created tbody");
    // }
    table.append(row);
    incGram.value = "";
    incName.value = "";
    count();
    sucessalert();
})

// press enter key submit the values for table
incGram.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        event.preventDefault();
        incBtn.click();
    }
})

function removeph(event) {

    // let recipe = document.getElementById("recipe")
    let recipes = event.target.parentNode;
    recipes.remove();
    count();
    // console.log(recipes);
}

function closeBtn(event) {
    let removeRow = event.target.parentNode.parentNode.parentNode;
    console.log(removeRow);
    removeRow.remove();
    count();
    dangeralert();
}

let h3El = document.createElement("h3");
h3El.innerHTML = `You Added successfully ${table.children.length} Incredients`;
list.append(h3El);
function count() {
    {/* <h3>You Added successfully 2 Incredients</h3> */ }
    if (table.children.length === 0)
        list.style.display = 'none';
    else {
        list.style.display = 'block';
        h3El.innerHTML = `You Added successfully ${table.children.length} Incredients`;
        list.append(h3El);
    }
}


// data persistance
const localStorageRecipeName = "recipeName";
// fetch recipe name

let abc = localStorage.getItem(localStorageRecipeName)

document.addEventListener("DOMContentLoaded", () => {
    let lengthofstorage = (JSON.parse(abc).length) - 1;
    if (abc != undefined) {
        title.innerText = (JSON.parse(abc))[lengthofstorage].name;
        const btn = document.createElement("button")
        btn.innerHTML = "<a href='./feedback.html'>Feedback</a>";
        title.append(btn);
    }

})
