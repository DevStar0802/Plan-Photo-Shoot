
//fetch the data for the logged in user to get the jobs they have saved
async function fetchUserData(userEmail) {
    try {
        const response = await fetch(`/api/user/focus`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: userEmail
            }),
        })
        const result = await response.json()
        return result.user
    } catch (error) {
        console.log(error)
    }
}

export default fetchUserData;