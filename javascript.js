const currencySelector = document.getElementById('currencies');
const wrapper = document.getElementById('wrapper');

const conversions = {
    USD : {country :"USA", value: 1, symbol: "$"},
    EURO :{country :"Europe", value: 0.89, symbol: "€"},
    CAD:{country :"Canada", value: 1.4, symbol: "$"},
}

const products = [
    {
        name: "Watermelon",
        price: 8
    },
    {
        name: "Honeydew",
        price: 5
    },
    {
        name: "Cantaloupe",
        price: 3
    }
]

function loadCurrencies() {
    for(const key in conversions) {
        const ele = document.createElement("option");
        ele.setAttribute("value", key);
        ele.innerHTML = key;
        currencySelector.appendChild(ele);
    }
}

function loadProducts(currency) {
    wrapper.innerHTML = "";
    products.forEach(itm => {
        const ele = document.createElement("div");
        const nameEle = document.createElement("h2");
        const priceEle = document.createElement("h4");
        nameEle.innerHTML = itm.name;
        priceEle.innerHTML = conversions[currency].symbol + itm.price * conversions[currency].value;
        ele.appendChild(nameEle);
        ele.appendChild(priceEle);
        wrapper.appendChild(ele);
    })
}
function priceConversion(product, currency) {
    console.log(product.price * conversions[currency].value);
}

currencySelector.addEventListener("change", function(event){
    loadProducts(event.target.value);
    console.log(event.target.value);
})

loadProducts("EURO");
loadCurrencies();
priceConversion(products[0], "EURO");
