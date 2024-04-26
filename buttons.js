function increment(category, object) {
    category[object].count++;
    updateCount(category, object);
    saveCountsToLocalStorage();
}

function decrement(category, object) {
    category[object].count--;
    if (category[object] > 0) {;
        updateCount(category, object);
        saveCountsToLocalStorage();
    }
}

function reset(category, object) {
    category[object] = 0;
    updateCount(category, object);
    saveCountsToLocalStorage();
}