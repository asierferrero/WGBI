CREATE TABLE IF NOT EXISTS plateras(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    cover_photo_small TEXT,
    description TEXT
);
INSERT or IGNORE INTO plateras(id, name, cover_photo_small, description) VALUES (1, 'Baba Ghanush', '../../assets/img/ghanush.png', 'Berenjena purez egindako pasta, sukaldaritza arabiarreko tipikoa. Pita ogiarekin jan ohi da');
INSERT or IGNORE INTO plateras(id, name, cover_photo_small, description) VALUES (2, 'Wanton pekin erara', '../../assets/img/wanton.png', 'Pasta bikain hau erabiliko dugu berriro, wan ton, baina oraingoan ahate konfit batez bete dugu');
INSERT or IGNORE INTO plateras(id, name, cover_photo_small, description) VALUES (3, 'Yakisoba tonkatsu', '../../assets/img/yakisoba.png', 'Yakisoba fideoak zoragarri daude. Zaporearen gakoa yakisoba saltsa eta osagaiak: txerria eta ganbak');
INSERT or IGNORE INTO plateras(id, name, cover_photo_small, description) VALUES (4, 'Torradak karameluarekin', '../../assets/img/torrada.png', 'Aste Santuko torrada tradizionalak sobao pasiegoekin. Beti maite dugun zitriko ukituarekin');

CREATE TABLE IF NOT EXISTS erreserbas (
    id TEXT,
    name TEXT,
    lastname TEXT,
    dateR TEXT,
    people NUMBER,
    lunchordinner TEXT
);