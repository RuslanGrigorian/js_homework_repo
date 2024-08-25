let services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
};

function Price() {
    let total = 0;
    for (let i in services) {
        let price = parseInt(services[i]);
        total += price;
    }
    return total;
}

function MinPrice() {
    let minPrice = Infinity;
    for (let i in services) {
        let price = parseInt(services[i]);
        if (price < minPrice) {
            minPrice = price;
        }
    }
    return minPrice;
}

function MaxPrice() {
    let maxPrice = 0;
    for (let i in services) {
        let price = parseInt(services[i]);
        if (price > maxPrice) {
            maxPrice = price;
        }
    }
    return maxPrice;
}

services['Розбити скло'] = "200 грн";

console.log("Загальна вартість: " + Price() + " грн");
console.log("Мінімальна вартість: " + MinPrice() + " грн");
console.log("Максімальна вартість: " + MaxPrice() + " грн");