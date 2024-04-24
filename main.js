let siloCounts = JSON.parse(localStorage.getItem('siloCounts')) || {
    "Wheat": 0,
    "Corn": 0,
    "Objet 3": 0
};

let grangeCounts = JSON.parse(localStorage.getItem('grangeCounts')) || {
    "Objet A": 0,
    "Objet B": 0,
    "Objet C": 0,
    "Objet D": 0,
    "Objet E": 0,
    "Objet F": 0,
};

// Définition des valeurs maximales
const siloMax = 1025;
const grangeMax = 1050;

// Modifier les fonctions d'incrémentation, de décrémentation et de réinitialisation pour appeler la fonction de sauvegarde après chaque modification
function increment(category, object) {
    category[object]++;
    updateCount(category, object);
    saveCountsToLocalStorage();
}

function decrement(category, object) {
    if (category[object] > 0) {
        category[object]--;
        updateCount(category, object);
        saveCountsToLocalStorage();
    }
}

function reset(category, object) {
    category[object] = 0;
    updateCount(category, object);
    saveCountsToLocalStorage();
}

// Fonction de sauvegarde des valeurs des objets dans le stockage local
function saveCountsToLocalStorage() {
    localStorage.setItem('siloCounts', JSON.stringify(getObjectValues(siloCounts)));
    localStorage.setItem('grangeCounts', JSON.stringify(getObjectValues(grangeCounts)));
}

// Fonction pour extraire uniquement les valeurs des objets d'une catégorie
function getObjectValues(category) {
    const values = {};
    for (let obj in category) {
        values[obj] = category[obj];
    }
    return values;
}

// Fonction de mise à jour du nombre total d'objets pour chaque catégorie

function updateCount(category, object) {
    const objectCountElement = document.getElementById(`count-${object}`);
    objectCountElement.textContent = category[object];
    updateTotalCount();
}

function updateTotalCount() {
    updateCategoryTotalCount(siloCounts, siloMax, "category1-title");
    updateCategoryTotalCount(grangeCounts, grangeMax, "category2-title");
}

function updateCategoryTotalCount(category, max, titleId) {
    const totalCountElement = document.getElementById(titleId);
    let totalCount = 0;
    for (let obj in category) {
        totalCount += category[obj];
    }
    const titleText = totalCountElement.innerText.split(" ")[0];
    totalCountElement.textContent = `${titleText} (${totalCount}/${max})`;
}

// Création des objets dans la liste pour le Silo

const objectList1 = document.getElementById("object-list1");
for (let obj in siloCounts) {
    const objectItem = createObjectItem(obj, siloCounts, increment, decrement, reset);
    objectList1.appendChild(objectItem);
}

// Création des objets dans la liste pour la Grange

const objectList2 = document.getElementById("object-list2");
for (let obj in grangeCounts) {
    const objectItem = createObjectItem(obj, grangeCounts, increment, decrement, reset);
    objectList2.appendChild(objectItem);
}
// Fonction pour créer un élément d'objet

function createObjectItem(obj, category, incrementFunc, decrementFunc, resetFunc) {
    const objectItem = document.createElement("div");
    objectItem.classList.add("object-item");

    const objectImage = document.createElement("img");
    objectImage.classList.add("object-image");
    objectImage.src = `assets/images/${obj}.png`;
    objectImage.alt = obj;

    const objectDetails = document.createElement("div");
    objectDetails.classList.add("object-details");
    objectDetails.innerText = obj;

    const objectCountInput = document.createElement("input");
    objectCountInput.classList.add("object-count-input");
    objectCountInput.type = "number";
    objectCountInput.min = "0";
    objectCountInput.value = category[obj];
    objectCountInput.addEventListener("change", function() {
        category[obj] = parseInt(objectCountInput.value);
        updateTotalCount();
        saveCountsToLocalStorage();
    });

    const objectButtons = document.createElement("div");
    objectButtons.classList.add("object-buttons");
    const incrementButton = document.createElement("button");
    incrementButton.classList.add("increment");
    incrementButton.innerText = "+";
    incrementButton.onclick = function() {
        objectCountInput.value = parseInt(objectCountInput.value) + 1;
        category[obj] = parseInt(objectCountInput.value);
        updateTotalCount();
        saveCountsToLocalStorage();
    };
    const decrementButton = document.createElement("button");
    decrementButton.classList.add("decrement");
    decrementButton.innerText = "-";
    decrementButton.onclick = function() {
        if (parseInt(objectCountInput.value) > 0) {
            objectCountInput.value = parseInt(objectCountInput.value) - 1;
            category[obj] = parseInt(objectCountInput.value);
            updateTotalCount();
            saveCountsToLocalStorage();
        }
    };
    const resetButton = document.createElement("button");
    resetButton.classList.add("reset");
    resetButton.innerText = "Reset";
    resetButton.onclick = function() {
        objectCountInput.value = 0;
        category[obj] = 0;
        updateTotalCount();
        saveCountsToLocalStorage();
    };

    objectButtons.appendChild(incrementButton);
    objectButtons.appendChild(decrementButton);
    objectButtons.appendChild(resetButton);

    objectItem.appendChild(objectImage);
    objectItem.appendChild(objectDetails);
    objectItem.appendChild(objectCountInput);
    objectItem.appendChild(objectButtons);

    return objectItem;
}



// Mettre à jour le nombre total d'objets au chargement de la page

updateTotalCount();
