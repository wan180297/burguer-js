const buttonShowAll = document.querySelector(".show-all");
const list = document.querySelector(".list");
const buttonMap = document.querySelector(".map")
const buttonReduce = document.querySelector(".reduce")
const buttonFilter = document.querySelector(".filter")

myList = '';

function formatCurrency(value) {
    const newValue = value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })
    return newValue;
}

function show(productsArray) {
    myList = '';
    productsArray.forEach((item) => {
        myList += `
        <li>
            <img src=${item.src} alt="burguer">
            <p>${item.name}</p>
            <p class="item-price">${formatCurrency(item.price)}</p>
        </li>
        `
    })
    list.innerHTML = myList;
}
list.style.marginBottom = '50px';

function mapping() {
    const newPrices = menuOptions.map((products) => ({
        ...products,
        price: products.price * 0.9
    }))
    show(newPrices);
}

function sum() {
    const addTotalPrice = menuOptions.reduce((acumulador, productPrice) => {
        return acumulador + productPrice.price
    }, 0)
    list.innerHTML = `<li>O valor total de todos os hamburgueres foi de ${formatCurrency(addTotalPrice)}</li>`;
}

function filterVegan() {
    const filterVeganBurguer = menuOptions.filter((burguerVegan) => burguerVegan.vegan)
    show(filterVeganBurguer)
}

buttonShowAll.addEventListener("click", () => show(menuOptions));
buttonMap.addEventListener("click", mapping);
buttonReduce.addEventListener("click", sum)
buttonFilter.addEventListener("click", filterVegan)
