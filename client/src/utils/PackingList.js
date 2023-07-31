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

let masterList = []

const createList = function (obj) {
    obj.packingList = []
    masterList = []
    let newObj = packingList(obj)
    newObj = droneRestrictions(newObj)
    newObj = numberPhotos(newObj)
    return newObj
}

//create the packing list via array pushes
const packingList = function (obj) {
    if (obj.photos == true) {
        camList.forEach(el => {
            masterList.push(el)
        });
    }
    if (obj.drone == true) {
        droneList.forEach(el => {
            masterList.push(el)
        })
    }
    if (obj.tour == true) {
        tourList.forEach(el => {
            masterList.push(el)
        })
    }
    obj.packingList = masterList
    return obj
}

//create the flight restrictions 
const droneRestrictions = function (obj) {
    let restriction = ''
    if (obj.drone == true) {
        switch (true) {
            case (obj.milesFromAir <= 1):
                restriction = 'No Fly Zone'
                break;
            case (obj.milesFromAir < 2):
                restriction = '100ft cieling'
                break;
            case obj.milesFromAir < 3:
                restriction = '200ft cieling'
                break;
            case obj.milesFromAir < 4:
                restriction = '300ft cieling'
                break;
            default:
                restriction = '400ft cieling, no restrictions'
                break;
        }
    }
    obj.fRestrictions = `For the drone shots, you should expect a ${restriction}.`
    return obj
}

//create the number of photos object
const numberPhotos = function (obj) {
    if (obj.photos == true) {
        switch (true) {
            case obj.sqFt < 2000:
                obj.numPhotos = 20
                break;
            case obj.sqFt < 3000:
                obj.numPhotos = 30
                break;
            case obj.sqFt < 4000:
                obj.numPhotos = 40
                break;
            case obj.sqFt < 5000:
                obj.numPhotos = 50
                break;
            default:
                obj.numPhotos = 50
                break;
        }
    }
    return obj
}

export default createList