// Whitespace karakter ellenőrzése (szóköz, tab, újsor)
function isWhitespace(ch) {
  return /\s/.test(ch);
}

// Minden karaktert <span> elembe csomagol
// Példa: "Hi!" → <span>H</span><span>i</span><span>!</span>
function wrapCharsInSpan(element) {
  const text = element.textContent;
  element.textContent = ""; // Eredeti szöveg törlése

  // DocumentFragment: hatékonyabb, mint egyesével hozzáadni az elemeket
  const fragment = document.createDocumentFragment();

  for (const ch of text) {
    if (!isWhitespace(ch)) {
      // Betűk/számok → <span> (így lehet őket CSS-sel formázni)
      const span = document.createElement("span");
      span.textContent = ch;
      fragment.appendChild(span);
    } else {
      // Szóközök → egyszerű text node (nem kell formázás)
      fragment.appendChild(document.createTextNode(ch));
    }
  }

  element.appendChild(fragment); // Minden elem egyszerre hozzáadása
}

// Minden .dancing-letters osztályú elemen futtatjuk
document.querySelectorAll(".dancing-letters").forEach(wrapCharsInSpan);
