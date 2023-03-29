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
const sea = document.getElementById("sea");
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


// Funcs
const makeMapSections = () => {
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
    for (let i = 0; i < x * x; i++) {
        mapSection.id = "map-section-"+i;
        map.appendChild(mapSection.cloneNode(true));
    }
};
const addBiome = (type) => {
    if (map.hasChildNodes()) {
        let childCount = map.childElementCount;
        for (let i = 0; i < childCount; i++) {
            let biomeParent = document.getElementById("map-section-"+i)
            let innerBiome = biomeParent.lastChild.firstChild;
            if (innerBiome == null) {
                let biomeType;
                switch (type) {
                    case "forest":
                        biomeType = forest.cloneNode(true);
                        break;
                    case "dessert":
                        biomeType = dessert.cloneNode(true);
                        break;
                    case "swamp":
                        biomeType = swamp.cloneNode(true);
                        break;
                    case "sea":
                        biomeType = sea.cloneNode(true);
                        break;
                    case "city":
                        biomeType = city.cloneNode(true);
                        break;
                    default:
                        break;
                }
                let biomesElement = document.createElement("section");
                biomesElement.classList.add("biomes");
                biomesElement.appendChild(biomeType);
                biomeParent.appendChild(biomesElement);
                break;
            }
        }
    }
};


// Run once
makeMapSections();
// Detect change in input field
mapColumns.addEventListener("change", makeMapSections);