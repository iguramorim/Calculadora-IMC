document
  .getElementById("bmi-calculator-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let resultValue = document.querySelector(".bmi-calculator-result-value");
    let resultStatus = document.querySelector(".bmi-calculator-result-status");
    let imageFigure = document.querySelector(
      ".bmi-calculator-result-image-figure"
    );
    let resultImage = document.querySelector(".bmi-calculator-result-image");
    document.querySelector(".bmi-calculator-result").classList.add("active")

    function imc(peso, altura) {
      let imc = (peso / Math.pow(altura, 2)) * 10000;
      resultValue.innerHTML = imc.toFixed(2).replace(".", ",");

      if (imc < 18.5) {
        resultStatus.innerHTML = "Você está abaixo do peso.";
        resultStatus.style.color = "#ffff37";
        imageFigure.style.backgroundColor = "#ffff37";
        resultValue.style.color = "#ffff37";
        resultImage.src = "./img/sobrepeso.png";
      } else if (imc >= 18.5 && imc <= 24.9) {
        resultStatus.innerHTML = "Você está no peso ideal.";
        resultStatus.style.color = "#5cff37";
        imageFigure.style.backgroundColor = "#5cff37";
        resultValue.style.color = "#5cff37";
        resultImage.src = "./img/peso-ideal.png";
      } else if (imc >= 25 && imc <= 29.9) {
        resultStatus.innerHTML = "Você está sobrepeso.";
        resultStatus.style.color = "#ffb937";
        imageFigure.style.backgroundColor = "#ffb937";
        resultValue.style.color = "#ffb937";
        resultImage.src = "./img/sobrepeso.png";
      } else if (imc >= 30 && imc <= 34.9) {
        resultStatus.innerHTML = "Você está com obesidade grau I.";
        resultStatus.style.color = "#ff6937";
        imageFigure.style.backgroundColor = "#ff6937";
        resultValue.style.color = "#ff6937";
        resultImage.src = "./img/obesidade.png";
      } else if (imc >= 35 && imc <= 40) {
        resultStatus.innerHTML = "Você está com obesidade grau II.";
        resultStatus.style.color = "#ff4437";
        imageFigure.style.backgroundColor = "#ff4437";
        resultValue.style.color = "#ff4437";
        resultImage.src = "./img/obesidade.png";
      } else {
        resultStatus.innerHTML = "Você está com obesidade grau III.";
        resultStatus.style.color = "#ff3737";
        imageFigure.style.backgroundColor = "#ff3737";
        resultValue.style.color = "#ff3737";
        resultImage.src = "./img/obesidade.png";
      }
    }

    imc(weight, height);
});