var colorBox = document.getElementById('colorBox');
var buttons = document.querySelectorAll('button');
var resultBox = document.getElementById('resultBox');
var correctColor;
var colors;
var getColor = function () {
    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var colorArray = [];
    for (var i = 0; i < 6; i++) {
        colorArray.push(chars[Math.round(Math.random() * chars.length)]);
    }
    var color = "#".concat(colorArray.join(''));
    return color;
};
var setColor = function () {
    correctColor = getColor();
    colors = [correctColor, getColor(), getColor()];
    colors.sort(function (a, b) { return 0.5 - Math.random(); });
    colorBox.style.background = correctColor;
};
var setButtons = function () {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerText = colors[i];
    }
};
setColor();
setButtons();
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        var button = e.target;
        if (button.innerText === correctColor) {
            success();
        }
        else {
            tryAgain();
        }
    });
}
var success = function () {
    setColor();
    setButtons();
    resultBox.innerText = 'Good Job';
    resultBox.style.color = 'green';
    setTimeout(function () {
        resultBox.innerText = '';
    }, 3000);
};
var tryAgain = function () {
    resultBox.innerText = 'Try Again';
    resultBox.style.color = 'red';
    setTimeout(function () {
        resultBox.innerText = '';
    }, 3000);
};
