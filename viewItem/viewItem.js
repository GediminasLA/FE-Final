const backButton = document.querySelector('#goBack');
backButton.addEventListener('click', () => {location.href = "../index.html"})

const main = document.querySelector('main');
const itemID = sessionStorage.getItem('productID');

const updateUI = (data) => {

    data.forEach( el => {
        let itemBox = 
        `<div class="itemWindow" id="${el.id}">
            <img src="${el.img}" class="itemImage">
            <div class="itemInfo">
                <div class="name">${el.name}</div>
                <div class="price">Price: ${el.price}</div>
                <div class="city">${el.location}</div>
                <div class="description">${el.description}</div>
            </div>
            <button class="removeItem" onclick="removeFn()"> Remove Listing</button>
        </div>
       `
        main.innerHTML += itemBox;
    })
}

fetch(`https://63443e22242c1f347f822a21.mockapi.io/objects?id=${itemID}`)
.then(data => data.json())
.then(data => updateUI(data))


const removeFn = () => {
    setTimeout(() => {
        alert("Item has been deleted. You will be redirect to main page.");
        location.href = "../index.html";
    }, 2000);

    fetch(`https://63443e22242c1f347f822a21.mockapi.io/objects/${itemID}`, {method: 'DELETE'})
}