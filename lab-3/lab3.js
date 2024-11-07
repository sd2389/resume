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