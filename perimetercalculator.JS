var choice = prompt("Welcome to perimeter calculator.\nPlease enter the number of your choice:\n1. Perimeter of Rectangle\n2. Perimeter of a Triangle\n3. Circumference of a Circle\n4. Perimeter of a Trapezoid.");

if (choice == "1") {
    var a = prompt("Enter length");
    var b = prompt("Enter width");
    var result = 2 * (Number(a) + Number(b));
    alert("The perimeter is " + result);
}

if (choice == "2") {
    var c = prompt("Enter first side");
    var d = prompt("Enter second side");
    var e = prompt("Enter third side");
    var result = Number(c) + Number(d) + Number(e);
    alert("The perimeter is " + result);
}

if (choice == "3") {
    var f = prompt("Enter the radius");
    var result = 2 * 3.14 * Number(f);
    alert("The circumference is " + result);
}

if (choice == "4") {
    var g = prompt("Enter first side");
    var h = prompt("Enter second side");
    var i = prompt("Enter third side");
    var j = prompt("Enter fourth side");
    var result = Number(g) + Number(h) + Number(i) + Number(j);
    alert("The perimeter is " + result);
}

