import data from "./data.js";

let wrapper = document.querySelector('.wrapper');

function card(product) {
    let div = document.createElement(`div`)
    div.classList.add(`card`);

    let img = document.createElement(`img`);
    img.src = product.thumbnail;
    img.setAttribute(`alt`, 'item');

    let h1 = document.createElement(`h1`);
    h1.textContent = product.title;

    let p = document.createElement('p');
    p.textContent = product.description;

    let price = document.createElement(`span`);
    price.textContent = `${product.price}$`

    div.append(img, h1, p, price);

    wrapper.append(div);
}

data.forEach((product) => {
    card(product);
})