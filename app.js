var firstpart = 0;
var secondpart = "0";
var op = 0;
var dot = 0;

function numbers(value) {


    var screen = document.getElementById("screen");


    if (value == "=") {

        var all = screen.value.split(" ")
        firstpart = parseFloat(all[0]);
        op = all[1];
        secondpart = parseFloat(all[2]);

        var screen = document.getElementById("screen");

        if (secondpart == 0) {
            screen.value = "division by zero!"
        }
        switch (op) {

            case '+':
                result = firstpart + secondpart;
                screen.value = result;
                break;
            case '-':
                result = firstpart - secondpart;
                screen.value = result;
                break;
            case '*':
                result = firstpart * secondpart;
                screen.value = result;
                break;
            case '/':
                result = firstpart / secondpart;
                screen.value = result;

                break;
            case '%':
                result = firstpart % secondpart;
                screen.value = result;
                break;
            default:

                break;
        }
    } else if (screen.value == "0" && value == "0") {
        return null;
    } else if (screen.value == "0" && !((value == "*" || value == "/") || ((value == "+" || value == "-") || (value == "%")))) {
        screen.value = value;

    } else if (!((value == "*" || value == "/") || ((value == "+" || value == "-") || (value == "%")))) {
        screen.value += value;

    } else if (op == "0" && ((value == "*" || value == "/") || ((value == "+" || value == "-") || (value == "%")))) {

        screen.value += " ";
        screen.value += value;
        screen.value += " ";
        op = value;
    } else {
        return;
    }
}

function deleted(del) {
    var screen = document.getElementById("screen");
    screen.value = '';
    op = 0;
    del = 0;
    var firstpart = "0";
    var secondpart = "0";
    var dot = 0;


}

function dots(dt) {

    if (dot == 0) {
        var screen = document.getElementById("screen");
        screen.value += dt;


        dot = "recoded"
    } else {

        return;
    }
}