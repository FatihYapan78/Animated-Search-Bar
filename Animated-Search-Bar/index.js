const searchE1 = document.querySelector(".fa-magnifying-glass");
const searchContainerE1 = document.querySelector(".search-container");
const inputE1 = document.querySelector(".input");
const microphoneE1 = document.querySelector(".fa-microphone");


searchE1.addEventListener("click",()=>{
    if(searchContainerE1.style.width == "400px"){
        searchContainerE1.style.width = "50px"
        inputE1.style.display = "none"
        microphoneE1.style.display ="none"
        searchE1.style.display = "block"
    }
    else{
        searchContainerE1.style.width = "400px"
        inputE1.style.display = "block"
        microphoneE1.style.display ="block"
    }
});

searchE1.addEventListener("click",()=>{
searchContainerE1.classList.toggle("active")
   
});
