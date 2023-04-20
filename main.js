const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const result = document.querySelector("#result");
const btn = document.querySelector("#btn");
const method = document.querySelector("#method");


btn.addEventListener("click", function(){
    let num1 = +input1.value;
    let num2 = +input2.value;
    let total;
    switch(+method.value){
        case "+":
            total = num1 + num2;
            break;

        case "-":
            total = num1 - num2;
            break;

        case "*":
            total = num1 * num2;
            break;
        
        case "/":
            total = num1 / num2;
            break;
    }
    // result.innerText = total
    result.innerHTML = `${total}`

    input1.value = null;
    input2.value = null;
})

