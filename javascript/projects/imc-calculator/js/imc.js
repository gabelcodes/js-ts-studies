function imcCalculator() {
    const form = document.querySelector("#imc-form");

    function handleSubmit(event) {
        event.preventDefault();

        const inputWeight = form.querySelector("#weight");
        const inputHeight = form.querySelector("#height");

        const weight = Number(inputWeight.value);
        const height = Number(inputHeight.value);

        if (!weight) {
            displayMessage("Peso inválido");
            return
        }
        if (!height) {
            displayMessage('Altura inválida');
        }

        const resultImc = calculeImc(weight, height);
        const imcCategory = getImcCategory(resultImc)

        const message = `IMC: ${resultImc} Nivel: ${imcCategory}`;
        displayMessage(message);


    }

    function calculeImc(weight, height) {
        const imc = weight / Math.pow(height, 2);
        return imc.toFixed(2);
    }

    function getImcCategory(imc) {
        const nivel = ['Baixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3', 'Obesidade Grau 4'];

        if (imc <= 18.5) {
            return nivel[0];
        }
        if (imc >= 18.6 & imc <= 24.9) {
            return nivel[1];
        }
        if (imc >= 25 & imc <= 29.9) {
            return nivel[2];
        }
        if (imc >= 30 & imc <= 34.9) {
            return nivel[3];
        }
        if (imc >= 35 & imc <= 39.9) {
            return nivel[4];
        }
        if (imc >= 40) {
            return nivel[5];
        }

    }

    function createParagraph() {
        const paragraph = document.createElement('p');
        return paragraph;
    }

    function displayMessage(msg) {
        const result = document.querySelector("#result");
        result.innerHTML = '';

        const p = createParagraph();
        p.innerHTML = msg
        result.appendChild(p);

    }

    form.addEventListener('submit', handleSubmit);
}

imcCalculator()