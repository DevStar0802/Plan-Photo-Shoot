let map;

let myLatLng = { lat: -34.397, lng: 150.644 }
let address1 = document.getElementById('address')
let search = document.getElementById('submit')

async function initMap() {

    map = await new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 12,
    });
    geocoder = await new google.maps.Geocoder();
}

async function codeAddress() {

    geocoder.geocode({ 'address': address1.value }, function (results, status) {
        if (status == 'OK') {
            map.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

initMap();

search.addEventListener("click", () => {
    console.log(address1.value);
    codeAddress();
})
