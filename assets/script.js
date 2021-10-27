// Establish Globale Variable / Elements
const barType = document.getElementById('bar-type')
const showInfo = document.getElementById('details')
// const img = document.getElementsByTagName('img')
// const barImage = document.querySelector('.bar-image')
// const images = document.getElementsByTagName('img')




// Fetch the API individually
fetch('http://localhost:3000/jazz-bars')
    .then(response => response.json())
    .then(barsArray => {
        barsArray.forEach(bar => {
            const li = document.createElement('li')
            li.textContent = bar.category
            barType.appendChild(li)
        })
    })


        // function handleBarClick(bar) {
        //     let nameBar = document.createElement('name')
        //     nameBar.textContent = bar.name
        // }




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

