const rulesTranslations = {
    en: {
        rulesTitle: "Blackjack game rules",
        mainTitle: "Blackjack Helper",
        rulesDescription: "Blackjack, also known as twenty one, is one of the most popular casino card games. The object of the game is to score more points than the dealer, but not more than 21.",
        basicRulesTitle: "Basic rules:",
        basicRulesList: [
            "Each player receives two cards. Face up.",
            "Cards with a number (2-10) are worth as much as is indicated on them. The jack, queen, and king cards are worth 10 points. An ace can be worth 1 or 11.",
            "The player can choose to 'take' (get another card) or 'stay' (keep his hand).",
            "If a player scores more than 21 points, he 'explodes' (loses).",
            "The dealer must take a card if his total is less than or equal to 16 and stay if it is greater than 17."
        ],
        basicStrategiesTitle: "Main strategies:",
        basicStrategiesList: [
            "Doubling: When you are dealt two starting cards and believe that a third card will put you in an advantageous position, you can double your bet.",
            "Split: If your first two cards are of the same value, you can split them into two hands and play each separately.",
            "Hit/Stay: It is important to know when to take another card and when to stay. It is usually recommended to take if you have less than 17 points, but it depends on the dealer's card."
        ],
        navigateButton2: "Back",
    },
    uk: {
        rulesTitle: "Правила гри в Блекджек",
        mainTitle: "Помічник у Блекджеку",
        rulesDescription: "Блекджек, також відомий як двадцять одне, — одна з найпопулярніших карткових ігор у казино. Мета гри — набрати більше очок, ніж дилер, але не більше 21.",
        basicRulesTitle: "Основні правила:",
        basicRulesList: [
            "Кожен гравець отримує дві карти. Лицьовою стороною вгору.",
            "Карти з числом (2-10) дають стільки очок, скільки вказано на них. Валет, дама і король дають по 10 очок. Туз може бути рівним 1 або 11.",
            "Гравець може вибрати 'взяти' (отримати ще одну карту) або 'залишитись' (зберегти свою руку).",
            "Якщо гравець набирає більше ніж 21 очко, він 'вибухає' (програє).",
            "Дилер повинен взяти карту, якщо його сума менша або дорівнює 16, і залишитись, якщо вона більше 17."
        ],
        basicStrategiesTitle: "Основні стратегії:",
        basicStrategiesList: [
            "Подвоєння: Коли вам роздали дві початкові карти, і ви вважаєте, що третя карта поставить вас у вигідну позицію, ви можете подвоїти свою ставку.",
            "Розділення: Якщо ваші перші дві карти мають однакову вартість, ви можете розділити їх на дві руки і грати кожну окремо.",
            "Взяти/Залишитись: Важливо знати, коли брати ще одну карту і коли залишитись. Зазвичай рекомендується брати, якщо у вас менше 17 очок, але це залежить від карти дилера."
        ],
        navigateButton2: "Назад",
    }
};


let currentLanguage = "en";

function switchLanguage(lang) {
    currentLanguage = lang;

    document.getElementById("main-title").innerText = translations[lang].mainTitle;

    document.getElementById("rules-title").innerText = rulesTranslations[lang].rulesTitle;
    document.getElementById("rules-description").innerText = rulesTranslations[lang].rulesDescription;
    document.getElementById("basic-rules-title").innerText = rulesTranslations[lang].basicRulesTitle;

    document.getElementById("navigate-button2").innerText = rulesTranslations[lang].navigateButton2;

    const rulesList = document.getElementById("basic-rules-list");
    rulesList.innerHTML = ""; // Clear existing content
    rulesTranslations[lang].basicRulesList.forEach(rule => {
        const li = document.createElement("li");
        li.innerText = rule;
        rulesList.appendChild(li);
    });

    document.getElementById("basic-strategies-title").innerText = translations[lang].basicStrategiesTitle;

    const strategiesList = document.getElementById("basic-strategies-list");
    strategiesList.innerHTML = ""; // Clear existing content
    translations[lang].basicStrategiesList.forEach(strategy => {
        const li = document.createElement("li");
        li.innerText = strategy;
        strategiesList.appendChild(li);
    });


}

switchLanguage(currentLanguage);

