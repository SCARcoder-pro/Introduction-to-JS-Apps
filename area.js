var choice = prompt("Welcome to Area Calculator. \n Please enter your choice. \n1.Area of Rectangle. \n2.Area of Triangle. \n3.Area of Circle. \n4.Area of Parallelogram");
if (choice == '1') {
    var l = prompt("Enter the length")
    var b = prompt("Enter the breadth")
    var result = Number(l) * Number(b)
    alert('The area is' + result)
}
if (choice == 2) {
    var h = prompt("Enter the height")
    var b = prompt("Enter the base")
    var result = Number(h) * Number(b) / 2
    alert('The area is' + result)
}
if (choice == 3) {
    var r = prompt("Enter the radius")
    var result = 3.14 * Number(r) * Number(r)
    alert('The area is' + result)
}
if (choice == 4) {
    var h = prompt("Enter the height")
    var cb = prompt("Enter the corresponding base")
    var result = Number(h) * Number(cb)
    alert('The area is' + result)
}