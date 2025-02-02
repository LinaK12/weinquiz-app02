// Karte initialisieren
var map = L.map('map').setView([51.1333, 10.4167], 6); // Setzt die Karte auf Deutschland mit Zoom-Level 6

// Grenzen der Karte definieren
var bounds = [
    [47.2, 5.5], // Südwest
    [55.1, 15.0] // Nordost
];

// Maximalen Bereich der Karte setzen
map.setMaxBounds(bounds);

// Mindestzoom-Level festlegen
map.options.minZoom = 6;

// OpenStreetMap TileLayer hinzufügen
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marker-Daten mit Koordinaten, Bild und Info
var weinanbaugebiete = [
    {
        name: "Ahr",
        coords: [50.544, 7.115],
        image: "./Ahr.jpg",
        // Wichtig: Komma nach frontText
        frontText: "Mit 531 Hektar Rebfläche und 40 Einzellagen eine der kleinsten Weinanbaugebiete Deutschlands.", 
        // Kommentar darf hier stehen, solange das Komma davor korrekt gesetzt ist
        backText: "Das Weinanbaugebiet erstreckt sich von Altenahr bis nach Heimersheim. " +
                  "Rotweine wie der Spätburgunder und der Frühburgunder gelten als Spezialität der Region. " +
                  "Angebaute Rebsorten der Region: " +
                  "Rotweine: Dornfelder, Portugieser, Spätburgunder; " +
                  "Weißweine: Müller-Thurgau und Riesling."
    },    
    {
        name: "Baden",
        coords: [48.100, 7.850],
        image: "./Baden.jpg",
        frontText: "Mit 15.679 Hektar Rebfläche und 306 Einzellagen, sowie 16 Großlagen ist Baden das 3. größte Weinanbaugebiet Deutschlands.",
        backText: "Das Anbaugebiet erstreckt sich von der Tauber im Norden bis zum Bodensee im Süden." +
                  "Angebaute Rebsorten der Region: " +
                   "Rotwein: Spätburgunder; " + 
                   "Weiﬂwein: Grauburgunder, Gutedel, Müller-Thurgau, Riesling, Silvaner, Traminer, Weißburgunder."

    },
    {
        name: "Franken",
        coords: [49.744, 9.983],
        image: "./Franken.jpg",
        frontText: "Mit 6.173 Hektar eines der mittleren Weinanbaugebiete Deutschlands. Der Bocksbeutel gilt hier als Markenzeichen.",
        backText: "Angebaute Rebsorten der Region: "+
                  "Rotweine: Portugieser, Regent, Spätburgunder, Domina; " +
                  "Weißwein: Müller-Thurgau, Riesling, Scheurebe, Silvaner, Bacchus"
    },
    {
        name: "Hessische Bergstraße",
        coords: [49.683, 8.617],
        image: "./Hessische Bergstraße.jpg",
        frontText: "Ist seit 1971 ein eigenständiges Weinanbaugebiet, dessen Rebfläche von 461 Hektar sich auf zwei räumlich getrennte Bereiche verteilt.", 
        backText: "Angebaute Rebsorten der Region: " +
                  "Rotwein: Spätburgunder; " +
                  "Weißwein: Grauburgunder, Riesling, Silvaner, Weißburgunder"
    },
    {
        name: "Mittelrhein",
        coords: [50.275, 7.650],
        image: "./Mittelrhein.jpg",
        frontText: "Mit 460 Hektar Rebfläche und 111 Einzellagen ist der Mittelrhein das kleinste Weinanbaugebiet Deutschlands. ",
        backText: "Die Rebfläche erstreck sich über Bingen bis nach Bonn. " +
                  "Angebaute Rebsorten der Region: " +
                  "Rotwein: Spätburgunder; " +
                  "Weißwein: Müller-Thurgau, Riesling"
    },
    {
        name: "Mosel",
        coords: [49.911, 7.068],
        image: "./Mosel.jpg",
        frontText: "Mit 8.536 Hektar Rebfläche und 524 Einzellagen ist die Mosel das fünftgrößte und steilste Weinanbaugebiet Deutschlands" +
                   "Das Weinanbaugebiet setzt sich aus Mosel, Saar, Ruwer zusammen. Von 5.000 Winzer in 125 Weinorten werden die steilen Weinberge bewirtschafte.", 
        backText: "Angebaute Rebsorten der Region: " +
                  "Rotwein: /" +
                  "Weißwein: Elbling, Müller-Thurgau, Riesling"
    },
    {
        name: "Nahe",
        coords: [49.841, 7.870],
        image: "./Nahe.jpg",
        frontText: "Mit 4.250 Hektar Rebfläche und 310 Einzellagen gehört die Nahe zu den fünf kleinen Weinanbaugebieten Deutschlands",
        backText: "Angebaute Rebsorten der Region: " +
                  "Rotwein: Dornfelder, Spätburgunder; " +
                  "Weißwein: Müller-Thurgau, Riesling"
    },
    {
        name: "Pfalz",
        coords: [49.351, 8.148],
        image: "./Pfalz.jpg",
        frontText: "Mit 23.793 Hektar zweitgrößte Weinanbaugebiete Deutschlands.", 
        backText: "Das Anbaugebiet erstreckt sich zwischen Bockenheim und Schweigen an der Grenze zum Elsass. " +
                  "Angebaute Rebsorten der Region: " +
                  "Rotwein: Dornfelder, Portugieser, Spätburgunder; " +
                  "Weißwein: Chardonnay, Grauburgunder, Kerner, Müller-Thurgau, Riesling, Weißburgunder"
    },
    {
        name: "Rheingau",
        coords: [49.976, 7.904],
        image: "./Rheingau.jpg",
        frontText: "Mit 3.207 Hektar und 129 Einzellagen gehört der Rheingau zu den touristischsten Weinanbaugebieten Deutschlands.",
        backText: "Angebaute Rebsorten der Region: " +
                  "Rotwein: Spätburgunder; " +
                  "Weißwein: Riesling"
    },
    {
        name: "Rheinhessen",
        coords: [49.746, 8.115],
        image: "./Rheinhessen.jpg",
        frontText: "Mit 27.499 Hektar Rebfläche und 414 Einzellagen gehört Rheinhessen zu den größten Weinanbaugebieten Deutschlands. ", 
        backText: "Die Rebfl‰che erstreckt sich über Alzey, Worms, Mainz und Bingen, im Norden und Osten vom groﬂen Rheinbogen umschlossen. " +
                  "Angebauten Rebsorten der Region: " +
                  "Rotwein: Dornfelder, Portugieser, Spätburgunder; " +
                  "Weißwein: Grauburgunder, Kerner, Müller-Thurgau, Riesling, Silvaner, Weißburgunder"
    },
    {
        name: "Saale-Unstrut",
        coords: [51.199, 11.760],
        image: "./Saale - Unstrut.jpg",
        frontText: "Mit 853 Hektar und 34 Einzellagen gehört Saale-Unstrut zu den fünf kleinen Weinanbaugebieten Deutschlands. ", 
        backText: "Den Namen erhielt die Wein Region von den Flüssen Saale und Unstrut. " +
                  "Angebaute Rebsorten der Region: " +
                  "Rotwein:Dornfelder; " +
                  "Weißwein: Müller-Thurgau, Riesling, Silvaner, Weißburgunder, Bacchus"
    },
    {
        name: "Sachsen",
        coords: [51.163, 13.478],
        image: "./Sachsen.jpg",
        frontText: "Mit 522 Hektar und 17 Einzellagen gehört Sachsen zu den kleinsten Weinanbaugebieten Deutschlands. ",
        backText: "Weine aus Sachsen sind eine Rarität, die man meistens nur in den " +  
                  "kleinen  Weinkeller verkosten kann, darunter auch der Goldriesling, " + 
                  "der nur in Sachsen angebaut wird. " +
                  "Angebaute Rebsorten der Region: " +
                  "Rotwein: Spätburgunder; " +
                  "Weißwein: Grauburgunder, Müller-Thurgau, Riesling, Weißburgunder"
    },
    {
        name: "Württemberg",
        coords: [48.778, 9.180],
        image: "./Württemberg.jpg",
        frontText: "Mit 11.392 Hektar und 210 Einzellagen gehört Württemberg zu den viertgrößten Weinanbaugebieten Deutschlands.", 
        backText: "Der Weinanbau wird entlang des Neckars und der Nebenflusses Rems, " + 
                  "Enz, Kocher, Jagst und Tauber und sogar am Bodensee betrieben. " +
                  "Angebaute Rebsorten der Region: " +
                  "Rotwein: Lemberger, Schwarzriesling, Spätburgunder, Trollinger; " +
                  "Weiﬂwein: Kerner, Müller-Thurgau, Riesling"
    }
];

