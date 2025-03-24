//step 1 fetch data from API using fetch ('url') method
let displayData = document.getElementById("displayData");

fetch('https://dummyjson.com/users').then((e)=>{return e.json()}).then((data)=>{console.log(data.users)
    let user_details=data.users

    // logic to cover to json
    let jason_data = JSON.stringify(user_details);

    //store in local storage
    localStorage.setItem("allUser",jason_data);

    console.log(typeof jason_data)

    let input=""
    console.log(typeof user_details.length);
    user_details.map((val)=>{
       // console.log(val)
    let uid = val.id
    let fname= val.firstName
    let lname= val.lastName
    let url =val.image
    input=input+`
    <div style="border:2px solid black" class="card">
    <img src=${url} />
    <p>${fname} ${lname}</p>
    <a href="user.html" target="_blank> 
       <button onclick="setId(${uid})">View More<button>
    </a>
    </div>
    `
    
})
console.log(input)
displayData.innerHTML=input
//logic

}).catch((err)=>{console.error})

function setId(id){
    console.log(id)
    localStorage.setItem("userId", id)
}
//data is a variable we can pass anything instead of data