# Browser DevTools – Oktatási összefoglaló
Ez a kis összefoglaló bemutatja a **Chrome DevTools** fő funkcióit, amikről az órán beszéltünk.

---

## 1. DevTools megnyitása
- **Billentyűparancsok**:
  - `F12` vagy `Ctrl + Shift + I` (Windows/Linux)
  - `Cmd + Option + I` (Mac)
- **Menüből**:
  - More tools --> developer tools
    - ![alt text](./assets/image.png)
  - Jobb klikk az oldalon → "Vizsgálat" / "Inspect"
    - ![alt text](./assets/image2.png)

---

## 2. Network tab – összes kérés áttekintése
- Minden letöltött erőforrás listázása (HTML, CSS, JS, képek, betűtípusok, API-hívások).
- **Oszlopok jelentése**:
  - ![alt text](./assets/image-8.png)
  - `Name`: fájl vagy erőforrás neve
  - `Status`: HTTP státuszkód (200, 404, 500, stb.)
  - `Type`: Erőforrás típusa
  - `Size`: letöltési méret
  - `Time`: betöltési idő
  - `Waterfall`: időzítési diagram
- 

---

## 3. Network tab – egy kérés részletei
- Klikk ide:
  - ![alt text](./assets/image-7.png)
- **Headers**:
  - Kérés URL-je, HTTP metódus (GET/POST), státuszkód.
  - Request és Response fejlécek.
  - ![alt text](./assets/image-9.png)
- **Preview**:
  - Formázott adatmegtekintés
  - ![alt text](./assets/image-10.png)
- **Response**:
  - Nyers szerverválasz.
  - ![alt text](./assets/image-11.png)
- **Timing**:
  - DNS feloldás, TLS kézfogás, várakozás (TTFB), letöltési idő.
  - ![alt text](./assets/image-12.png)

---

## 4. Network tab – szűrés és keresés
- Fájl típusa szerinti szűrés: `All`, `Doc`, `JS`, `CSS`, `Img`, `Media`, `XHR/Fetch`.
  - ![alt text](./assets/image-13.png)
- Filter mező → regex vagy kulcsszó szerinti keresés.
  - ![alt text](./assets/image-14.png)
- API-hívások figyelése `XHR` vagy `Fetch` filterrel.
  - ![alt text](./assets/image-15.png)

---

## 5. Elements panel – HTML és CSS vizsgálata
- Példa weboldal: https://www.iana.org/help/example-domains
- Böngészőben betöltött HTML DOM-fa megtekintése.
  - ![alt text](./assets/image-1.png)
- CSS-szabályok élő módosítása, stílusok ideiglenes kikapcsolása, html attribútumok szerkesztése.
  - ![alt text](./assets/image-2.png)
  - ![alt text](./assets/image-3.png)
  - ![alt text](./assets/image-4.png)

---

## 6. Console panel – JavaScript konzol
- `console.log()` üzenetek
  - ![alt text](./assets/image-5.png)
- Hibák (`error`) és figyelmeztetések (`warning`) megjelenítése
  - ![alt text](./assets/image-6.png)
  - itt például bejelentkezés nélkül nyitottam meg a youtube-ot és több erőforrás lekérdezésére `403 Forbidden` errort kaptam
  - a hibaüzenetek megjelennek a konzolon
- Rövid JavaScript kódokat is lehet itt futtatni

---

## 7. Extra tippek & trükkök
- **Copy as cURL** → egy kérés reprodukálása parancssorból.
  - ![alt text](./assets/image-18.png)
  - Eredmény:
    - ![alt text](./assets/image-19.png)
- Eszköz nézet átváltása mobil/tablet profilra, különböző képernyőfelbontások gyors tesztelése:
  - ![alt text](./assets/image-16.png)
  - ![alt text](./assets/image-17.png)
---
