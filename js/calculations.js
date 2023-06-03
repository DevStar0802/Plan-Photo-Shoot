let sqft = document.getElementById('sqft')
let airport = document.getElementById('airport')
let submit = document.getElementById('btn-submit')
let drone = document.getElementById('drone')
let tour = document.getElementById('tour')
let numPhotos = 0
let flightRes = ""
let equipment = ""
let fly = ""
let virt = ""

submit.addEventListener("click", function (e) {
    e.preventDefault()
    sqftCalc(sqft.value);
    flight(airport.value);
    equip();
    logEquip();
    finalLog();
})

//Final Log
function finalLog() {
    if (fly == "") {
        console.log(equipment)
    } else {
        console.log(`${equipment} For the drone shots, you should expect a ${flightRes}.`)
    }
}


// Log Equipment
function logEquip() {
    if (fly == "" && virt == "") {
        equipment = `You need to take ${numPhotos} photos and bring your Camera and Tripod.`
    } else if (fly == "" && virt !== "") {
        equipment = `You need to take ${numPhotos} photos and bring your Camera, Tripod, and ${virt}.`

    } else if (fly !== "" && virt !== "") {
        equipment = `You need to take ${numPhotos} photos and bring your Camera, Tripod, ${fly}, and ${virt}.`
    }
    else if (fly !== "" && virt == "") {
        equipment = `You need to take ${numPhotos} photos and bring your Camera, Tripod, and ${fly}.`
    }
}

// Equipment Calculation
function equip() {
    if (drone.checked === true) {
        fly = "Drone"
    }
    else {
        fly = ""
    }

    if (tour.checked == true) {
        virt = "360 Camera"
    } else {
        virt = ""
    }
    return (virt)
}

// Square Ft Calculation
function sqftCalc(footage) {
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
        numPhotos = 100
    }
}
// Airport Calculation
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