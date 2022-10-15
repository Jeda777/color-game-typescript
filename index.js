var colorBox = document.getElementById('colorBox');
var buttons = document.querySelectorAll('button');
var resultBox = document.getElementById('resultBox');
var correctColor;
var colors;
var getColor = function () {
    return "#".concat(Math.floor(Math.random() * 0xffffff).toString(16));
};
var setColor = function () {
    correctColor = getColor();
    colors = [correctColor, getColor(), getColor()];
    colors.sort(function () { return 0.5 - Math.random(); });
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
