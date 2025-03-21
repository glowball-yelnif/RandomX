// Define multiple card stacks
// Define the 2D array first to avoid initialization errors
const my2DArray = [
    ["11.T00", "12.NP", "13.NP", "14.NP", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.NP", "21.NP", "22.B20", "23.B19", "24.B18", "25.B17", "26.B16", "27.B15", "28.B14", "29.B13", "30.B12", "31.B11", "32.B10", "33.B09", "34.B08", "35.B07", "36.B06", "37.B05", "38.B04", "39.B03", "40.B02", "41.B01", "42.B00"],
    ["11.T01", "12.T00", "13.NP", "14.NP", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.NP", "21.B20", "22.B19", "23.B18", "24.B17", "25.B16", "26.B15", "27.B14", "28.B13", "29.B12", "30.B11", "31.B10", "32.B09", "33.B08", "34.B07", "35.B06", "36.B05", "37.B04", "38.B03", "39.B02", "40.B01", "41.B00", "42.NP"],
    ["11.T02", "12.T01", "13.T00", "14.NP", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.NP", "21.B19", "22.B18", "23.B17", "24.B16", "25.B15", "26.B14", "27.B13", "28.B12", "29.B11", "30.B10", "31.B09", "32.B08", "33.B07", "34.B06", "35.B05", "36.B04", "37.B03", "38.B02", "39.B01", "40.B00", "41.NP", "42.NP"],
    ["11.T03", "12.T02", "13.T01", "14.T00", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.B19", "21.B18", "22.B17", "23.B16", "24.B15", "25.B14", "26.B13", "27.B12", "28.B11", "29.B10", "30.B09", "31.B08", "32.B07", "33.B06", "34.B05", "35.B04", "36.B03", "37.B02", "38.B01", "39.B00", "40.NP", "41.NP", "42.NP"],
    ["11.T04", "12.T03", "13.T02", "14.T01", "15.T00", "16.NP", "17.NP", "18.NP", "19.NP", "20.B18", "21.B17", "22.B16", "23.B15", "24.B14", "25.B13", "26.B12", "27.B11", "28.B10", "29.B09", "30.B08", "31.B07", "32.B06", "33.B05", "34.B04", "35.B03", "36.B02", "37.B01", "38.B00", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.T05", "12.T04", "13.T03", "14.T02", "15.T01", "16.T00", "17.NP", "18.NP", "19.B18", "20.B17", "21.B16", "22.B15", "23.B14", "24.B13", "25.B12", "26.B11", "27.B10", "28.B09", "29.B08", "30.B07", "31.B06", "32.B05", "33.B04", "34.B03", "35.B02", "36.B01", "37.B00", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.T06", "12.T05", "13.T04", "14.T03", "15.T02", "16.T01", "17.T00", "18.NP", "19.B17", "20.B16", "21.B15", "22.B14", "23.B13", "24.B12", "25.B11", "26.B10", "27.B09", "28.B08", "29.B07", "30.B06", "31.B05", "32.B04", "33.B03", "34.B02", "35.B01", "36.B00", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.T07", "12.T06", "13.T05", "14.T04", "15.T03", "16.T02", "17.T01", "18.T00", "19.B16", "20.B15", "21.B14", "22.B13", "23.B12", "24.B11", "25.B10", "26.B09", "27.B08", "28.B07", "29.B06", "30.B05", "31.B04", "32.B03", "33.B02", "34.B01", "35.B00", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.T08", "12.T07", "13.T06", "14.T05", "15.T04", "16.T03", "17.T02", "18.T01", "19.T00", "20.B14", "21.B13", "22.B12", "23.B11", "24.B10", "25.B09", "26.B08", "27.B07", "28.B06", "29.B05", "30.B04", "31.B03", "32.B02", "33.B01", "34.B00", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.T09", "12.T08", "13.T07", "14.T06", "15.T05", "16.T04", "17.T03", "18.T02", "19.T01", "20.T00", "21.B12", "22.B11", "23.B10", "24.B09", "25.B08", "26.B07", "27.B06", "28.B05", "29.B04", "30.B03", "31.B02", "32.B01", "33.B00", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.T10", "12.T09", "13.T08", "14.T07", "15.T06", "16.T05", "17.T04", "18.T03", "19.T02", "20.T01", "21.T00", "22.B10", "23.B09", "24.B08", "25.B07", "26.B06", "27.B05", "28.B04", "29.B03", "30.B02", "31.B01", "32.B00", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.NP", "12.T10", "13.T09", "14.T08", "15.T07", "16.T06", "17.T05", "18.T04", "19.T03", "20.T02", "21.T01", "22.T00", "23.B08", "24.B07", "25.B06", "26.B05", "27.B04", "28.B03", "29.B02", "30.B01", "31.B00", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.NP", "12.T11", "13.T10", "14.T09", "15.T08", "16.T07", "17.T06", "18.T05", "19.T04", "20.T03", "21.T02", "22.T01", "23.T00", "24.B06", "25.B05", "26.B04", "27.B03", "28.B02", "29.B01", "30.B00", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.NP", "12.NP", "13.T11", "14.T10", "15.T09", "16.T08", "17.T07", "18.T06", "19.T05", "20.T04", "21.T03", "22.T02", "23.T01", "24.T00", "25.B04", "26.B03", "27.B02", "28.B01", "29.B00", "30.NP", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.NP", "12.NP", "13.T12", "14.T11", "15.T10", "16.T09", "17.T08", "18.T07", "19.T06", "20.T05", "21.T04", "22.T03", "23.T02", "24.T01", "25.T00", "26.B02", "27.B01", "28.B00", "29.NP", "30.NP", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.NP", "12.NP", "13.NP", "14.T12", "15.T11", "16.T10", "17.T09", "18.T08", "19.T07", "20.T06", "21.T05", "22.T04", "23.T03", "24.T02", "25.T01", "26.T00", "27.B00", "28.NP", "29.NP", "30.NP", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.NP", "12.NP", "13.NP", "14.T13", "15.T12", "16.T11", "17.T10", "18.T09", "19.T08", "20.T07", "21.T06", "22.T05", "23.T04", "24.T03", "25.T02", "26.T01", "27.T00", "28.NP", "29.NP", "30.NP", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.NP", "12.NP", "13.B12", "14.NP", "15.T13", "16.T12", "17.T11", "18.T10", "19.T09", "20.T08", "21.T07", "22.T06", "23.T05", "24.T04", "25.T03", "26.T02", "27.T01", "28.T00", "29.NP", "30.NP", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.NP", "12.NP", "13.B11", "14.B10", "15.T14", "16.T13", "17.T12", "18.T11", "19.T10", "20.T09", "21.T07", "22.T06", "23.T05", "24.T04", "25.T03", "26.T02", "27.T01", "28.T00", "29.NP", "30.NP", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.NP", "12.B11", "13.B10", "14.B09", "15.NP", "16.T14", "17.T13", "18.T12", "19.T11", "20.T10", "21.T09", "22.T08", "23.T07", "24.T06", "25.T05", "26.T04", "27.T03", "28.T02", "29.T01", "30.T00", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.NP", "12.B10", "13.B09", "14.B08", "15.B07", "16.T15", "17.T14", "18.T13", "19.T12", "20.T11", "21.T10", "22.T09", "23.T08", "24.T07", "25.T06", "26.T05", "27.T04", "28.T03", "29.T02", "30.T01", "31.T00", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.B10", "12.B09", "13.B08", "14.B07", "15.B06", "16.NP", "17.T15", "18.T14", "19.T13", "20.T12", "21.T11", "22.T10", "23.T09", "24.T08", "25.T07", "26.T06", "27.T05", "28.T04", "29.T03", "30.T02", "31.T01", "32.T00", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.B09", "12.B08", "13.B07", "14.B06", "15.B05", "16.B04", "17.T16", "18.T15", "19.T14", "20.T13", "21.T12", "22.T11", "23.T10", "24.T09", "25.T08", "26.T07", "27.T06", "28.T05", "29.T04", "30.T03", "31.T02", "32.T01", "33.T00", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.B08", "12.B07", "13.B06", "14.B05", "15.B04", "16.B03", "17.NP", "18.T16", "19.T15", "20.T14", "21.T13", "22.T12", "23.T11", "24.T10", "25.T09", "26.T08", "27.T07", "28.T06", "29.T05", "30.T04", "31.T03", "32.T02", "33.T01", "34.T00", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.B07", "12.B06", "13.B05", "14.B04", "15.B03", "16.B02", "17.B01", "18.T17", "19.T16", "20.T15", "21.T14", "22.T13", "23.T12", "24.T11", "25.T10", "26.T09", "27.T08", "28.T07", "29.T06", "30.T05", "31.T04", "32.T03", "33.T02", "34.T01", "35.T00", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.B06", "12.B05", "13.B04", "14.B03", "15.B02", "16.B01", "17.B00", "18.NP", "19.T17", "20.T16", "21.T15", "22.T14", "23.T13", "24.T12", "25.T11", "26.T10", "27.T09", "28.T08", "29.T07", "30.T06", "31.T05", "32.T04", "33.T03", "34.T02", "35.T01", "36.T00", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.B05", "12.B04", "13.B03", "14.B02", "15.B01", "16.B00", "17.NP", "18.NP", "19.T18", "20.T17", "21.T16", "22.T15", "23.T14", "24.T13", "25.T12", "26.T11", "27.T10", "28.T09", "29.T08", "30.T07", "31.T06", "32.T05", "33.T04", "34.T03", "35.T02", "36.T01", "37.T00", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.B04", "12.B03", "13.B02", "14.B01", "15.B00", "16.NP", "17.NP", "18.NP", "19.NP", "20.T18", "21.T17", "22.T16", "23.T15", "24.T14", "25.T13", "26.T12", "27.T11", "28.T10", "29.T09", "30.T08", "31.T07", "32.T06", "33.T05", "34.T04", "35.T03", "36.T02", "37.T01", "38.T00", "39.NP", "40.NP", "41.NP", "42.NP"],
    ["11.B03", "12.B02", "13.B01", "14.B00", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.T19", "21.T18", "22.T17", "23.T16", "24.T15", "25.T14", "26.T13", "27.T12", "28.T11", "29.T10", "30.T09", "31.T08", "32.T07", "33.T06", "34.T05", "35.T04", "36.T03", "37.T02", "38.T01", "39.T00", "40.NP", "41.NP", "42.NP"],
    ["11.B02", "12.B01", "13.B00", "14.NP", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.NP", "21.T19", "22.T18", "23.T17", "24.T16", "25.T15", "26.T14", "27.T13", "28.T12", "29.T11", "30.T10", "31.T09", "32.T08", "33.T07", "34.T06", "35.T05", "36.T04", "37.T03", "38.T02", "39.T01", "40.T00", "41.NP", "42.NP"],
    ["11.B01", "12.B00", "13.NP", "14.NP", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.NP", "21.T20", "22.T19", "23.T18", "24.T17", "25.T16", "26.T15", "27.T14", "28.T13", "29.T12", "30.T11", "31.T10", "32.T09", "33.T08", "34.T07", "35.T06", "36.T05", "37.T04", "38.T03", "39.T02", "40.T01", "41.T00", "42.NP"],
    ["11.B00", "12.NP", "13.NP", "14.NP", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.NP", "21.NP", "22.T20", "23.T19", "24.T18", "25.T17", "26.T16", "27.T15", "28.T14", "29.T13", "30.T12", "31.T11", "32.T10", "33.T09", "34.T08", "35.T07", "36.T06", "37.T05", "38.T04", "39.T03", "40.T02", "41.T01", "42.T00"]
];

// Now define the methods array after my2DArray is initialized
const methods = [
    {
        name: "Aronistic Method",
        cards: ["10S", "5H", "2D", "KD", "7D", "8C", "3S", "AD", "7S", "5S", "QD", "AH", "8S", "3D", "7H", "QH", "5D", "7C", "4H", "KH", "4D", "10D", "JC", "JH", "10C", "JD", "4S", "10H", "6H", "3C", "2S", "9H"],
        data: my2DArray
    },
      {
        name: "Tamaristic Method",
        cards: ["QH", "3D", "QC", "8H", "6S", "5S", "9H", "KC", "2D", "JH", "3S", "8S", "6H", "10C", "5D", "KD", "2C", "3H", "8D", "5C", "KS", "JD", "8C", "10S", "KH", "JC", "6S", "10H", "AD", "4S", "7H", "4D"],
        data: my2DArray
    },
    {
          name: "Redford Method",
        cards: ["8H", "5C", "2D", "QS", "9H", "6C", "3D", "10S", "7H", "4C", "AD", "JS", "9S", "6H", "3C", "KD", "QD", "10D", "7S", "4H", "AC", "JD", "8S", "5H", "2C", "2H", "QC", "9D", "6S", "3H", "KC", "4S"],
        data: my2DArray
    },
    {
        name: "Tritium Method",
        cards: ["JD", "3C", "10S", "9H", "5S", "QD", "6C", "3D", "7S", "4S", "6D", "JH", "4H", "9C", "JC", "4D", "6H", "6S", "JS", "7C", "2H", "KS", "8C", "2C", "AH", "10H", "QS", "7H", "9D", "KH", "QC", "8H"],
        data: my2DArray
    },
    {
        name: "StebbChased8S Method",
        cards: ["QC", "2H", "5S", "8D", "JC", "AH", "4S", "7D", "10C", "KH", "3S", "6D", "9C", "QH", "2S", "5D", "8C", "JH", "AS", "4D", "7C", "TH", "KS", "3D", "6C", "9H", "QS", "2D", "5C", "8H", "JS", "AD"],
        data: my2DArray
    },
    {
        name: "StebbShocked8S Method",
        cards: ["TS", "5H", "2D", "KD", "7D", "8C", "3S", "AD", "7S", "5S", "QD", "AH", "8S", "3D", "7H", "QH", "5D", "7C", "4H", "KH", "4D", "TD", "JC", "JH", "TC", "JD", "4S", "TH", "6H", "3C", "2S", "9H"],
        data: my2DArray
    },
    {
        name: "New Order Method",
        cards: ["JH", "QH", "KH", "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "KD", "QD", "JD", "10D", "9D", "8D", "7D", "6D", "5D", "4D", "3D", "2D", "AD", "KS", "QS", "JS"],
        data: my2DArray
    },
    {
        name: "Custom Method",
        cards: ["10S", "5H", "2D", "KD", "7D", "8C", "3S", "AD", "7S", "5S", "QD", "AH", "8S", "3D", "7H", "QH", "5D", "7C", "4H", "KH", "4D", "10D", "JC", "JH", "10C", "JD", "4S", "10H", "6H", "3C", "2S", "9H"],
        data: my2DArray
    }
];

// Add the rest of your code below (e.g., functions, event listeners, etc.)
// For example:
// function someFunction() {
//     console.log("This is a placeholder for the rest of your code.");
// }
// ...

// Global variables to track selections
let currentMethod = null;
let selectedCardIndex = null;
let selectedPosition = null;

// Function to convert card codes to full names
function cardToFullName(card) {
    const suits = { 'S': 'Spades', 'H': 'Hearts', 'C': 'Clubs', 'D': 'Diamonds' };
    const values = { 'A': 'Ace', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '10': '10', 'J': 'Jack', 'Q': 'Queen', 'K': 'King' };
    const value = card.slice(0, -1);
    const suit = card.slice(-1);
    return `${values[value]} of ${suits[suit]}`;
}

// Fisher-Yates shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Handle "Select a Method" button
document.getElementById('select-method-btn').addEventListener('click', function() {
    const methodDialog = document.getElementById('method-dialog');
    const methodForm = document.getElementById('method-form');
    methodForm.innerHTML = '';
    methods.forEach((method, index) => {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'method';
        radio.value = index;
        radio.id = `method-${index}`;
        const label = document.createElement('label');
        label.htmlFor = `method-${index}`;
        label.textContent = method.name;
        methodForm.appendChild(radio);
        methodForm.appendChild(label);
        methodForm.appendChild(document.createElement('br'));
        radio.addEventListener('change', function() {
            currentMethod = methods[index];
            document.getElementById('method-display').textContent = `Method: ${currentMethod.name}`;
            selectedCardIndex = null;
            selectedPosition = null;
            document.getElementById('card-display').textContent = 'Card: None selected';
            document.getElementById('position-display').textContent = 'Position: None selected';
            document.getElementById('result-display').textContent = 'Result: None';
            methodDialog.close();
        });
    });
    methodDialog.showModal();
});

// Handle method dialog close button
document.getElementById('method-close-btn').addEventListener('click', function() {
    document.getElementById('method-dialog').close();
});

// Handle "Select a Random Card" button
document.getElementById('select-card-btn').addEventListener('click', function() {
    if (!currentMethod) {
        alert('Please select a method first.');
        return;
    }
    const cardDialog = document.getElementById('card-dialog');
    const cardForm = document.getElementById('card-form');
    cardForm.innerHTML = '';
    currentMethod.cards.forEach((card, index) => {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'card';
        radio.value = index;
        radio.id = `card-${index}`;
        const label = document.createElement('label');
        label.htmlFor = `card-${index}`;
        label.textContent = cardToFullName(card);
        cardForm.appendChild(radio);
        cardForm.appendChild(label);
        cardForm.appendChild(document.createElement('br'));
        radio.addEventListener('change', function() {
            selectedCardIndex = parseInt(this.value);
            cardDialog.close();
            displayPositions();
        });
    });
    cardDialog.showModal();
});

// Handle card dialog close button
document.getElementById('card-close-btn').addEventListener('click', function() {
    document.getElementById('card-dialog').close();
});

// Display position selection modal
function displayPositions() {
    const positionDialog = document.getElementById('position-dialog');
    const positionForm = document.getElementById('position-form');
    positionForm.innerHTML = '';
    const row = currentMethod.data[selectedCardIndex];
    const numbers = [];
    row.forEach(item => {
        const parts = item.split('.');
        if (parts[1] !== 'NP') {
            numbers.push(parseInt(parts[0]));
        }
    });
    shuffle(numbers);
    numbers.forEach(num => {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'position';
        radio.value = num;
        radio.id = `position-${num}`;
        const label = document.createElement('label');
        label.htmlFor = `position-${num}`;
        label.textContent = num;
        positionForm.appendChild(radio);
        positionForm.appendChild(label);
        positionForm.appendChild(document.createElement('br'));
        radio.addEventListener('change', function() {
            selectedPosition = parseInt(this.value);
            positionDialog.close();
            updateDisplays();
        });
    });
    positionDialog.showModal();
}

// Handle position dialog close button
document.getElementById('position-close-btn').addEventListener('click', function() {
    document.getElementById('position-dialog').close();
});

// Update main screen displays
function updateDisplays() {
    const card = currentMethod.cards[selectedCardIndex];
    const fullCardName = cardToFullName(card);
    document.getElementById('card-display').textContent = `Remember that you have selected the ${fullCardName}`;
    document.getElementById('position-display').textContent = `Remember that you have selected position number ${selectedPosition}`;
    const row = currentMethod.data[selectedCardIndex];
    const idx = selectedPosition - 11;
    const item = row[idx];
    const parts = item.split('.');
    const resultCode = parts[1];
    let resultLabel, percentage;
    if (resultCode.startsWith('T')) {
        resultLabel = '1.' + resultCode.slice(1);
        percentage = parseInt(resultCode.slice(1)) + '%';
    } else if (resultCode.startsWith('B')) {
        resultLabel = '2.' + resultCode.slice(1);
        percentage = parseInt(resultCode.slice(1)) + '%';
    } else {
        resultLabel = 'Unknown';
        percentage = 'N/A';
    }
    document.getElementById('result-display').innerHTML = `Result: <span style="font-size: large;">${resultLabel}</span>, Percent this position named for the card: `;
}