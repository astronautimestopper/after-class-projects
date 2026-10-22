var choice = prompt("Welcome to area calculator.\nPlease enter the number of your choice:\n1. Area of Rectangle\n2. Area of a Triangle\n3. Area of a Circle\n4. Area of a Trapezoid.");

if (choice == "1") {
    var a = prompt("Enter length");
    var b = prompt("Enter width");
    var result = Number(a) * Number(b);
    alert("The area is " + result);
}

if (choice == "2") {
    var c = prompt("Enter height");
    var d = prompt("Enter base");
    var result = Number(c) * Number(d) / 2;
    alert("The area is " + result);
}

if (choice == "3") {
    var e = prompt("Enter the radius");
    var result = 3.14 * Number(e) * Number(e);
    alert("The area is " + result);
}

if (choice == "4") {
    var f = prompt("Enter the first base");
    var g = prompt("Enter the second base");
    var h = prompt("Enter the height");
    var result = (Number(f) + Number(g)) * Number(h) / 2;
    alert("The area is " + result);
}