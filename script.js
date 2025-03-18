  // Define the one-dimensional array of cards
        const myArray1 = [
            "TS", "5H", "2D", "KD", "7D", "8C", "3S", "AD", "7S", "5S", 
            "QD", "AH", "8S", "3D", "7H", "QH", "5D", "7C", "4H", "KH", 
            "4D", "TD", "JC", "JH", "TC", "JD", "4S", "TH", "6H", "3C", 
            "2S", "9H"
        ];

        // Define the two-dimensional array
        const my2DArray = [
            ["11.T0", "12.NP", "13.NP", "14.NP", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.NP", "21.NP", "22.B20", "23.B19", "24.B18", "25.B17", "26.B16", "27.B15", "28.B14", "29.B13", "30.B12", "31.B11", "32.B10", "33.B9", "34.B8", "35.B7", "36.B6", "37.B5", "38.B4", "39.B3", "40.B2", "41.B1", "42.B0"],
            ["11.T1", "12.T0", "13.NP", "14.NP", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.NP", "21.B20", "22.B19", "23.B18", "24.B17", "25.B16", "26.B15", "27.B14", "28.B13", "29.B12", "30.B11", "31.B10", "32.B9", "33.B8", "34.B7", "35.B6", "36.B5", "37.B4", "38.B3", "39.B2", "40.B1", "41.B0", "42.NP"],
            ["11.T2", "12.T1", "13.T0", "14.NP", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.NP", "21.B19", "22.B18", "23.B17", "24.B16", "25.B15", "26.B14", "27.B13", "28.B12", "29.B11", "30.B10", "31.B9", "32.B8", "33.B7", "34.B6", "35.B5", "36.B4", "37.B3", "38.B2", "39.B1", "40.B0", "41.NP", "42.NP"],
            ["11.T3", "12.T2", "13.T1", "14.T0", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.B19", "21.B18", "22.B17", "23.B16", "24.B15", "25.B14", "26.B13", "27.B12", "28.B11", "29.B10", "30.B9", "31.B8", "32.B7", "33.B6", "34.B5", "35.B4", "36.B3", "37.B2", "38.B1", "39.B0", "40.NP", "41.NP", "42.NP"],
            ["11.T4", "12.T3", "13.T2", "14.T1", "15.T0", "16.NP", "17.NP", "18.NP", "19.NP", "20.B18", "21.B17", "22.B16", "23.B15", "24.B14", "25.B13", "26.B12", "27.B11", "28.B10", "29.B9", "30.B8", "31.B7", "32.B6", "33.B5", "34.B4", "35.B3", "36.B2", "37.B1", "38.B0", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.T5", "12.T4", "13.T3", "14.T2", "15.T1", "16.T0", "17.NP", "18.NP", "19.B18", "20.B17", "21.B16", "22.B15", "23.B14", "24.B13", "25.B12", "26.B11", "27.B10", "28.B9", "29.B8", "30.B7", "31.B6", "32.B5", "33.B4", "34.B3", "35.B2", "36.B1", "37.B0", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.T6", "12.T5", "13.T4", "14.T3", "15.T2", "16.T1", "17.T0", "18.NP", "19.B17", "20.B16", "21.B15", "22.B14", "23.B13", "24.B12", "25.B11", "26.B10", "27.B9", "28.B8", "29.B7", "30.B6", "31.B5", "32.B4", "33.B3", "34.B2", "35.B1", "36.B0", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.T7", "12.T6", "13.T5", "14.T4", "15.T3", "16.T2", "17.T1", "18.T0", "19.B16", "20.B15", "21.B14", "22.B13", "23.B12", "24.B11", "25.B10", "26.B9", "27.B8", "28.B7", "29.B6", "30.B5", "31.B4", "32.B3", "33.B2", "34.B1", "35.B0", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.T8", "12.T7", "13.T6", "14.T5", "15.T4", "16.T3", "17.T2", "18.T1", "19.T0", "20.B14", "21.B13", "22.B12", "23.B11", "24.B10", "25.B9", "26.B8", "27.B7", "28.B6", "29.B5", "30.B4", "31.B3", "32.B2", "33.B1", "34.B0", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.T9", "12.T8", "13.T7", "14.T6", "15.T5", "16.T4", "17.T3", "18.T2", "19.T1", "20.T0", "21.B12", "22.B11", "23.B10", "24.B9", "25.B8", "26.B7", "27.B6", "28.B5", "29.B4", "30.B3", "31.B2", "32.B1", "33.B0", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.T10", "12.T9", "13.T8", "14.T7", "15.T6", "16.T5", "17.T4", "18.T3", "19.T2", "20.T1", "21.T0", "22.B10", "23.B9", "24.B8", "25.B7", "26.B6", "27.B5", "28.B4", "29.B3", "30.B2", "31.B1", "32.B0", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.NP", "12.T10", "13.T9", "14.T8", "15.T7", "16.T6", "17.T5", "18.T4", "19.T3", "20.T2", "21.T1", "22.T0", "23.B8", "24.B7", "25.B6", "26.B5", "27.B4", "28.B3", "29.B2", "30.B1", "31.B0", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.NP", "12.T11", "13.T10", "14.T9", "15.T8", "16.T7", "17.T6", "18.T5", "19.T4", "20.T3", "21.T2", "22.T1", "23.T0", "24.B6", "25.B5", "26.B4", "27.B3", "28.B2", "29.B1", "30.B0", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.NP", "12.NP", "13.T11", "14.T10", "15.T9", "16.T8", "17.T7", "18.T6", "19.T5", "20.T4", "21.T3", "22.T2", "23.T1", "24.T0", "25.B4", "26.B3", "27.B2", "28.B1", "29.B0", "30.NP", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.NP", "12.NP", "13.T12", "14.T11", "15.T10", "16.T9", "17.T8", "18.T7", "19.T6", "20.T5", "21.T4", "22.T3", "23.T2", "24.T1", "25.T0", "26.B2", "27.B1", "28.B0", "29.NP", "30.NP", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.NP", "12.NP", "13.NP", "14.T12", "15.T11", "16.T10", "17.T9", "18.T8", "19.T7", "20.T6", "21.T5", "22.T4", "23.T3", "24.T2", "25.T1", "26.T0", "27.B0", "28.NP", "29.NP", "30.NP", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.NP", "12.NP", "13.NP", "14.T13", "15.T12", "16.T11", "17.T10", "18.T9", "19.T8", "20.T7", "21.T6", "22.T5", "23.T4", "24.T3", "25.T2", "26.T1", "27.T0", "28.NP", "29.NP", "30.NP", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.NP", "12.NP", "13.B12", "14.NP", "15.T13", "16.T12", "17.T11", "18.T10", "19.T9", "20.T8", "21.T7", "22.T6", "23.T5", "24.T4", "25.T3", "26.T2", "27.T1", "28.T0", "29.NP", "30.NP", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.NP", "12.NP", "13.B11", "14.B10", "15.T14", "16.T13", "17.T12", "18.T11", "19.T10", "20.T9", "21.T7", "22.T6", "23.T5", "24.T4", "25.T3", "26.T2", "27.T1", "28.T0", "29.NP", "30.NP", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.NP", "12.B11", "13.B10", "14.B9", "15.NP", "16.T14", "17.T13", "18.T12", "19.T11", "20.T10", "21.T9", "22.T8", "23.T7", "24.T6", "25.T5", "26.T4", "27.T3", "28.T2", "29.T1", "30.T0", "31.NP", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.NP", "12.B10", "13.B9", "14.B8", "15.B7", "16.T15", "17.T14", "18.T13", "19.T12", "20.T11", "21.T10", "22.T9", "23.T8", "24.T7", "25.T6", "26.T5", "27.T4", "28.T3", "29.T2", "30.T1", "31.T0", "32.NP", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.B10", "12.B9", "13.B8", "14.B7", "15.B6", "16.NP", "17.T15", "18.T14", "19.T13", "20.T12", "21.T11", "22.T10", "23.T9", "24.T8", "25.T7", "26.T6", "27.T5", "28.T4", "29.T3", "30.T2", "31.T1", "32.T0", "33.NP", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.B9", "12.B8", "13.B7", "14.B6", "15.B5", "16.B4", "17.T16", "18.T15", "19.T14", "20.T13", "21.T12", "22.T11", "23.T10", "24.T9", "25.T8", "26.T7", "27.T6", "28.T5", "29.T4", "30.T3", "31.T2", "32.T1", "33.T0", "34.NP", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.B8", "12.B7", "13.B6", "14.B5", "15.B4", "16.B3", "17.NP", "18.T16", "19.T15", "20.T14", "21.T13", "22.T12", "23.T11", "24.T10", "25.T9", "26.T8", "27.T7", "28.T6", "29.T5", "30.T4", "31.T3", "32.T2", "33.T1", "34.T0", "35.NP", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.B7", "12.B6", "13.B5", "14.B4", "15.B3", "16.B2", "17.B1", "18.T17", "19.T16", "20.T15", "21.T14", "22.T13", "23.T12", "24.T11", "25.T10", "26.T9", "27.T8", "28.T7", "29.T6", "30.T5", "31.T4", "32.T3", "33.T2", "34.T1", "35.T0", "36.NP", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.B6", "12.B5", "13.B4", "14.B3", "15.B2", "16.B1", "17.B0", "18.NP", "19.T17", "20.T16", "21.T15", "22.T14", "23.T13", "24.T12", "25.T11", "26.T10", "27.T9", "28.T8", "29.T7", "30.T6", "31.T5", "32.T4", "33.T3", "34.T2", "35.T1", "36.T0", "37.NP", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.B5", "12.B4", "13.B3", "14.B2", "15.B1", "16.B0", "17.NP", "18.NP", "19.T18", "20.T17", "21.T16", "22.T15", "23.T14", "24.T13", "25.T12", "26.T11", "27.T10", "28.T9", "29.T8", "30.T7", "31.T6", "32.T5", "33.T4", "34.T3", "35.T2", "36.T1", "37.T0", "38.NP", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.B4", "12.B3", "13.B2", "14.B1", "15.B0", "16.NP", "17.NP", "18.NP", "19.NP", "20.T18", "21.T17", "22.T16", "23.T15", "24.T14", "25.T13", "26.T12", "27.T11", "28.T10", "29.T9", "30.T8", "31.T7", "32.T6", "33.T5", "34.T4", "35.T3", "36.T2", "37.T1", "38.T0", "39.NP", "40.NP", "41.NP", "42.NP"],
            ["11.B3", "12.B2", "13.B1", "14.B0", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.T19", "21.T18", "22.T17", "23.T16", "24.T15", "25.T14", "26.T13", "27.T12", "28.T11", "29.T10", "30.T9", "31.T8", "32.T7", "33.T6", "34.T5", "35.T4", "36.T3", "37.T2", "38.T1", "39.T0", "40.NP", "41.NP", "42.NP"],
            ["11.B2", "12.B1", "13.B0", "14.NP", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.NP", "21.T19", "22.T18", "23.T17", "24.T16", "25.T15", "26.T14", "27.T13", "28.T12", "29.T11", "30.T10", "31.T9", "32.T8", "33.T7", "34.T6", "35.T5", "36.T4", "37.T3", "38.T2", "39.T1", "40.T0", "41.NP", "42.NP"],
            ["11.B1", "12.B0", "13.NP", "14.NP", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.NP", "21.T20", "22.T19", "23.T18", "24.T17", "25.T16", "26.T15", "27.T14", "28.T13", "29.T12", "30.T11", "31.T10", "32.T9", "33.T8", "34.T7", "35.T6", "36.T5", "37.T4", "38.T3", "39.T2", "40.T1", "41.T0", "42.NP"],
            ["11.B0", "12.NP", "13.NP", "14.NP", "15.NP", "16.NP", "17.NP", "18.NP", "19.NP", "20.NP", "21.NP", "22.T20", "23.T19", "24.T18", "25.T17", "26.T16", "27.T15", "28.T14", "29.T13", "30.T12", "31.T11", "32.T10", "33.T9", "34.T8", "35.T7", "36.T6", "37.T5", "38.T4", "39.T3", "40.T2", "41.T1", "42.T0"]
        ];

        // Generate card radio buttons when the page loads
        document.addEventListener('DOMContentLoaded', function() {
            const cardForm = document.getElementById('card-form');
            myArray1.forEach((card, index) => {
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'card';
                radio.value = index;
                radio.id = `card-${index}`;
                const label = document.createElement('label');
                label.htmlFor = `card-${index}`;
                label.textContent = card;
                cardForm.appendChild(radio);
                cardForm.appendChild(label);
                cardForm.appendChild(document.createElement('br'));
                radio.addEventListener('change', function() {
                    displayNumbers(parseInt(this.value));
                });
            });
        });

        // Function to display number radio buttons based on selected card
        function displayNumbers(cardIndex) {
            // Clear previous content
            document.getElementById('result-text').innerHTML = '';
            const numberForm = document.getElementById('number-form');
            numberForm.innerHTML = '';

            // Get the corresponding row from my2DArray
            const row = my2DArray[cardIndex];
            const numbers = [];

            // Extract numbers before the decimal, excluding those with "NP"
            row.forEach(item => {
                const parts = item.split('.');
                if (parts[1] !== 'NP') {
                    numbers.push(parseInt(parts[0]));
                }
            });

            // Shuffle the numbers for a random-looking sequence
            shuffle(numbers);

            // Create radio buttons for the numbers
            numbers.forEach(num => {
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'number';
                radio.value = num;
                radio.id = `number-${num}`;
                const label = document.createElement('label');
                label.htmlFor = `number-${num}`;
                label.textContent = num;
                numberForm.appendChild(radio);
                numberForm.appendChild(label);
                numberForm.appendChild(document.createElement('br'));
                radio.addEventListener('change', function() {
                    displayResult(cardIndex, parseInt(this.value));
                });
            });
        }

        // Function to display the result based on selected number
        function displayResult(cardIndex, number) {
            const row = my2DArray[cardIndex];
            // Map the number (11-42) to the array index (0-31)
            const idx = number - 11;
            const item = row[idx];
            const parts = item.split('.');
            const resultCode = parts[1]; // 2 or 3 characters after the decimal
            const card = myArray1[cardIndex];

            // Display the result with the code in large font
            document.getElementById('result-text').innerHTML = 
                `Card: ${card}, Number: ${number}, Result: <span style="font-size: large;">${resultCode}</span>`;
        }

        // Fisher-Yates shuffle function for randomizing numbers
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }