const adClicked = (event) => {
        if (event.path[2].id) {
            sessionStorage.setItem("productID", event.path[2].id);
        } else if (event.path[0].id){
            sessionStorage.setItem("productID", event.path[0].id);
        } else {
            sessionStorage.setItem("productID", event.path[1].id);
        }
    location.href = "./viewItem/viewItem.html"
} 


fetch('https://63443e22242c1f347f822a21.mockapi.io/objects')
.then(data => data.json())
.then(data => updateUI(data))
.then(() => {
    let items = document.querySelectorAll('.itemWindow');
    items.forEach( el => {
        el.addEventListener('click', adClicked)
    })
})

const updateUI = (data) =>{
    data.sort( (a, b) => a.price - b.price);
    const main = document.querySelector('main');
    main.innerHTML = '';

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
        </div>`
        main.innerHTML += itemBox;
    })
}

const addItem = () => {
    location.href = "./addItem/addItem.html"
}

