let num = Number(prompt("Enter number"))

if (num < 33) {
    console.log("Fail")
}
else if (num >= 33 && num <= 50) {
    console.log("second class")
}
else if (num >= 50 && num < 75) {
    console.log("first class")
}
else if (num >= 75 && num <= 100) {
    console.log("distinction")
}
else {
    console.log("invalid number")
}