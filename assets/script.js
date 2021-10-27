// Establish Globale Variable / Elements
const jazzBar = document.getElementById('jazz-bar')
const showInfo = document.getElementById('details')


jazzBar.addEventListener('click', handleJazzClick)

// Fetch the API individually


function handleJazzClick() {
    fetch('http://localhost:3000/jazz')
        .then(response => response.json())
        .then(barsArray => {
            barsArray.forEach(bar => {
                const nameJ = document.createElement('p')
                nameJ.textContent = bar.name
                const addressJ = document.createElement('p')
                addressJ.textContent = bar.address
                const hoursJ = document.createElement('p')
                hoursJ.textContent = bar.Hours
                const ratingJ = document.createElement('p')
                ratingJ.textContent = bar.Rating
                const priceJ = document.createElement('p')
                priceJ.textContent = bar.Price
                const descriptionJ = document.createElement('p')
                descriptionJ.textContent = bar.Description

                jazzBar.append(nameJ, addressJ, hoursJ, ratingJ, priceJ, descriptionJ)

                

            })
        })
}




// Display img of the types of bars 

// function addBarImage(barObj) {
//     const img = document.createElement('img')
//     img.src = barObj.image
//     // if (barObj === "Jazz Bar")
//     // return 
//     barType.appendChild(img)
//     img.addEventListener('click', () => barInfo(barObj))

// }




// function barInfo() {

