var counts = {}

function incrementCount(itemNumber) {
    if (!(itemNumber in counts)) {
        counts[itemNumber] = 0;
    }
    counts[itemNumber]++;
    document.getElementById('quantity-' + itemNumber).textContent = counts[itemNumber];
}

function decrementCount(itemNumber) {
    if (!(itemNumber in counts) || counts[itemNumber] <= 0) {
        return;
    }
    counts[itemNumber]--;
    document.getElementById('quantity-' + itemNumber).textContent = counts[itemNumber];
}

function addCount(itemNumber) {
    var additionalCount = parseInt(document.getElementById('input-' + itemNumber).value);
    if (isNaN(additionalCount) || additionalCount < 0) {
        return;
    }
    if (!(itemNumber in counts)) {
        counts[itemNumber] = 0;
    }
    counts[itemNumber] += additionalCount;
    document.getElementById('quantity-' + itemNumber).textContent = counts[itemNumber];
    document.getElementById('input-' + itemNumber).value = '';
}
