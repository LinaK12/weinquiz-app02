const questions = [
    {
        question: "Welchen Weinsorte bevorzugen Sie?",
        answers: [
            { text: "Rot", value: "Rot" },
            { text: "Rosé", value: "Rosé" },
            { text: "Weiß", value: "Weiß" }
        ]
    },
    {
        question: "Welchen Trockenheitsgrad bevorzugen Sie?",
        answers: [
            { text: "Trocken", value: "Trocken" },
            { text: "Halbtrocken", value: "Halbtrocken" },
            { text: "Lieblich", value: "Lieblich" }
        ]
    },
    {
        question: "Zu welchem Anlass soll der Wein sein?",
        answers: [
            { text: "Dinner", value: "Dinner" },
            { text: "Party", value: "Party" },
            { text: "Entspannen", value: "Entspannen" }
        ]
    },
    {
        question: "Wie soll der Wein sein?",
        answers: [
            { text: "Bio", value: "Bio" },
            { text: "Vegan", value: "Vegan" },
            { text: "Keine", value: "Keine" }
        ]
    }
];

const wineSuggestions = {
    Rot: {
        Trocken: {
            Dinner: {
                Bio: "Spätburgunder (Pinot Noir) aus Baden (Bio)",
                Vegan: "Dornfelder aus der Pfalz (Vegan)",
                Keine: "Lemberger aus Württemberg"
            },
            Party: {
                Bio: "Blauer Portugieser aus Rheinhessen (Bio)",
                Vegan: "Regent aus Franken (Vegan)",
                Keine: "Trollinger aus Württemberg"
            },
            Entspannen: {
                Bio: "Schwarzriesling aus Württemberg (Bio)",
                Vegan: "Spätburgunder aus der Ahr (Vegan)",
                Keine: "Blaufränkisch aus Sachsen"
            }
        },
        Halbtrocken: {
            Dinner: {
                Bio: "Spätburgunder aus der Pfalz (Bio)",
                Vegan: "Dornfelder aus Rheinhessen (Vegan)",
                Keine: "Lemberger aus Württemberg"
            },
            Party: {
                Bio: "Blauer Portugieser aus Franken (Bio)",
                Vegan: "Regent aus der Mosel (Vegan)",
                Keine: "Trollinger aus Württemberg"
            },
            Entspannen: {
                Bio: "Schwarzriesling aus Baden (Bio)",
                Vegan: "Spätburgunder aus der Ahr (Vegan)",
                Keine: "Blaufränkisch aus Sachsen"
            }
        },
        Lieblich: {
            Dinner: {
                Bio: "Spätburgunder aus der Ahr (Bio)",
                Vegan: "Dornfelder aus der Pfalz (Vegan)",
                Keine: "Lemberger aus Württemberg"
            },
            Party: {
                Bio: "Blauer Portugieser aus Rheinhessen (Bio)",
                Vegan: "Regent aus Franken (Vegan)",
                Keine: "Trollinger aus Württemberg"
            },
            Entspannen: {
                Bio: "Schwarzriesling aus Württemberg (Bio)",
                Vegan: "Spätburgunder aus der Ahr (Vegan)",
                Keine: "Blaufränkisch aus Sachsen"
            }
        }
    },
    Rosé: {
        Trocken: {
            Dinner: {
                Bio: "Rosé vom Spätburgunder aus Baden (Bio)",
                Vegan: "Rosé vom Dornfelder aus der Pfalz (Vegan)",
                Keine: "Rosé vom Trollinger aus Württemberg"
            },
            Party: {
                Bio: "Rosé vom Blauen Portugieser aus Rheinhessen (Bio)",
                Vegan: "Rosé vom Regent aus Franken (Vegan)",
                Keine: "Rosé vom Schwarzriesling aus Württemberg"
            },
            Entspannen: {
                Bio: "Rosé vom Spätburgunder aus der Ahr (Bio)",
                Vegan: "Rosé vom Dornfelder aus der Pfalz (Vegan)",
                Keine: "Rosé vom Lemberger aus Württemberg"
            }
        },
        Halbtrocken: {
            Dinner: {
                Bio: "Rosé vom Spätburgunder aus der Pfalz (Bio)",
                Vegan: "Rosé vom Dornfelder aus Rheinhessen (Vegan)",
                Keine: "Rosé vom Trollinger aus Württemberg"
            },
            Party: {
                Bio: "Rosé vom Blauen Portugieser aus Franken (Bio)",
                Vegan: "Rosé vom Regent aus der Mosel (Vegan)",
                Keine: "Rosé vom Schwarzriesling aus Württemberg"
            },
            Entspannen: {
                Bio: "Rosé vom Spätburgunder aus der Ahr (Bio)",
                Vegan: "Rosé vom Dornfelder aus der Pfalz (Vegan)",
                Keine: "Rosé vom Lemberger aus Württemberg"
            }
        },
        Lieblich: {
            Dinner: {
                Bio: "Rosé vom Spätburgunder aus der Ahr (Bio)",
                Vegan: "Rosé vom Dornfelder aus der Pfalz (Vegan)",
                Keine: "Rosé vom Trollinger aus Württemberg"
            },
            Party: {
                Bio: "Rosé vom Blauen Portugieser aus Rheinhessen (Bio)",
                Vegan: "Rosé vom Regent aus Franken (Vegan)",
                Keine: "Rosé vom Schwarzriesling aus Württemberg"
            },
            Entspannen: {
                Bio: "Rosé vom Spätburgunder aus der Ahr (Bio)",
                Vegan: "Rosé vom Dornfelder aus der Pfalz (Vegan)",
                Keine: "Rosé vom Lemberger aus Württemberg"
            }
        }
    },
    Weiß: {
        Trocken: {
            Dinner: {
                Bio: "Riesling aus dem Mosel (Bio)",
                Vegan: "Grauburgunder aus der Pfalz (Vegan)",
                Keine: "Weißburgunder aus Baden"
            },
            Party: {
                Bio: "Silvaner aus Franken (Bio)",
                Vegan: "Müller-Thurgau aus Rheinhessen (Vegan)",
                Keine: "Sauvignon Blanc aus der Pfalz"
            },
            Entspannen: {
                Bio: "Riesling aus dem Rheingau (Bio)",
                Vegan: "Kerner aus der Mosel (Vegan)",
                Keine: "Chardonnay aus Baden"
            }
        },
        Halbtrocken: {
            Dinner: {
                Bio: "Riesling aus der Pfalz (Bio)",
                Vegan: "Grauburgunder aus Rheinhessen (Vegan)",
                Keine: "Weißburgunder aus Franken"
            },
            Party: {
                Bio: "Silvaner aus Franken (Bio)",
                Vegan: "Müller-Thurgau aus der Mosel (Vegan)",
                Keine: "Sauvignon Blanc aus der Pfalz"
            },
            Entspannen: {
                Bio: "Riesling aus dem Rheingau (Bio)",
                Vegan: "Kerner aus der Mosel (Vegan)",
                Keine: "Chardonnay aus Baden"
            }
        },
        Lieblich: {
            Dinner: {
                Bio: "Riesling Spätlese aus dem Mosel (Bio)",
                Vegan: "Grauburgunder Auslese aus der Pfalz (Vegan)",
                Keine: "Weißburgunder Spätlese aus Baden"
            },
            Party: {
                Bio: "Silvaner Spätlese aus Franken (Bio)",
                Vegan: "Müller-Thurgau Auslese aus Rheinhessen (Vegan)",
                Keine: "Sauvignon Blanc Spätlese aus der Pfalz"
            },
            Entspannen: {
                Bio: "Riesling Auslese aus dem Rheingau (Bio)",
                Vegan: "Kerner Spätlese aus der Mosel (Vegan)",
                Keine: "Chardonnay Auslese aus Baden"
            }
        }
    }
};

let currentQuestionIndex = 0;
let userAnswers = {};

const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const resultContainer = document.getElementById('result-container');

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;

    answersContainer.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.onclick = () => selectAnswer(answer.value);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    userAnswers[currentQuestion.question] = answer;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const wineType = userAnswers["Welchen Weinsorte bevorzugen Sie?"];
    const dryness = userAnswers["Welchen Trockenheitsgrad bevorzugen Sie?"];
    const occasion = userAnswers["Zu welchem Anlass soll der Wein sein?"];
    const preference = userAnswers["Wie soll der Wein sein?"];

    const suggestion = wineSuggestions[wineType][dryness][occasion][preference];
    resultContainer.textContent = `Wir empfehlen: ${suggestion}`;
}

loadQuestion();