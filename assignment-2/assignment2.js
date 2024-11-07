// Reverse String Function
function revstring() {
    const input = document.getElementById("revinput").value;
    let reversed = "";

    for (let i = input.length - 1;i >= 0;i--) {
        reversed += input[i];
    }

    document.getElementById("revresult").innerHTML = " Reversed String is '" + reversed + "'";
}

// Palindrome Function
function palindrome() {
    const input = document.getElementById("palinput").value;
    let reversed = "";

    for (let i = input.length - 1;i >= 0;i--) {
        reversed += input[i];
    }

    if (input == reversed) {
        document.getElementById("palresult").innerHTML = "It is a palindrome";
    } else {
        document.getElementById("palresult").innerHTML = "It is not a palindrome";
    }
}

// Tip Calculator
function calculate() {
    const subtotal = parseFloat(document.getElementById("subtotalinput").value);
    const tippercent = parseFloat(document.getElementById("tipinput").value);

    if (!isNaN(subtotal) && !isNaN(tippercent)) {
        const tipamount = subtotal * (tippercent / 100);
        const totalamount = subtotal + tipamount;

        document.getElementById("tipresult").innerHTML = `Total Amount: $${totalamount.toFixed(2)}`;
    } else {
        document.getElementById("tipresult").innerHTML = "Please enter Valid Numbers";
    }
}