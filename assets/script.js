// Establish Globale Variable / Elements
const barType = document.getElementById('bar-type')
const barImage = document.querySelector('.bar-image')
const images = document.getElementsByTagName('img')




// Fetch the API
// fetch('http://localhost:3000/bars')
//     .then(response => response.json())
//     .then(bars => {
//         bars.forEach(barObj => {
//             addBarImage(barObj)
//         })
//     })


// Filtering the DB based on the Type of bars
// const barCategory = bars.filter((bar) => {
//     let barCat = 
// })




// Display img of the types of bars 

function addBarImage(barObj) {
    const img = document.createElement('img')
    img.src = barObj.image
    // if (barObj === "Jazz Bar")
    // return 
    barType.appendChild(img)
    img.addEventListener('click', () => barInfo(barObj))

}




function barInfo() {

}


