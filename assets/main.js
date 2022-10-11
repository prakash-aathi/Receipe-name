let recipeName = document.getElementById("recipename")
let recipebtn  = document.getElementById("recipebtn")
let title = document.getElementById("title")
let recipe = document.getElementById("recipe")
let table = document.getElementById('table');
let incBtn = document.getElementById("inc-btn");
let incName = document.getElementById("inc-name")
let incGram = document.getElementById("inc-gram")

recipebtn.addEventListener("click", () => {
        // console.log(recipeName.value)
        title.innerHTML=recipeName.value.toUpperCase()+" INCREDIENTS";
});

incBtn.addEventListener('click',() => {
    let row = document.createElement("tr")
    let data1 = document.createElement("td")
    let data2 = document.createElement("td")
    data1.innerHTML= incName.value;
    data2.innerHTML= incGram.value;
    row.append(data1,data2)
    console.log(row);
    table.append(row);
    incGram.value="";
    incName.value="";
})

function removeph(event){
    // let recipe = document.getElementById("recipe")
    let recipes = event.target.parentNode.parentNode;
    recipes.remove();
    // console.log(recipes);
}
