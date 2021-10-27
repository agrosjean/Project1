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

                jazzBar.append(nameJ, addressJ)

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

