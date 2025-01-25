function showInput()
{
    const userInput = document.getElementById("userInput").value;
    const output = document.getElementById("output");

    if (userInput) {
        output.textContent = `You entered:  ${userInput}`;
    }
    else {
        output.textContent = "Please enter something.";
    }
}

function checkOddEven() {
    const numberInput = document.getElementById("numberInput").value;
    const conditionalOutput = document.getElementById("conditionalOutput");

    if (numberInput === "") {
        conditionalOutput.textContent = "Please enter a number.";
    }
    else {
        const number = parseInt(numberInput, 10);
        if (number % 2 === 0) {
            conditionalOutput.textContent = `${number} is even.`;
        }
        else {
            conditionalOutput.textContent = `${number} is odd.`;
        }
    }
}

function displayNumbers() {
    const loopOutput = document.getElementById("loopOutput");

    loopOutput.innerHTML = "";

    for (let i = 1; i <= 7; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = i;
        loopOutput.appendChild(listItem);
    }
}
