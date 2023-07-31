async function getTomTomData(data) {
    let address = `${data.address}${data.city}${data.state}`
    let formattedAddress = formatAddress(address)
    const url = `https://api.tomtom.com/search/2/geocode/${formattedAddress}.json?storeResult=false&view=Unified&key=TXl8IGi9uMFKMITo8xqikpNHR70GrQK5`
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const result = await response.json()
    let reply = {
        lat: result.results[0].position.lat,
        lon: result.results[0].position.lon
    }
    return reply
}

function formatAddress(address) {
    // Replace all whitespaces with '%20'
    const formattedAddress = address.replace(/\s/g, '%20');

    // Remove commas
    const finalAddress = formattedAddress.replace(/,/g, '');

    return finalAddress;
}

export default getTomTomData

