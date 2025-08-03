console.log("Hey JavaScript");
const darkLightBtn = document.querySelector(".dark-light__btn");

darkLightBtn.addEventListener("click", function(){
    document.documentElement.classList.toggle("light-theme");
    darkLightBtn.textContent = darkLightBtn.textContent !== "☀️" ? "☀️" : "🌙"
})



/*
Write a JavaScript program to copy a string to the clipboard.
*/
const copyBtn = document.querySelector(".copy__btn");
const copyPera = document.querySelector(".copy__pera");

copyBtn.addEventListener("click", function(){
    const text = copyPera.textContent;
    navigator.clipboard.writeText(text);
})


