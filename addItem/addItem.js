const backButton = document.querySelector('#goBack');
backButton.addEventListener('click', () => {location.href = "../index.html"})

const addItem = () => {
    let name = document.querySelector('#name').value;
    let price = document.querySelector('#price').value;
    let location = document.querySelector('#location').value;
    let img = document.querySelector('#img').value;
    let description = document.querySelector('#description').value;

    let itemForm = 
        {
         img: img,
         price: price,
         location: location,
         description: description,
         name: name
        }

        console.log(itemForm)
    fetch('https://63443e22242c1f347f822a21.mockapi.io/objects', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemForm),
      })
    .then(alert("Item has been added."))
}