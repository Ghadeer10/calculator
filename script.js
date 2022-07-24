let result = document.getElementById('display');
let firstNum = 0, secondNum, total;
let opreator = '';
let operIndex = '';
result.value = 0;


//function for entering number:
function enterNumber(num) {
    if (result.value === "0") {
        if (num == "0" || num == '00') { }
        else {
            result.value = '';
            result.value += num;
        }
    }
    else {
        result.value += num;
    }
}

//function for entering operator
function addOperator(op) {
    let i = result.value.length - 1;
    let lastChar = result.value[i];
    try {
        if (result.value === "") {
            alert('enter number first');
        }
        else {
            if (opreator === '') {
                opreator = op;
                result.value += op;
                firstNum = +result.value.slice(0, -1);
                operIndex = i;
            }
            else {
                if (lastChar == '/' || lastChar == '*' || lastChar == '-' || lastChar == '+') {
                    result.value = result.value.slice(0, -1);
                    result.value += op;
                    opreator = op;
                }
                else {
                    secondNum = +result.value.slice(operIndex + 1);
                    total = operate();
                    opreator = op;
                    result.value += op;
                    operIndex = result.value.indexOf(op);
                }
            }
        }
    }
    catch (err) {
        alert("wo wo Watch out dude! check your entry,\n" + err,);
    }
}

//function for decimal point
function enterDot() {
    if (opreator === '' && !result.value.includes('.')) {
        result.value += '.';
    }
    else if (opreator !== '') {
        let i = result.value.length - 1;
        if (i === operIndex) {
            result.value += "0.";
        }
        else {
            let secondNumAsStr = result.value.slice(operIndex + 1);
            if (!secondNumAsStr.includes('.')) {
                result.value += '.';
            }
        }
    }
}

//function for operateing the result
function operate() {
    try {
        switch (opreator) {
            case '+':
                secondNum = +result.value.slice(operIndex + 1);
                total = +firstNum + +secondNum;
                total = Math.round((total + Number.EPSILON) * 10000000) / 10000000;
                result.value = total;
                firstNum = +total;
                opreator = '';
                secondNum = 0;
                operIndex = '';
                break;
            case '-':
                secondNum = +result.value.slice(operIndex + 1);
                total = +firstNum - +secondNum;
                total = Math.round((total + Number.EPSILON) * 10000000) / 10000000;
                result.value = total;
                firstNum = +total;
                secondNum = 0;
                opreator = '';
                operIndex = '';
                break;
            case '*':
                secondNum = +result.value.slice(operIndex + 1);
                total = +firstNum * +secondNum;
                total = Math.round((total + Number.EPSILON) * 10000000) / 10000000;
                result.value = total;
                firstNum = +total;
                secondNum = 0;
                opreator = '';
                operIndex = '';
                break;
            case '/':
                secondNum = +result.value.slice(operIndex + 1);
                if (secondNum == 0){
                    total = Error
                    result.value = total;
                    firstNum = +total;
                    opreator = '';
                    secondNum = 0;
                    operIndex = '';
                    break;
                }
                else{
                    total = +firstNum / +secondNum;
                    total = Math.round((total + Number.EPSILON) * 100000) / 100000;
                    result.value = total;
                    firstNum = +total;
                    opreator = '';
                    secondNum = 0;
                    operIndex = '';
                    break;
                }
            default:
                alert("Enter valid mathmatical operation");
                break;
        }
    }
    catch (err) {
        alert("Enter valid mathmatical operation");
    }
}

//functio for clearing the result
function clearAll() {
    try {
        result.value = 0;
        total = 0;
        firstNum = 0;
        secondNum = 0;
        operIndex = '';
        opreator = '';
    }
    catch (err) {
        alert(err);
    }
}

//functio for  delete last char
function backspace() {
    try {
        if (result.value == '0') { alert("why are you delete nothing?!"); }
        else {
            let i = result.value.length - 1;
            if (result.value[i] == opreator) {
                result.value = result.value.slice(0, -1);
                opreator = '';
                operIndex = '';
            }
            else {
                result.value = result.value.slice(0, -1);
                secondNum = +result.value.slice(operIndex + 1);
                if (result.value == '') {
                    result.value = 0;
                }
            }
        }
    }
    catch (err) {
        alert('oops', err);
    }
}
