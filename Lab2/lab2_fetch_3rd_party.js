/*
purpose: 
fetch from a third party API and prind out thr results 
*/

fetch("https://official-joke-api.appspot.com/random_joke")
.then((response) => {
    return response.json()
})
.then((dataJSON) => {
    console.log(dataJSON)
})
.catch((error) => {
    console.log(error)
})