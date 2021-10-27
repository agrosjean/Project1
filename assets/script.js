// Establish Globale Variable / Elements
const jazzBar = document.getElementById('jazz-bar')


jazzBar.addEventListener('click', handleJazzClick)


// Fetch the API individually


function handleJazzClick() {
    fetch('http://localhost:3000/jazz')
        .then(response => response.json())
        .then(barsArray => {
            jazzBar.innerHTML = '<img src="./src/Jazz Bar.png" alt="Jazz Bar" style="width:500px;height: 400px;">'
            barsArray.forEach(bar => {
                const detailsJ = document.createElement('div')
                detailsJ.classList.add('infoJ')
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

                detailsJ.append(nameJ, addressJ, hoursJ, ratingJ, priceJ, descriptionJ)
                jazzBar.append(detailsJ)



            })
        })
}

function barDetailts(info) {


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

