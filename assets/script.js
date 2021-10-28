// Establish Globale Variable / Elements
const jazzBar = document.getElementById('jazz-bar')
const pub = document.getElementById('pubs')
const collegeBar = document.getElementById('college-bars')
const rooftopBar = document.getElementById('rooftop-bars')


jazzBar.addEventListener('click', handleJazzClick)


// Fetch the API individually


function handleJazzClick() {
    fetch('http://localhost:3000/jazz')
        .then(response => response.json())
        .then(barsArray => {
            jazzBar.innerHTML = '<img src="./src/jazz.png" alt="Jazz Bar" style="width:500px;height: 400px;">'
            barsArray.forEach(bar => {


                const detailsJ = document.createElement('div')
                detailsJ.classList.add('infoJ')
                //create a div --> name a class element
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



pub.addEventListener('click', handlePubsClick)

//fetch Pubs Api

function handlePubsClick() {
    fetch('http://localhost:3000/pubs')
        .then(response => response.json())
        .then(barsPubArray => {
            pub.innerHTML = '<img src="./src/pub.png" alt= "Pubs" style="width:500px;height: 400px;">'
            barsPubArray.forEach(bar => {
                const nameP = document.createElement('p')
                nameP.textContent = bar.name
                const addressP = document.createElement('p')
                addressP.textContent = bar.address
                const hoursP = document.createElement('p')
                hoursP.textContent = bar.Hours
                const ratingP = document.createElement('p')
                ratingP.textContent = bar.Rating
                const priceP = document.createElement('p')
                priceP.textContent = bar.Price
                const descriptionP = document.createElement('p')
                descriptionP.textContent = bar.Description

                pub.append(nameP, addressP, hoursP, ratingP, priceP, descriptionP)

            })
        })

}
//college bar section

collegeBar.addEventListener('click', handleCollegeClick)

function handleCollegeClick() {
    fetch('http://localhost:3000/college-bars')
        .then(response => response.json())
        .then(barsCollegeArray => {
            collegeBar.innerHTML = '<img src="./src/college - picture.png" alt= "College Bar" style="width:500px;height: 400px;">'
            barsCollegeArray.forEach(bar => {
                const nameC = document.createElement('p')
                nameC.textContent = bar.name
                const addressC = document.createElement('p')
                addressC.textContent = bar.address
                const hoursC = document.createElement('p')
                hoursC.textContent = bar.Hours
                const ratingC = document.createElement('p')
                ratingC.textContent = bar.Rating
                const priceC = document.createElement('p')
                priceC.textContent = bar.Price
                const descriptionC = document.createElement('p')
                descriptionC.textContent = bar.Description

                collegeBar.append(nameC, addressC, hoursC, ratingC, priceC, descriptionC)

            })
        })

}

//rooftop bar section

rooftopBar.addEventListener('click', handleRooftopClick)
function handleRooftopClick() {
    fetch(' http://localhost:3000/rooftop-bars')
        .then(response => response.json())
        .then(barsRooftopArray => {
            rooftopBar.innerHTML = '<img src="./src/rooftop.png" alt= "Rooftop Bar" style="width:500px;height: 400px;">'
            barsRooftopArray.forEach(bar => {
                const nameR = document.createElement('p')
                nameR.textContent = bar.name
                const addressR = document.createElement('p')
                addressR.textContent = bar.address
                const hoursR = document.createElement('p')
                hoursR.textContent = bar.Hours
                const ratingR = document.createElement('p')
                ratingR.textContent = bar.Rating
                const priceR = document.createElement('p')
                priceR.textContent = bar.Price
                const descriptionR = document.createElement('p')
                descriptionR.textContent = bar.Description

                rooftopBar.append(nameR, addressR, hoursR, ratingR, priceR, descriptionR)

            })
        })
}
