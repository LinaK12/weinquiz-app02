const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3001;
// API-URL verwenden, die in Render gesetzt wurde, oder localhost für lokale Tests
const apiUrl = process.env.API_URL || 'http://localhost:3001';   // Wenn `process.env.PORT` gesetzt ist, wird dieser verwendet, ansonsten 3001 für lokal

// Statische Dateien aus dem Oberordner 'Weinwebseite' bereitstellen
app.use(express.static(path.join(__dirname, '..')));  // '..' geht einen Ordner nach oben, um auf 'Weinwebseite' zuzugreifen


// Fragen und Antworten direkt im Code definiert
const quizQuestions = [
  {
    question_text: "Woher kommt der sogenannte „Wein der Hundertjährigen“?",
    answers: [
      { answer_text: "Sardinien", is_correct: true },
      { answer_text: "Südtirol", is_correct: false },
      { answer_text: "Toskana", is_correct: false },
    ]
  },
  {
    question_text: "Für welchen Sturm ist die Steiermark bekannt?",
    answers: [
      { answer_text: "Südmärkischer Sturm", is_correct: false },
      { answer_text: "Schlichersturm", is_correct: true },
      { answer_text: "Steirer Sturm", is_correct: false },
    ]
  },
  {
    question_text: "In welchem Weinbaugebiet kann man die sogenannten Hiwweltouren unternehmen?",
    answers: [
      { answer_text: "Rheinhessen", is_correct: true },
      { answer_text: "Pfalz", is_correct: false },
      { answer_text: "Mosel", is_correct: false },
    ]
  },
  {
    question_text: "Seit wann wird in kleinen Teilen in den Niederlanden Weinbau betrieben?",
    answers: [
      { answer_text: "Gar nicht", is_correct: false },
      { answer_text: "Seit 1970", is_correct: true },
      { answer_text: "Seit den 2000er", is_correct: false },
    ]
  },
  {
    question_text: "Welche Länder grenzen an das österreichische Weinbaugebiet/Weinviertel?",
    answers: [
      { answer_text: "Deutschland und Tschechien", is_correct: false },
      { answer_text: "Slowakei und Ungarn", is_correct: false },
      { answer_text: "Tschechien und Slowakei", is_correct: true },
    ]
  },
  {
    question_text: "Bei welcher Temperatur geschieht der Gärprozess im Wein am besten?",
    answers: [
      { answer_text: "30 Grad", is_correct: false },
      { answer_text: "10 Grad", is_correct: false },
      { answer_text: "15 Grad", is_correct: true }, 
    ]
  },
  {
    question_text: "Wieviel Gramm Restzucker beinhaltet Schaumwein mit der Bezeichnung Extra Dry?",
    answers: [
      { answer_text: "<5g/l", is_correct: false },
      { answer_text: "12-20g/l", is_correct: true },
      { answer_text: "35-50g/l", is_correct: false },
    ]
  },
  {
    question_text: "Wieviel Bar Kohlensäure herrscht in einer Champagnerflasche?",
    answers: [
      { answer_text: "Etwa 6 Bar", is_correct: true },
      { answer_text: "Etwa 4 Bar", is_correct: false },
      { answer_text: "Etwa 2 Bar", is_correct: false },
    ]
  },
  {
    question_text: "Was reicht der Butler James seiner Hausherrin Miss Sophie in dem Sketch \"Dinner for one\" zum 1.Gang? ",
    answers: [
      { answer_text: "Einen Rotwein", is_correct: false },
      { answer_text: "Einen Sherry", is_correct: true },
      { answer_text: "Einen Portwein", is_correct: false },
    ]
  },
  {
    question_text: "Seit wann stößt man mit dem Schaumwein an Silvester an?",
    answers: [
      { answer_text: "Seit Anfang des 20. Jahrhunderts", is_correct: false },
      { answer_text: "Seit dem früheren 19. Jahrhundert", is_correct: true },
      { answer_text: "Bereits seit der Spätantike etwa 3. Jahrhundert", is_correct: false },
    ]
  },
  {
    question_text: "Welche Rotweinsorte wird am häufigsten in der Schweiz angebaut?",
    answers: [
      { answer_text: "Pinot Noir", is_correct: true },
      { answer_text: "Blaufänkisch", is_correct: false },
      { answer_text: "Merlot", is_correct: false },
    ]
  },
  {
    question_text: "Wie wird eine Weinflasche mit einem Fassungsvermögen von 6 Litern genannt?",
    answers: [
      { answer_text: "Balthaser", is_correct: false },
      { answer_text: "Imperiale", is_correct: true },
      { answer_text: "Doppelmagnum", is_correct: false },
    ]
  },
  {
    question_text: "Welche Rebsorte wird zu 70% in China angebaut?",
    answers: [
      { answer_text: "Carbernet Sauvignon", is_correct: true },
      { answer_text: "Carbernet Gemischt", is_correct: false },
      { answer_text: "Chardonnay", is_correct: false },
    ]
  },
  {
    question_text: "Glühwein! Das Getränk deutscher Weihnachtsmärkte! Doch seit wann gibt es die \"Tradition\" der Weihnachtsmärkte?",
    answers: [
      { answer_text: "14. Jahrhundert", is_correct: true },
      { answer_text: "17. Jahrhundert", is_correct: false },
      { answer_text: "19 Jahrhundert", is_correct: false },
    ]
  },
  {
    question_text: "Wie nennt man den wahrscheinlichen mittelalterlichen Vorläufer des Glühweines?",
    answers: [
      { answer_text: "Glutmet", is_correct: false },
      { answer_text: "Rauchwein", is_correct: false },
      { answer_text: "Hipocras", is_correct: true },
    ]
  }, 
  {
    question_text: "Von wem stammt folgenes Zitat: \"Das Leben ist zu kurz um schlechten Wein zu trinken\".",
    answers: [
      { answer_text: "Karl Valentin", is_correct: false },
      { answer_text: "Johann Wolfgang von Goethe", is_correct: true },
      { answer_text: "Berthold Brecht", is_correct: false },
    ]
  },
  {
    question_text: "Von wem stammt das Zitat: \"Ein Trinkgefäß, sobald es leer, macht keine rechte Freude mehr\".",
    answers: [
      { answer_text: "Johann Wolfgang von Goethe", is_correct: true },
      { answer_text: "Wilhelm Busch", is_correct: false },
      { answer_text: "Heinrich Heine", is_correct: false }, 
    ]
  },
  {
    question_text: "Wer ist der griechische Gott des Weines?",
    answers: [
      { answer_text: "Apollo", is_correct: false },
      { answer_text: "Bacchus", is_correct: false },
      { answer_text: "Dionysos", is_correct: true },
    ]
  },
  {
    question_text: "Woher stammt der Ursprung des Wortes keltern?",
    answers: [
      { answer_text: "Vom antiken Volk der Kelten, die ebenfalls wie die Römer Wein in Mitteleuropa kultivieren", is_correct: false },
      { answer_text: "Vom lateinischen Begriff \"calcare\" für treten", is_correct: true },
      { answer_text: "Namensgebend war die Ortschaft Keltern im heutigen Weinanbaugebiet Baden", is_correct: false }
    ]
  },
  {
    question_text: "In mehreren Weingebieten gibt es die Lage \"Hölle\". Doch woher leitet sich der Name ab?",
    answers: [
      { answer_text: "Der Sage nach stapfte der Teufel nach einem verlorenen Streit mit Gott voller Zorn so stark auf, dass so die Lagenhänge entstanden sind", is_correct: false },
      { answer_text: "Der Name rührt daher, dass es auf den meist in Südlage ausgerichtet liegenden Hänge, im Sommer so heiß wie in der Hölle wird", is_correct: false },
      { answer_text: "Der Name leitet sich aus dem Althochdeutschen Wort Helda für Halde ab", is_correct: true },
    ]
  },
  {
    question_text: "Von welchem Kontinent wurde das Schadinsekt die Reblaus in Europa eingeschleppt?",
    answers: [
      { answer_text: "Asien", is_correct: false },
      { answer_text: "Nordamerika", is_correct: true },
      { answer_text: "Afrika", is_correct: false },
    ]
  },
  {
    question_text: "Welches antike Volk verbreitete wahrscheinlich als erstes die Weinkultivierung im Mittelmeerraum?",
    answers: [
      { answer_text: "Griechen", is_correct: false },
      { answer_text: "Römer", is_correct: false },
      { answer_text: "Phönzier", is_correct: true },
    ]
  },
  {
    question_text: "Unter welchem Synonym ist die Rebsorte Müller-Thurgau bekannt?",
    answers: [
      { answer_text: "Rivaner", is_correct: true },
      { answer_text: "Revaner", is_correct: false },
      { answer_text: "Silvaner", is_correct: false }, 
    ]
  },
  {
    question_text: "Wo wird die alte Rebsorte Gutedel hauptsächlich in Deutschland angebaut?",
    answers: [
      { answer_text: "Baden", is_correct: true },
      { answer_text: "Mittelrhein", is_correct: false },
      { answer_text: "Rheingau", is_correct: false },
    ]
  },
  {
    question_text: "Welches ist das größte deutsche Weinfest?",
    answers: [
      { answer_text: "Würzburger Weinparade", is_correct: false },
      { answer_text: "Bad Dürkheimer Wurstmarkt", is_correct: true },
      { answer_text: "Winniger Weinfest", is_correct: false },
    ]
  },
  {
    question_text: "In welchem Bundesland befindet sich das Weinbaugebiet Rheinhessen?",
    answers: [
      { answer_text: "Baden-Württemberg", is_correct: false },
      { answer_text: "Hessen", is_correct: false },
      { answer_text: "Rheinland-Pfalz", is_correct: true },
    ]
  },
  {
    question_text: "Wie heißt einer der Weine im Sketch \"Weihnachten bei den Hoppenstedts\" von Loriot?",
    answers: [
      { answer_text: "Geisenheimer Blauspäling", is_correct: false },
      { answer_text: "Oberföhringer Vogelspinne", is_correct: true },
      { answer_text: "Niedertauener Rotlurch", is_correct: false }, 
    ]
  },
  {
    question_text: "Welchen Tau fürchten Winzer am meisten?",
    answers: [
      { answer_text: "Früher Herbsttau", is_correct: false },
      { answer_text: "Echter Mehltau", is_correct: true },
      { answer_text: "Heller Abendtau", is_correct: false },
    ]
  },
  {
    question_text: "Womit wird das \"Mostgewicht\" gemessen?",
    answers: [
      { answer_text: "Oechsle Skala", is_correct: true },
      { answer_text: "Rebwaage", is_correct: false },
      { answer_text: "Mostschieber", is_correct: false },
    ]
  },
  {
    question_text: "Wie werden Weinblüten bestäubt?",
    answers: [
      { answer_text: "Hauptsächlich  durch Bienen", is_correct: false },
      { answer_text: "Hauptsächlich durch Schmetterlinge", is_correct: false },
      { answer_text: "Durch Windbestäubung", is_correct: true },
    ]
  },
  {
    question_text: "Welches ist das größte Weinanbaugebiet in Deutschland?",
    answers: [
      { answer_text: "Franken", is_correct: false },
      { answer_text: "Rheinhessen", is_correct: true },
      { answer_text: "Mosel", is_correct: false },
    ]
  },
  {
    question_text: "Wie bezeichnet man den Beruf eines Fass Herstellers?",
    answers: [
      { answer_text: "Fassner", is_correct: false },
      { answer_text: "Fässerer", is_correct: false },
      { answer_text: "Küfner", is_correct: true },
    ]
  },  {
    question_text: "Wann wurde in Deutschland die Sektsteuer bzw. Schaumweinsteuer eingeführt?",
    answers: [
      { answer_text: "1848", is_correct: false },
      { answer_text: "1949", is_correct: false },
      { answer_text: "1902", is_correct: true },
    ]
  },
];
// 🛠️ Ändere von '/quiz' zu '/api/quiz'
app.get('/api/quiz', (req, res) => {  // Endpoint auf '/api/quiz' setzen
  res.json(quizQuestions);
});

app.listen(port, () => {
  console.log(`Server läuft auf ${host}:${port}`);
});