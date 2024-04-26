const group1 = document.getElementById("category1-title");
const group2 = document.getElementById("category2-title");

let togglegroup1 = false;
let togglegroup2 = false;

const category1 = document.getElementById("category1");
const category2 = document.getElementById("category2");

group1.addEventListener("click", 
function(e) {
    console.log("click")
    if (togglegroup1) {
        category1.classList.remove("show")
        togglegroup1 = false

                category2.classList.add("show")
        togglegroup2 = true
    } else {
        category1.classList.add("show")
        togglegroup1 = true

        category2.classList.remove("show")
        togglegroup2 = false
    }
});

group2.addEventListener("click", 
function(e) {
    if (togglegroup2) {
        category2.classList.remove("show")
        togglegroup2 = false

        category1.classList.add("show")
        togglegroup1 = true
    } else {
        category2.classList.add("show")
        togglegroup2 = true

        category1.classList.remove("show")
        togglegroup1 = false
    }
});


function saveCountsToLocalStorage() {
    localStorage.setItem('siloCounts', JSON.stringify(getObjectValues(siloCounts)));
    localStorage.setItem('grangeCounts', JSON.stringify(getObjectValues(grangeCounts)));
}

function getObjectValues(category) {
    const values = {};
    for (let obj in category) {
        values[obj] = category[obj];
    }
    return values;
}

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
        console.log(category[obj]);
        totalCount += category[obj].count;
    }
    const titleText = totalCountElement.innerText.split(" ")[0];
    totalCountElement.textContent = `${titleText} (${totalCount}/${max})`;
}


const objectList1 = document.getElementById("object-list1");
for (let obj in siloCounts) {
    const objectItem = createObjectItem(obj, siloCounts, increment, decrement, reset);
    objectList1.appendChild(objectItem);
}

const objectList2 = document.getElementById("object-list2");
for (let obj in grangeCounts) {
    const objectItem = createObjectItem(obj, grangeCounts, increment, decrement, reset);
    objectList2.appendChild(objectItem);
}

function createObjectItem(obj, category, incrementFunc, decrementFunc) {
    const objectItem = document.createElement("div");
    objectItem.classList.add("object-item");

    const objectImage = document.createElement("img");
    objectImage.classList.add("object-image");

    const imageUrl = category[obj].imageName ? `images/${category[obj].imageName}` : "images/default.png";
    
    // Charger l'image dans un objet Image
    const tempImage = new Image();
    tempImage.onload = function() {
        // L'image a été chargée avec succès, assignez-la à l'élément img
        objectImage.src = imageUrl;
    };
    tempImage.onerror = function() {
        // L'image n'existe pas, charger l'image par défaut
        objectImage.src = "images/default.png";
    };
    tempImage.src = imageUrl; // Commencer le chargement de l'image

    objectImage.alt = category[obj].displayName;

    const objectDetails = document.createElement("div");
    objectDetails.classList.add("object-details");
    objectDetails.innerText = category[obj].displayName;

    const objectCountInput = document.createElement("input");
    objectCountInput.classList.add("object-count-input");
    objectCountInput.type = "number";
    objectCountInput.min = "0";
    objectCountInput.value = category[obj].count;
    objectCountInput.addEventListener("change", function() {
        category[obj].count = parseInt(objectCountInput.value);
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
        category[obj].count = parseInt(objectCountInput.value);
        updateTotalCount();
        saveCountsToLocalStorage();
    };
    const decrementButton = document.createElement("button");
    decrementButton.classList.add("decrement");
    decrementButton.innerText = "-";
    decrementButton.onclick = function() {
        if (parseInt(objectCountInput.value) > 0) {
            objectCountInput.value = parseInt(objectCountInput.value) - 1;
            category[obj].count = parseInt(objectCountInput.value);
            updateTotalCount();
            saveCountsToLocalStorage();
        }
    };

    objectButtons.appendChild(incrementButton);
    objectButtons.appendChild(decrementButton);

    objectItem.appendChild(objectImage);
    objectItem.appendChild(objectDetails);
    objectItem.appendChild(objectCountInput);
    objectItem.appendChild(objectButtons);

    return objectItem;
}

updateTotalCount();
