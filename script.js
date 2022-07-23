let result = document.getElementById('display');
let firstNum = 0, secondNum, total;
let opreator = '';
let operIndex = '';
result.value = 0;

//for keyboard:
result.onkeypress = function (e) {
    var event = e || window.event;
    var charCode = event.which || event.keyCode;
    var charStr = String.fromCharCode(charCode);
    if (charStr === '0' || charStr === '1' || charStr === '2' || charStr === '3' || charStr === '4' || charStr === '5' ||
        charStr === '6' || charStr === '7' || charStr === '8' || charStr === '9' || charStr === '.' || charStr === '+' ||
        charStr === '-' || charStr === '*' || charStr === '/') {
        if (result.value == 0) { result.value = ''; }
    }
    else if (charCode == '13') {
        operate();
    }
    else {
        alert('no alphabet allowed to enter for now, so delete it');
    }
}

//function for entering number:
function enterNumber(num) {
    if (result.value === "0") {
        result.value = '';
        result.value += num;
    }
    else {
        result.value += num;
    }
}

//function for entering dot
function enterDot() {
    if (opreator === '' && !result.value.includes('.')) {
        result.value += '.';
    }
    else if (opreator !== '') {
        let i = result.value.length - 1;
        if (result.value[i] === opreator) {
            result.value += '0.';
        }
        else {
            let secNum = result.value.slice(operIndex);
            if (!secNum.includes('.')) {
                result.value += '.';
            }
        }
    }
}

//function for entering operator and operand
function addOperator(op) {
    let i = result.value.length - 1;
    let m = result.value[i];
    console.log("vslue{i} = " + m);
    try {
        if (result.value === "") {
            alert('enter number first');
        }
        else {
            if (opreator === '') {
                opreator = op;
                firstNum = result.value.slice(0, -1);
                result.value += op;
                operIndex = result.value.length - 1;
                console.log(operIndex)
            }
            else if (opreator !== '') {
                if (m === '/' || m === '*' || m === '-' || m === '+') {
                    result.value = result.value.slice(0, -1);
                    result.value += op;
                    opreator = op;
                    console.log("operIndex = " + operIndex);
                }
                else {
                    console.log(secondNum);
                    total = eval(result.value);
                    result.value = total;
                    firstNum = total;
                    opreator = op;
                    result.value += op;
                    operIndex = result.value.indexOf(op);
                    console.log("operIndex = " + operIndex);
                }
            }
        }
    }
    catch (err) {
        alert("wo wo Watch out dude! check your entry,\n" + err,);
    }
}

//function for operateing the result
function operate() {
    try {
        result.value = eval(result.value);
        opreator = '';
        operIndex = '';
    }
    catch (err) {
        alert("Enter valid mathmatical operation");
    }
}

//functio for clearing the result
function clearAll() {
    try {
        result.value = 0;
        operIndex = '';
        opreator = '';
    }
    catch (err) {
        alert(err);
    }
}

//function for deleting the last entered charactter
function backspace() {
    try {
        if (result.value === '0') { alert("why are you delete nothing?!"); }
        else {
            let i = result.value.length - 1;
            if (result.value[i] == opreator) {
                result.value = result.value.slice(0, -1);
                opreator = '';
                operIndex = '';
            }
            else {
                result.value = result.value.slice(0, -1);
                if (result.value == '') {
                    result.value = 0;
                }
            }
        }
    }
    catch (err) {
        alert(err);
    }
}













































// // let secondNumber = document.getElementById("#secondNum");
// // let plusBtn = document.querySelector('#plus');

// // plusBtn.addEventListener('click', function () {
// //     alert(firstNumber + secondNumber);
// // })

// // let subBtn = document.querySelector('#sub');

// // subBtn.addEventListener('click', function () {
// //     alert(firstNumber - secondNumber);
// // })


// //creat function to handle btns
// function getNumbers(num) {

//     if (!values.prev) {
//         values.prev = num;
//     }
//     else {
//         values.new = num;
//     }
//     screen.value = num;
//     console.log(num);
// }

// function getOpreators(op) {
//     operType = op;
//     console.log(values);
// }

// function calculate() {
//     if (!values.new) {
//         return;
//     }
//     if (values.new && values.prev && operType) {
//         if (operType === "+") {
//             screen.value = values.new + values.prev;
//         }
//         if (operType === "-") {
//             screen.value = values.prev - values.new;
//         }
//         if (operType === "*") {
//             screen.value = values.new * values.prev;
//         }
//         if (operType === "/") {
//             screen.value = values.prev / values.new;
//         }
//     }
// }
// let screen = document.getElementById('screen');
// let values = { prev: null, new: null, result: null };
// let operType = '';

//create function to handle btns opreator

//display number value in the input

//handle privous value

//handle opreator

//handle new value

//create equall functionality

//1 handle total number
// 2- handle new calculation
// 3- handle numbers bigger