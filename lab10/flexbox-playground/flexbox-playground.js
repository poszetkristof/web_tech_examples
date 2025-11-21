// Container elem kiválasztása (ez a flexbox szülő elem)
const container = document.getElementById("container");

// Új div hozzáadása a containerhez
function addItem() {
  const item = document.createElement("div");
  item.className = "item";
  item.textContent = container.children.length + 1; // Sorszám: hány elem van már
  container.appendChild(item);
}

// Minden visszaállítása alaphelyzetbe
function reset() {
  // Összes gyerek elem törlése
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  // Flexbox CSS tulajdonságok eltávolítása
  container.style.alignItems = null;
  container.style.flexDirection = null;
  container.style.justifyContent = null;
  container.style.flexWrap = null;
  // Select mezők visszaállítása
  document.getElementById("flex-direction-select").value = "";
  document.getElementById("justify-content-select").value = "";
  document.getElementById("align-items-select").value = "";
  document.getElementById("flex-wrap-select").value = "";
}

// flex-direction megváltoztatása
function changeFlexDirection(event) {
  const value = event.currentTarget.value;
  console.log(`flex-direction is set to ${value}`);
  container.style.flexDirection = value; // CSS tulajdonság beállítása JavaScriptből
}

// justify-content megváltoztatása
function changeJustifyContent(event) {
  const value = event.currentTarget.value;
  console.log(`justify-content is set to ${value}`);
  container.style.justifyContent = value;
}

// align-items megváltoztatása
function changeAlignItems(event) {
  const value = event.currentTarget.value;
  console.log(`align-items is set to ${value}`);
  container.style.alignItems = value;
}

// flex-wrap megváltoztatása
function changeFlexWrap(event) {
  const value = event.currentTarget.value;
  console.log(`flex-wrap is set to ${value}`);
  container.style.flexWrap = value;
}

// Event listener-ek regisztrálása
document.getElementById("add-item-btn").addEventListener("click", addItem); // ha ráklikkeltem az "Add item" gombra
document.getElementById("reset-btn").addEventListener("click", reset); // hasonlóan, ha klikkeltem a reset gombra

// ha egy másik opciót választottam ki a select-ből
document
  .getElementById("flex-direction-select")
  .addEventListener("change", changeFlexDirection);
document
  .getElementById("justify-content-select")
  .addEventListener("change", changeJustifyContent);
document
  .getElementById("align-items-select")
  .addEventListener("change", changeAlignItems);
document
  .getElementById("flex-wrap-select")
  .addEventListener("change", changeFlexWrap);
