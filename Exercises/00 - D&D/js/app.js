// Get elements
// -- Root
const root = getComputedStyle(document.documentElement);
// -- Main elements
const body = document.body;
const mapColumns = document.getElementById("mapColumns");
// -- Map elements
const map = document.getElementById("map");
const mapSection = document.getElementById("map-section");
const hole = document.getElementById("hole");
// -- Map biomes
const forest = document.getElementById("forest");
const dessert = document.getElementById("dessert");
const swamp = document.getElementById("swamp");
const city = document.getElementById("city");
// -- Map components
// -- -- Places
const camp = document.getElementById("camp");
const tavern = document.getElementById("tavern");
const buildingSmall = document.getElementById("buildingSmall");
const buildingMedium = document.getElementById("buildingMedium");
const buildingLarge = document.getElementById("buildingLarge");
// -- -- Assets
const barrel = document.getElementById("barrel");
const table = document.getElementById("table");
// -- -- Nature
const tree = document.getElementById("tree");
const bush = document.getElementById("bush");



const makeMapSections = () =>{
    // Make map sections
    document.documentElement.style.setProperty("--map-columns", mapColumns.value);
    while (mapSection.hasChildNodes()) {
        mapSection.removeChild(mapSection.firstChild);
    }
    while (map.hasChildNodes()) {
        map.removeChild(map.firstChild);
    }
    const x = root.getPropertyValue("--map-columns");
    for (let i = 0; i < 16; i++) {
        mapSection.appendChild(hole.cloneNode(true));
    }
    for (let i = 0; i < x*x; i++) {
        map.appendChild(mapSection.cloneNode(true));
    }
    let b = document.createElement("section");
    let f = forest.cloneNode(true);
    b.classList.add("biomes");
    b.appendChild(f);
    map.firstChild.appendChild(b);
};

makeMapSections();

// Detect change
mapColumns.addEventListener("change", makeMapSections);