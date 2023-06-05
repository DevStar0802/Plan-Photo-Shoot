let numPhotos = 0
let flightRes = ""
let equipment = ""
let camera = false
let fly = false
let virt = false
let content = document.getElementById('content')
let photoFormSection = document.getElementById('photo-form')
let photoForm = document.getElementById('p-form')
let masthead = document.getElementById('masthead')
let newSearch = document.getElementById('new-search')
let newSearch2 = document.getElementById('newSearch')
let results = document.getElementById('results')
let photos = document.getElementById('num-photos')
let pList = document.getElementById('packing-list')
let retrictions = document.getElementById('flight-restrictions')
let droneCard = document.getElementById('drone-card')
let photoCard = document.getElementById('photo-card')
let sqft = document.getElementById('sqft')
let airport = document.getElementById('airport')
let submit = document.getElementById('btn-submit')
let drone = document.getElementById('drone')
let hdr = document.getElementById('hdr')
let tour = document.getElementById('tour')
let pTag = document.getElementById('display')

let camList = [
    "Camera",
    "Tripod",
    "SD Cards",
    "Wide-Angle Lens",
    "Shutter Remote",
    "External Battery",
    "Battery Charger"
]

let droneList = [
    "Camera Drone"
]

let tourList = [
    "360 Camera",
    "360 Tripod",
]



// Equipment Calculation
function equip() {
    if (hdr.checked === true) {
        camera = true
    }
    else {
    }
    if (drone.checked === true) {
        fly = true
    }
    else {
    }
    if (tour.checked == true) {
        virt = true
    } else {
    }
    return (virt)
}

// Square Ft Calculation
function sqftCalc(footage) {
    if (hdr.checked == true) {
        if (footage < 2000) {
            numPhotos = 20
        } else if (footage < 3000) {
            numPhotos = 30
        }
        else if (footage < 4000) {
            numPhotos = 40
        }
        else if (footage < 5000) {
            numPhotos = 50
        }
        else if (footage < 6000) {
            numPhotos = 60
        }
        else {
            numPhotos = "Consult with Client"
        }
    } else {
        numPhotos = ""
    }

}
// Airspace Calculation
function flight(a) {
    if (a < 1) {
        flightRes = "No Fly Zone"
    } else if (a < 2) {
        flightRes = "100ft cieling"
    }
    else if (a < 3) {
        flightRes = "200ft cieling"
    }
    else if (a < 4) {
        flightRes = "300ft cieling"
    }
    else {
        flightRes = "400ft cieling, no restrictions"
    }
}



// Show Results Page 
function showResults() {
    if (!camera && !fly && !virt) {
        alert('Please Select Atleast One: Photos, Drone, or Virtual Tour')
        return;
    }
    photoFormSection.setAttribute('style', 'display: none;')
    masthead.setAttribute('style', 'display: none;')
    results.setAttribute('style', 'display: block;')

}

//loop over equipment to make packing list and show appropiate drone card
function createList() {
    if (camera) {
        camList.forEach(cam => {
            let listItem = document.createElement("li")
            listItem.innerHTML = cam
            listItem.setAttribute('class', 'card-text')
            pList.appendChild(listItem)
        });
        photoCard.setAttribute('style', 'display: block;')
        if (isNaN(numPhotos)) {
            photos.innerHTML = numPhotos
        } else {
            photos.innerHTML = `You need to take ${numPhotos} photos.`
        }
    }

    if (fly) {
        droneList.forEach(dronie => {
            let listItem = document.createElement("li")
            listItem.innerHTML = dronie
            listItem.setAttribute('class', 'card-text')
            pList.appendChild(listItem)
        })
        retrictions.innerHTML = `For the drone shots, you should expect a ${flightRes}.`
        droneCard.setAttribute('style', 'display: block;')
    }

    if (virt) {
        tourList.forEach(t => {
            let listItem = document.createElement("li")
            listItem.innerHTML = t
            listItem.setAttribute('class', 'card-text')
            pList.appendChild(listItem)
        })
    }
}

//show the landing page and form again
function showMain() {
    photoFormSection.setAttribute('style', 'display: block;')
    masthead.setAttribute('style', 'display: block;')
    results.setAttribute('style', 'display: none;')
    droneCard.setAttribute('style', 'display: none;')
    photoCard.setAttribute('style', 'display: none;')
}

//reset the packing list by deleting li's
function deleteList() {
    let liArray = document.querySelectorAll('#packing-list li')
    liArray.forEach(li => {
        li.remove()
    })
}

const init = (e) => {
    e.preventDefault()
    sqftCalc(sqft.value);
    flight(airport.value);
    equip();
}

photoForm.addEventListener("submit", async function (e) {
    init(e);
    showResults();
    createList();
    window.scrollTo(0, 0)
})

//event listeners for buttons to return to landing page and make new submission
newSearch.addEventListener("click", function () {
    deleteList();
    showMain();
    location.reload()
    window.scrollTo(0, 0)
})
newSearch2.addEventListener("click", function () {
    deleteList();
    showMain();
    location.reload()
    window.scrollTo(0, 0)
})




