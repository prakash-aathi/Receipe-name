let recipeName = document.getElementById("recipename")
let recipebtn  = document.getElementById("recipebtn")
let title = document.getElementById("title")
let recipe = document.getElementById("recipe")
// console.log(recipe);


recipebtn.addEventListener("click", () => {
        // console.log(recipeName.value)
        title.innerHTML=recipeName.value.toUpperCase()+" INCREDIENTS";
});

function removeph(event){
    // let recipe = document.getElementById("recipe")
    let recipes = event.target.parentNode.parentNode;
    recipes.remove();
    // console.log(recipes);
}
