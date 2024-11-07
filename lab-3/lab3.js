// Area and Perimeter of a circle
function calculate_area_circle() {
    const radius = parseFloat(document.getElementById("area_perimeter_circle").value);
    if (!isNaN(radius) && radius > 0) {
        const area = Math.PI * radius * radius;
        const perimeter = 2 * Math.PI * radius;
        document.getElementById("a_per_circle_result").innerHTML = "Area = " + area.toFixed(2) + "<br>Perimeter = " + perimeter.toFixed(2);
    }
    else {
        document.getElementById("a_per_circle_result").innerHTML = "Input is not valid";
    }
}

// Area and Perimeter of a rectangle
function calculate_area_perimeter_rectangle() {
    const width = parseFloat(document.getElementById("area_perimeter_rectangle1").value);
    const height = parseFloat(document.getElementById("area_perimeter_rectangle2").value);

    if (!isNaN(width) && !isNaN(height) && width > 0 && height > 0) {
        const area = width * height;
        const perimeter = 2 * (width * height);
        document.getElementById("a_per_rectangle_result").innerHTML = "Area = " + area.toFixed(2) + "<br>Perimeter = " + perimeter.toFixed(2);
    }
    else {
        document.getElementById("a_per_rectangle_result").innerHTML = "Input is not valid";
    }
}

// Area and Volume of a Cylinder
function calculate_area_volume_cylinder() {
    const radius = parseFloat(document.getElementById("area_volume_cylinder1").value);
    const height = parseFloat(document.getElementById("area_volume_cylinder2").value);

    if (!isNaN(radius) && !isNaN(height) && radius > 0 && height > 0) {
        const area = 2 * Math.PI * radius * (radius + height);
        const volume = Math.PI * radius * radius * height;
        document.getElementById("a_per_cylinder_result").innerHTML = "Area = " + area.toFixed(2) + "<br>Volume = " + volume.toFixed(2);
    }
    else {
        document.getElementById("a_per_cylinder_result").innerHTML = "Input is not valid";
    }
}

// Tip Calculator
function calculate() {
    const subtotal = parseFloat(document.getElementById("subtotalinput").value);
    const tippercent = parseFloat(document.getElementById("tipinput").value);

    if (!isNaN(subtotal) && !isNaN(tippercent)) {
        const tipamount = subtotal * (tippercent / 100);
        const totalamount = subtotal + tipamount;

        document.getElementById("gratuityresult").innerHTML = `Gratuity Amount: $${tipamount.toFixed(2)}`;
        document.getElementById("tipresult").innerHTML = `Total Amount: $${totalamount.toFixed(2)}`;
    } else {
        document.getElementById("gratuityresult").innerHTML = "Please enter Valid Numbers";
        document.getElementById("tipresult").innerHTML = "Please enter Valid Numbers";
    }
}