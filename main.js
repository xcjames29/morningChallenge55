let inputName = document.getElementById("inputName");
let addBtn = document.getElementById("addBtn");
let cardArea = document.querySelector(".cardArea");

addBtn.addEventListener("click",()=>{

    let div= document.createElement("div");
    div.classList.add("card");
    let img = document.createElement("img");
    img.src = "./pict.png";
    div.append(img);
    let text = document.createElement("p");
    console.log("anoke?" ,inputName.value)
    text.innerText = inputName.value;
    div.append(text);
    let closeBtn = document.createElement("button");
    closeBtn.addEventListener("click",(e)=>{
        e.target.parentNode.parentNode.removeChild(e.target.parentNode)
    })
    closeBtn.innerText = "X"
    div.append(closeBtn);
    cardArea.append(div);

    inputName.value = "";
})