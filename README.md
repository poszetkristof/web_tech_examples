# Web Technológiák

> Más órák/laborok: https://github.com/ZoltiTar/web-tech-examples

## LAB12-re gyakorló feladatok

_Ezek opcionális házi feladatok a következő laborra, próbáljátok megoldani önállóan._

1. **Tavalyi ZH**: [dungeon-assignment](https://github.com/poszetkristof/web_tech_examples/tree/main/lab11/zh-2024)

2. **Scrabble gyakorlás**: [link](https://github.com/poszetkristof/web_tech_examples/tree/main/lab11/scrabble)

---

## LAB11: Flexbox és Grid (nov. 27.)

_Megj: a megoldások elérhetőek ZIP formátumban. [lab11Solutions.zip](https://github.com/poszetkristof/web_tech_examples/blob/main/lab11/lab11Solutions.zip)_

### Flexbox témakör

1. feladat: [flexbox-playground](https://github.com/poszetkristof/web_tech_examples/tree/main/lab11/flexbox-playground)

   - _Megj: nov 20-án kezdtük el, nov 27-én fejeztük be._

2. feladat: [cards](https://github.com/poszetkristof/web_tech_examples/tree/main/lab11/cards)

3. feladat: [flexbox-image-gallery](https://github.com/poszetkristof/web_tech_examples/tree/main/lab11/flexbox-image-gallery)

### CSS Grid témakör

4. feladat: [grid-image-gallery](https://github.com/poszetkristof/web_tech_examples/tree/main/lab11/grid-image-gallery)

5. feladat: [grid-puzzle](https://github.com/poszetkristof/web_tech_examples/tree/main/lab11/grid-puzzle)

---

## LAB 10: Sass és Flexbox (nov. 20.)

### Sass Telepítés és Használat

**Node.js/NPM telepítése:**

- Hivatalos oldalról: https://nodejs.org/en/download
- Verziókezelővel (például: fnm, nvm vagy nvm-windows)

**Node és npm tesztelése:**

```bash
node -v
npm -v
```

**Sass telepítése:**

```bash
npm install -g sass
```

> **Megjegyzés:** A `-g` (global) flag nélkül csak az aktuális mappában települ, és létrehoz egy `package.json` és `node_modules` mappát.

**Sass tesztelése:**

```bash
sass -v
```

**SCSS fájl fordítása CSS-re:**

```bash
sass <input.scss> <output.css>
```

**Watch mode** (automatikus fordítás fájl módosításkor):

```bash
sass --watch <input.scss>:<output.css>
```

**Teljes Sass dokumentáció:** https://sass-lang.com/documentation/

### Sass Feladatok

#### 1. feladat: `dancing-letters`

- Véletlenszerű RGB színek generálása
- Véletlenszerű forgatás
- `@for` ciklusok használata
- Sass függvények: `math.random()`, egyedi `random()` és `choose()` implementációk

#### 2. feladat: `diagonal-sudoku`

- `@for` ciklusok
- `@extend` és placeholder szelektorok (`%`)
- Dinamikus CSS generálás

### Flexbox Feladatok

#### 1. feladat: `flexbox-playground` (folyamatban)

Interaktív Flexbox demonstráció:

- **HTML + JavaScript:** ✅ Kész
- **CSS:** 🔄 Következő órán folytatjuk

Funkciók:

- Dinamikus elemek hozzáadása
- Flexbox tulajdonságok élőben módosítása (`flex-direction`, `justify-content`, `align-items`, `flex-wrap`)
- Vizuális tengelyek (X/Y) megjelenítése

> EPAM campus programok

- [link a campus portálhoz](https://campus.epam.com/en/training?filter=%7B%22Locations%22%3A%5B57%5D%7D)
- aki elvégzi a `Specialization` programok valamelyikét, az eléri azt a szintet, amire építve már fel tudjuk venni, ha van demand a mi oldalunkon
  - tehát nem 100%, de jelenleg elég nagy az esély rá
