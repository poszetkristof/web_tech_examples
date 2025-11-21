# Web Technológiák

> Más órák/laborok: https://github.com/ZoltiTar/web-tech-examples

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

---
