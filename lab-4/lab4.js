// Even or Odd
function check_num() {
    var num = parseFloat(document.getElementById("num").value)

    if (num % 2 == 0) {
        document.getElementById("num_result").innerHTML = num + " is an Even Number";
    } else {
        document.getElementById("num_result").innerHTML = num + " is an Odd Number";
    }
}

// largest number from 3 values
function large_check() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);

    if (num1 > num2 && num1 > num3) {
        document.getElementById("large_num_result").innerHTML = num1 + " is the largest number out of - " + num1 + ", " + num2 + " and " + num3;
    } else if (num2 > num1 && num2 > num3) {
        document.getElementById("large_num_result").innerHTML = num2 + " is the largest number out of - " + num1 + ", " + num2 + " and " + num3;
    } else {
        document.getElementById("large_num_result").innerHTML = num3 + " is the largest number out of - " + num1 + ", " + num2 + " and " + num3;
    }
}

// Fibonacci series for nth value
function fibonnaci_series() {
    const n = document.getElementById("fibo_limit").value;
    let fibo = [0, 1];
    // enter value greater than 0
    if (n > 0) {
        for (let i = 2;i < n;i++){
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
        document.getElementById("fibo_result").innerHTML = fibo;
    } else if (n == 0) {
        document.getElementById("fibo_result").innerHTML = "Enter value greater than 0";
    } else {
        document.getElementById("fibo_result").innerHTML = "Enter a positive number";
    }
}

// replace character
function replace_char() {
    var new_string = document.getElementById("new_string").value;
    var char_to_replace = document.getElementById("char_to_replace").value;
    var new_char = document.getElementById("new_char").value;
    var modified_string = "";
        
    if (char_to_replace.length !== 1 || new_char.length !== 1) {
        document.getElementById("new_string_result").innerHTML = "Enter single character only";
        return;
    }

    for (var i = 0; i < new_string.length; i++){
        if (new_string[i] === char_to_replace) {
            modified_string += new_char;
        } else {
            modified_string += new_string[i];
        }
    }

    document.getElementById("new_string_result").innerHTML = "New string is " + modified_string;
}