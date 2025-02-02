// API-URL verwenden, die in Render gesetzt wurde, oder localhost für lokale Tests
const apiUrl = process.env.API_URL || 'http://localhost:3001';  // Falls lokal, wird localhost verwendet

// Fetch-Anfrage an die API
fetch(`${apiUrl}/api/quiz`)  // Verwendet die apiUrl-Variable
    .then(response => response.json())
    .then(data => {
        let currentQuestionIndex = 0;
        const questionText = document.getElementById('question-text');
        const answersContainer = document.getElementById('answers-container');
        const resultContainer = document.getElementById('result');

        function loadQuestion() {
            const question = data[currentQuestionIndex];
            questionText.textContent = question.question_text;

            // Antwort-Buttons erstellen
            answersContainer.innerHTML = ''; // Vorherige Antworten löschen
            question.answers.forEach((answer, index) => {
                const button = document.createElement('button');
                button.textContent = answer.answer_text;
                button.onclick = () => checkAnswer(answer.is_correct);
                answersContainer.appendChild(button);
            });

            // Ergebnis-Meldung zurücksetzen
            resultContainer.textContent = '';
        }

        function checkAnswer(isCorrect) {
            if (isCorrect) {
                resultContainer.textContent = 'Richtige Antwort!';
            } else {
                resultContainer.textContent = 'Falsche Antwort!';
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < data.length) {
                setTimeout(loadQuestion, 2000);  // Nächste Frage nach 2 Sekunden
            } else {
                resultContainer.textContent += ' Quiz beendet!';
            }
        }

        loadQuestion(); // Erste Frage laden
    })
    .catch(error => {
        console.error('Fehler beim Abrufen der Quizdaten:', error);
    });