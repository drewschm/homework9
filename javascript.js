// const currencySelector = document.getElementById('currencies');
const wrapper = document.getElementById('wrapper');
const wrapperM = document.getElementById('wrapperM');
const attackSelect = document.getElementById('attackSe');
const defendSelect = document.getElementById('defendSe');


const typeChart = {
    fire: { strongAgainst: ["grass"], weakAgainst: ["water"] },
    water: { strongAgainst: ["fire"], weakAgainst: ["electric"] },
    electric: { strongAgainst: ["water"], weakAgainst: ["ground"] },
    grass: { strongAgainst: ["water"], weakAgainst: ["fire"] }
};

function typeCalc() {
    const atk = attackSelect.value
    const def = defendSelect.value
    const atkType = typeChart[atk]
    if (atkType.strongAgainst.includes(def)) {
        wrapper.innerHTML = "Super Effective! Multiplier: 2x"
    }
    else if (atkType.weakAgainst.includes(def)) {
        wrapper.innerHTML = "Not Very Effective... Multiplier: 0.5x"
    }
    else {
        wrapper.innerHTML = "Effective. Multiplier: 0.5x"
    }

}

 attackSelect.addEventListener("change", function(event){
     typeCalc(event.target.value);
     console.log(event.target.value);
 })

defendSelect.addEventListener("change", function(event){
    typeCalc(event.target.value);
    console.log(event.target.value);
})

function loadTypes() {
    for(const key in typeChart) {
        const ele = document.createElement("option");
        ele.setAttribute("value", key);
        ele.innerHTML = key;
        attackSelect.appendChild(ele);
    }
 }

function loadTypes2() {
    for(const key in typeChart) {
        const ele = document.createElement("option");
        ele.setAttribute("value", key);
        ele.innerHTML = key;
        defendSelect.appendChild(ele);
    }
}

 loadTypes()
 loadTypes2()
 typeCalc()

// const conversions = {
//     USD : {country :"USA", value: 1, symbol: "$"},
//     EURO :{country :"Europe", value: 0.89, symbol: "€"},
//     CAD:{country :"Canada", value: 1.4, symbol: "$"},
// }
//
// const products = [
//     {
//         name: "Watermelon",
//         price: 8
//     },
//     {
//         name: "Honeydew",
//         price: 5
//     },
//     {
//         name: "Cantaloupe",
//         price: 3
//     }
// ]
//
// function loadCurrencies() {
//     for(const key in conversions) {
//         const ele = document.createElement("option");
//         ele.setAttribute("value", key);
//         ele.innerHTML = key;
//         currencySelector.appendChild(ele);
//     }
// }
//
// function loadProducts(currency) {
//     wrapper.innerHTML = "";
//     products.forEach(itm => {
//         const ele = document.createElement("div");
//         const nameEle = document.createElement("h2");
//         const priceEle = document.createElement("h4");
//         nameEle.innerHTML = itm.name;
//         priceEle.innerHTML = conversions[currency].symbol + itm.price * conversions[currency].value;
//         ele.appendChild(nameEle);
//         ele.appendChild(priceEle);
//         wrapper.appendChild(ele);
//     })
// }
// function priceConversion(product, currency) {
//     console.log(product.price * conversions[currency].value);
// }
//
// currencySelector.addEventListener("change", function(event){
//     loadProducts(event.target.value);
//     console.log(event.target.value);
// })
//
// loadProducts("EURO");
// loadCurrencies();
// priceConversion(products[0], "EURO");
