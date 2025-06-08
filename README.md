# Gip-2-wiskunde-spel
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Dit is een simpel wiskundespel waarbij je rekenoefeningen kunt maken. Je kiest een foto-categorie (zoals bergen, strand of dieren), een moeilijkheidsgraad, een bereik van getallen en wiskundige symbolen (+, -, *, /). Het spel toont een raster met sommen die je moet oplossen. Aan het einde zie je je resultaten in een grafiek.

## Inhoud

- [Installatie](#installatie)
- [Gebruik](#gebruik)
- [Hoe werkt het spel?](#hoe-werkt-het-spel)
- [Projectstructuur](#projectstructuur)
- [Vereisten](#vereisten)
- [Cheat](#cheat)
- [Licentie](#licentie)


## Installatie

Volg deze stappen om het spel te installeren:

1. **Kloon de repository**:
   ```bash
   git clone https://github.com/intertheworld/Gip-2-wiskunde-spel.git
2. **Ga naar de projectmap**:
   ```bash
   cd wiskundespel
3. **Open het spel**:
   - Open het bestand `index.html` in een webbrowser (bijvoorbeeld Chrome of Firefox).
   - Je hebt geen extra software nodig, want alles werkt in de browser.
> **Let op**: Zorg dat de mappen met afbeeldingen (`img/`) in de juiste structuur staan, anders werken de afbeeldingen niet.

## Gebruik

1. Open `index.html` in je browser.
2. Kies een foto-categorie (bijvoorbeeld bergen of dieren).
3. Selecteer een moeilijkheidsgraad:
   * Makkelijk: raster van 3x3
   * Gemiddeld: raster van 3x4
   * Moeilijk: raster van 4x4
4. Kies wiskundige symbolen (+, -, *, /).
5. Kies een bereik voor de getallen (10, 50 of 100).
6. Klik op **Begin** om het spel te starten.
7. Los de sommen op door de antwoorden in te vullen.
8. Als je klaar bent, zie je je score en een grafiek met juiste en foute antwoorden.
9. Klik op **Refresh** om opnieuw te beginnen.

## Hoe werkt het spel?

- Het spel maakt een raster met wiskundige sommen op basis van je instellingen.
- De achtergrond toont een willekeurige afbeelding uit de gekozen categorie.
- Voor elke som vul je het antwoord in. Als het goed is, verdwijnt de som. Als het fout is, wordt de achtergrond rood.
- Aan het einde zie je een donutgrafiek met je resultaten (juiste en foute antwoorden).
## Projectstructuur

Hier is een overzicht van de belangrijkste bestanden en mappen:

```
Gip-2-wiskunde-spel/
├── index.html          # Hoofdpagina van het spel
├── index.js            # JavaScript-code voor het spel
├── img/                # Map met afbeeldingen voor categorieën
│   ├── ImgForDem/      # Afbeeldingen voor bergen, strand, dieren, enz.
│   ├── icons/          # Pictogrammen voor de instellingen
│   └── gifIcons/       # GIF- en statische afbeeldingen voor hover-effecten
├── LICENSE             # LICENSE
└── README.md           # Dit bestand
```
## Vereisten

- Een moderne webbrowser (zoals Chrome, Firefox of Edge).
- Geen extra software nodig, want het spel gebruikt alleen HTML, JavaScript en jQuery.
- Zorg dat je een internetverbinding hebt voor het laden van externe bibliotheken (zoals jQuery en Chart.js).

## Cheat

Gebruik de cheat-functie door de browserconsole te openen (druk op F12 en op de console kliken) en `solve()` in te typen. Hiermee worden alle antwoorden automatisch ingevuld.

## Licentie

Dit project heeft een MIT-licentie. Zie het bestand [LICENSE](LICENSE) voor meer informatie.
