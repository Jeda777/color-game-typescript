var colorBox = document.getElementById('colorBox');
var buttons = document.querySelectorAll('.btn-color');
var resultBox = document.getElementById('resultBox');
var btnHex = document.querySelector('#btn-hex');
var btnRgb = document.querySelector('#btn-rgb');
var mode = 'hex';
var correctColor;
var colors;
var getColor = function () {
    if (mode === 'hex') {
        return "#".concat(Math.floor(Math.random() * 0xffffff).toString(16));
    }
    else if (mode === 'rgb') {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "(".concat(r, ", ").concat(g, ", ").concat(b, ")");
    }
    else {
        throw new Error('Mode not recognised.');
    }
};
var setColor = function () {
    correctColor = getColor();
    colors = [correctColor, getColor(), getColor()];
    colors.sort(function () { return 0.5 - Math.random(); });
    if (mode === 'hex') {
        colorBox.style.background = correctColor;
    }
    else if (mode === 'rgb') {
        colorBox.style.background = "rgb".concat(correctColor);
    }
};
var setButtons = function () {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerText = colors[i];
    }
};
var newGame = function () {
    setColor();
    setButtons();
};
newGame();
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
    newGame();
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
btnHex.addEventListener('click', function () {
    mode = 'hex';
    newGame();
});
btnRgb.addEventListener('click', function () {
    mode = 'rgb';
    newGame();
});
