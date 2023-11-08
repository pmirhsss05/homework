function checkNumber() {
  var number = parseFloat(document.getElementById("numberInput").value);

  if (isNaN(number)) {
    document.getElementById("result").innerHTML = "Введите корректное число!";
  } else if (number > 0) {
    document.getElementById("result").innerHTML = "Положительное число";
  } else if (number < 0) {
    document.getElementById("result").innerHTML = "Отрицательное число";
  } else {
    document.getElementById("result").innerHTML = "Ноль";
  }
}
