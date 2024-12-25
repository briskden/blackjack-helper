const translations = {
    en: {
        title: "Blackjack Helper",
        headerTitle: "Made by Homyak",
        playerHandLabel: "Your Hand:",
        dealerCardLabel: "Dealer's Card:",
        adviceButton: "Get Advice",
        noAdvice: "No advice available for this combination.",
        advicePrefix: "Advice: ",
        adviceTranslations: {
            "Double or Hit": "Double or Hit",
            "Double or Stand": "Double or Stand",
            "Split if Double After Split is possible, otherwise Hit": "Split if Double After Split is possible, otherwise Hit",
            "Stand": "Stand",
            "Hit": "Hit",
            "Split": "Split",
            "Re-split if Double After Split is possible, otherwise Hit": "Re-split if Double After Split is possible, otherwise Hit",
            "Unknown": "Unknown"
        }
    },
    uk: {
        title: "Помічник у Блекджеку",
        headerTitle: "Made by Homyak",
        playerHandLabel: "Ваша рука:",
        dealerCardLabel: "Карта дилера:",
        adviceButton: "Отримати пораду",
        noAdvice: "Немає поради для цієї комбінації.",
        advicePrefix: "Порада: ",
        adviceTranslations: {
            "Double or Hit": "Подвоїти або Взяти",
            "Double or Stand": "Подвоїти або Залишитись",
            "Split if Double After Split is possible, otherwise Hit": "Розділити, якщо можна подвоїти після розділу, інакше Взяти",
            "Stand": "Залишитись",
            "Hit": "Взяти",
            "Split": "Розділити",
            "Re-split if Double After Split is possible, otherwise Hit": "Перерозділити, якщо можна подвоїти після розділу, інакше Взяти",
            "Unknown": "Невідомо"
        }
    }
};

let currentLanguage = "en";

function switchLanguage(lang) {
    currentLanguage = lang;

    document.getElementById("page-title").innerText = translations[lang].title;
    document.getElementById("brand-text").innerText = translations[lang].headerTitle;
    document.getElementById("main-title").innerText = translations[lang].title;
    document.getElementById("player-hand-label").innerText = translations[lang].playerHandLabel;
    document.getElementById("dealer-card-label").innerText = translations[lang].dealerCardLabel;
    document.getElementById("advice-button").innerText = translations[lang].adviceButton;
    document.getElementById("advice").innerText = ""; // Clear previous result
}

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
    const playerHand = document.getElementById("player-hand").value;
    const dealerCard = document.getElementById("dealer-card").value;

    let advice = strategyTable[playerHand]?.[dealerCard] || "Unknown";

    switch (advice) {
        case "D/H":
            advice = "Double or Hit";
            break;
        case "D/S":
            advice = "Double or Stand";
            break;
        case "P/H":
            advice = "Split if Double After Split is possible, otherwise Hit";
            break;
        case "S":
            advice = "Stand";
            break;
        case "H":
            advice = "Hit";
            break;
        case "P":
            advice = "Split";
            break;
        case "R/H":
            advice = "Re-split if Double After Split is possible, otherwise Hit";
            break;
    }

    const translatedAdvice =
        translations[currentLanguage].adviceTranslations[advice] || translations[currentLanguage].noAdvice;

    document.getElementById("advice").innerText = translatedAdvice;
}

// Встановлюємо мову за замовчуванням
switchLanguage(currentLanguage);