// Marker und Infobox anzeigen
weinanbaugebiete.forEach(gebiet => {
    var marker = L.marker(gebiet.coords).addTo(map);

    marker.on('mouseover', function () {
        var infoBox = document.getElementById('info');
        
        // Vorderseite
        document.getElementById('info-image').src = gebiet.image;
        document.getElementById('info-title').textContent = gebiet.name;
        document.getElementById('info-description').textContent = gebiet.frontText;
        
        // Rückseite
        document.getElementById('info-back-description').textContent = gebiet.backText;
        
        infoBox.style.display = 'block';  // Infobox einblenden
    });
    
});

// Infobox-Drehung und Schließen
document.getElementById('rotate-info').addEventListener('click', function () {
    var infoBox = document.getElementById('info');
    infoBox.classList.toggle('flipped'); // Nur die aktive Infobox wird gedreht
});

// Infobox schließen, wenn der Schließen-Button geklickt wird
document.getElementById('close-info').addEventListener('click', function () {
    var infoBox = document.getElementById('info');
    infoBox.style.display = 'none'; // Infobox schließen
    infoBox.classList.remove('flipped'); // Drehung zurücksetzen
});

L.choropleth(yourData, {
    valueProperty: 'property_name', // Eigenschaft, die du darstellen möchtest
    scale: ['white', 'blue'],
    steps: 10,
    mode: 'q',
    style: {
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    }
}).addTo(map);

// Grenzen hinzufügen (OSM Boundaries Layer)
var boundaries = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
