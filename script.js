const submitButton = document.getElementById("sbmt_btn");
const mainContainer = document.getElementById("main");
const resultContainer = document.getElementById("result");
let inputValue = document.forms["myform"]["number"].value;
let inputNumber = document.getElementById("input_no");
let finalOutput = document.getElementById("result");

submitButton.addEventListener('click',()=>{
    mainContainer.style.display="none"
    resultContainer.classList.remove("hidden");
    inputNumber.innerHTML = inputValue;
    // cal;
})

submitButton.addEventListener("click",cal);

function cal() {
    if (inputValue === 0 || inputValue === 1)
      finalOutput.innerHTML=1;
    for (let i = inputValue - 1; i >= 1; i--) {
      inputValue *= i;
      finalOutput.innerHTML = inputValue;
    }
}



// function cal() {
//     for (let i=0; i<inputValue; i--){
//         inputValue*i == finaloutput.innerHTML;


//     }
// }
// console.log(submitButton);












