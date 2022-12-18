// Add your code here
function submitData(userName, unserEmail) {
    const fetchInfo = {
        
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                name: userName,
                email: unserEmail,
            })
    }
    fetch("http://localhost:3000/users", fetchInfo)
    .then(Response => Response.json())
    .then(data => console.log(data))
    .catch(function (error) {
        alert("RUHRO!");
        console.log(error.message)
    })
    return fetch
}

submitData('Thomas', 'tom@gmail.com')