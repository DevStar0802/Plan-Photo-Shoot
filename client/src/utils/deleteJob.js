
//delete a job from the user's saved jobs
async function deleteJob(jobId, user) {
    try {
        const response = await fetch("/api/job/focus", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: user.email,
                jobId: jobId
            }),
        })
        const result = await response.json()
        if (result.message === "Success") {
            return "Success"
        }
    } catch (error) {
        console.log(error)
    }
}

export default deleteJob