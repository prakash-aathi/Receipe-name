const btn = document.querySelector(".btn");
const form = document.forms.feedback;  // accessing form
const name = form.elements.fullname;

// console.log(btn);
// btn.addEventListener("click",()=>{
//     console.log("heloo");
//     event.preventDefault();
// })

// backend pushing using json api
const handlesubmit= (event)=>{
    event.preventDefault();

    // convert form data into json
    const data = new FormData(form);
    const jsondata = JSON.stringify(Object.fromEntries
        (data));
    // console.log(jsondata);

    // fetch api
    fetch("https://reqres.in/api/users/2",{
        method: "POST",
        body:new FormData(form),
    })


    const {fullname,type,mail,fb,terms} = form.elements;
    console.log(fullname.value,type.value,mail.value,fb.value,terms.value);
}

// const handlesubmit =(event) =>{
//  event.preventDefault();
//  console.log(form.elements.fullname.value);
// };

// form.addEventListener("submit",handlesubmit); // event listening 
// form.addEventListener("input" ,(e) => console.log(e.target.value)); // input single value
// form.addEventListener("change",(e) => console.log(e.target.value)); // change whole value
name.focus();


// handle radion buttons
const radiobtn = document.getElementById("radio");
// console.log(radiobtn);
radiobtn.addEventListener("change",(event) => {
    console.log(event.target.id);
});