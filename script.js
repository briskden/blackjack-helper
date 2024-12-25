const strategyTable = {
    "8": {2: "H", 3: "H", 4: "H", 5: "H", 6: "H", 7: "H", 8: "H", 9: "H", 10: "H", A: "H"},
    "9": {2: "H", 3: "D/H", 4: "D/H", 5: "D/H", 6: "D/H", 7: "H", 8: "H", 9: "H", 10: "H", A: "H"},
    "10": {2: "D/H", 3: "D/H", 4: "D/H", 5: "D/H", 6: "D/H", 7: "D/H", 8: "D/H", 9: "D/H", 10: "H", A: "H"},
    "11": {2: "D/H", 3: "D/H", 4: "D/H", 5: "D/H", 6: "D/H", 7: "D/H", 8: "D/H", 9: "D/H", 10: "D/H", A: "H"},
    "12": {2: "H", 3: "H", 4: "S", 5: "S", 6: "S", 7: "H", 8: "H", 9: "H", 10: "H", A: "H"},
    "13": {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "H", 8: "H", 9: "H", 10: "H", A: "H"},
    "14": {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "H", 8: "H", 9: "R/H", 10: "R/H", A: "R/H"},
    "15": {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "H", 8: "H", 9: "R/H", 10: "R/H", A: "R/H"},
    "16": {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "R/H", 9: "R/H", 10: "R/H", A: "R/H"},
    "17": {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", A: "S"},
    "18": {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", A: "S"},
    "19": {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", A: "S"},
    "20": {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", A: "S"},
    "A,2": {2: "H", 3: "H", 4: "D/H", 5: "D/H", 6: "D/H", 7: "H", 8: "H", 9: "H", 10: "H", A: "H"},
    "A,3": {2: "H", 3: "H", 4: "D/H", 5: "D/H", 6: "D/H", 7: "H", 8: "H", 9: "H", 10: "H", A: "H"},
    "A,4": {2: "H", 3: "H", 4: "D/H", 5: "D/H", 6: "D/H", 7: "H", 8: "H", 9: "H", 10: "H", A: "H"},
    "A,5": {2: "H", 3: "H", 4: "D/H", 5: "D/H", 6: "D/H", 7: "H", 8: "H", 9: "H", 10: "H", A: "H"},
    "A,6": {2: "H", 3: "D/S", 4: "D/S", 5: "D/S", 6: "D/S", 7: "S", 8: "H", 9: "H", 10: "H", A: "H"},
    "A,7": {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", A: "S"},
    "A,8": {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", A: "S"},
    "A,9": {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", A: "S"},
    "A,10": {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", A: "S"},
    "2,2": {2: "P/H", 3: "P/H", 4: "P", 5: "P", 6: "P", 7: "P", 8: "H", 9: "H", 10: "H", A: "H"},
    "3,3": {2: "P/H", 3: "P/H", 4: "P", 5: "P", 6: "P", 7: "P", 8: "H", 9: "H", 10: "H", A: "H"},
    "4,4": {2: "H", 3: "H", 4: "H", 5: "P/H", 6: "P/H", 7: "H", 8: "H", 9: "H", 10: "H", A: "H"},
    "5,5": {2: "D/H", 3: "D/H", 4: "D/H", 5: "D/H", 6: "D/H", 7: "D/H", 8: "D/H", 9: "D/H", 10: "H", A: "H"},
    "6,6": {2: "P/H", 3: "P", 4: "P", 5: "P", 6: "P", 7: "P", 8: "H", 9: "H", 10: "H", A: "H"},
    "7,7": {2: "P", 3: "P", 4: "P", 5: "P", 6: "P", 7: "P", 8: "H", 9: "H", 10: "H", A: "H"},
    "8,8": {2: "P", 3: "P", 4: "P", 5: "P", 6: "P", 7: "P", 8: "P", 9: "P", 10: "P", A: "P"},
    "9,9": {2: "P", 3: "P", 4: "P", 5: "P", 6: "S", 7: "P", 8: "P", 9: "S", 10: "S", A: "S"},
    "10,10": {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", A: "S"},
    "A,A": {2: "P", 3: "P", 4: "P", 5: "P", 6: "P", 7: "P", 8: "P", 9: "P", 10: "P", A: "P"}
};

 function getAdvice() {
            const playerHand = document.getElementById('player-hand').value; // Одна карта або сума карт гравця
            const dealerCard = document.getElementById('dealer-card').value; // Карта дилера

            let advice = '';

            // Перевірка, чи є рука гравця парою карт для спліту
            if (playerHand.includes(',')) {
                advice = strategyTable[playerHand]?.[dealerCard] || 'Unknown';
            } else {
                // Якщо це сума карт
                advice = strategyTable[parseInt(playerHand)]?.[dealerCard] || 'Unknown';
            }

            // Перетворення стратегічних порад на зрозуміле формулювання
            switch (advice) {
                case 'D/H':
                    advice = 'Double or Hit';
                    break;
                case 'D/S':
                    advice = 'Double or Stand';
                    break;
                case 'P/H':
                    advice = 'Split if Double After Split is possible, otherwise Hit';
                    break;
                case 'S':
                    advice = 'Stand';
                    break;
                case 'H':
                    advice = 'Hit';
                    break;
                case 'P':
                    advice = 'Split';
                    break;
                case 'R/H':
                    advice = 'Re-split if Double After Split is possible, otherwise Hit';
                    break;
            }

            // Виведення поради на екран
            document.getElementById('advice').innerText = advice;
        }