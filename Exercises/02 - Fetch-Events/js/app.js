// Get css vars
const root = document.documentElement;
const cssvarColor = () => getComputedStyle(root).getPropertyValue("--color");

// Get other elements
const body = document.body;
const quoteElement = document.getElementById("quote");
const btnChangeQuote = document.getElementById("changeQuote");

// Functions
const rndNumber = (maxValue) => Math.round(Math.random() * maxValue); // AUTO RETURNS
// const rndNumber = (maxValue) => { // NEEDS A RETURN STATEMENT
//     return Math.round(Math.random()*maxValue);
// };

const currentInterval = (func, intervalTime) => {
    setInterval(func, intervalTime);
};

/**
* Returns a random color from the chosen color model
* @param {string} colorModel - Either RGB or HSL
* @returns {string} A string formated depending on the color model
*/
function getRandomColor(colorModel, value1, value2, value3) {
    switch (String(colorModel).toLowerCase()) {
        case "rgb":
            return `rgb(${value1!=0?value1:rndNumber(255)}, ${value2!=0?value2:rndNumber(255)}, ${value3!=0?value3:rndNumber(255)})`;
        case "hsl":
            return `hsl(${value1!=0?value1:rndNumber(360)}, ${value2!=0?value2:rndNumber(100)}%, ${value3!=0?value3:rndNumber(100)}%)`;
        default:
            throw new Error("No such parameter is available. Choose from RGB or HSL.");
    }
}

function setBackgroundColor(colorModel, value1 = 0, value2 = 0, value3 = 0, color = getRandomColor(colorModel, value1, value2, value3)) {
    root.style.setProperty("--color", color);
    body.style.backgroundColor = cssvarColor();
}

function stopInterval(interval) {
    clearInterval(interval);
}

// Async functions
async function getNewQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return "Error: could not fetch a new quote";
    }
}

btnChangeQuote.addEventListener("click", () => {
    getNewQuote().then(quote => {
        quoteElement.innerHTML = quote.content;
    });
    setBackgroundColor("HSL", 0, 50, 50);
});