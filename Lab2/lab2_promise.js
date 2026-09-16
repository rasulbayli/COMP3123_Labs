/*
 purpose: 
create a new promise - API developer  side 
Fetch that promise - web developer side
-async definition of the function that contains the fetch 
-await in front of the fetch

 */

  //------------API developer side-----------------
 async function fetch_wather(){
 const promise_wather = new Promise((resolve, reject) => {
    let isPaidMember = true
    if(isPaidMember){
        setTimeout(() => {
            const weatherJSON = {monday: "sunny", tuesday: "rainy"}
            let weatherJSONstr = JSON.stringify(weatherJSON)
             resolve(weatherJSONstr)
        }, 2000)
     } else {
        reject("You must be apaid member to access")
        }
    })
  
    let result = await promise_wather
    console.log(result)
}

fetch_wather()

let username = "bob"
console.log(username)
 //-------------Web developer side-----------------