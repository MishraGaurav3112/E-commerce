let data = document.querySelector("#displayData")

console.log(data);

//USING PROMISE METHOD
// logic to fetch data
// fetch("https://dummyjson.com/products")
// .then((e)=>{
//     //it return json file to json object
//     return e.json()
// })
// .then((e)=>{
//    // console.log(e.products)
//     // object distructuring(pack the whole array in object)
//     //product =  key
//     // e = object
//     let {products} = e
//    // console.log(products)
//    DisplayAllProducts(products);
//     //logic to write
// })
// .catch((eror)=>{
//     console.error(eror)
// })

//! USING ASINC AWAIT

let allProduct ="";

async function FetchData(url) {
    let response = await fetch(url)
    try{
        let data = await response.json();

        DisplayAllProducts(data.products)
          allProduct = data.products
        let jsonData = JSON.stringify(allProduct)

        localStorage.setItem("allproduct", jsonData )
    }
    catch(err){
        console.error(err)
    }
} 




FetchData("https://dummyjson.com/products");


function DisplayAllProducts(p){
    console.log(p);
    let input ="";

    p.map((val) =>{
     //   console.log(val);
        let productId = val.id;
        let title = val.title;
        let category = val.category;
        let productImg = val.images[0];
        let rating = val.rating

        input = input+`

         <div class="img-cont">
         
         <a href ="productView.html" target="_blank">  <img src=${productImg} alt=${title} class="image" onclick="getId(${productId})" onclick="getId(${productId})"></a>
         <h2> ${title}</h2>
         <p> ${category}</p>
         <p> ${rating}</p>
         <a href ="productView.html" target="_blank"> <button class= "bg-[red]" id="btn" onclick="getId(${productId})">View More</button></a>
         
        
         </div>
    
        `
    })
    // console.log(input);

     data.innerHTML = input;

}


// let searchCnt = document.getElementById("searchResult");

// if (searchCnt) {  // Ensure the element exists
//     searchCnt.addEventListener("input", (e) => {
//         let unValue = e.target.value.toLowerCase();

//         if (Array.isArray(all_products)) {  // Ensure all_products is an array
//             let filterData = all_products.filter((val) => {
//                 return val.title.toLowerCase().includes(unValue) || val.category.toLowerCase().includes(unValue);
//             });

//             console.log(filterData);
//             if (typeof DisplayAllProducts === "function") {  // Ensure DisplayAllProducts exists
//                 DisplayAllProducts(filterData);
//             } else {
//                 console.error("DisplayAllProducts function is not defined");
//             }
//         } else {
//             console.error("all_products is not an array");
//         }
//     });
// } else {
//     console.error('Element with id "searchResult" not found');
// }


let searchCnt = document.getElementById("searchResult")
// console.log(searchResult)
searchCnt.addEventListener("input",(e) =>{
    let unValue = e.target.value.toLowerCase();
    let filterData = all_products.filter((val)=>{
        return val.title.toLowerCase().includes(unValue) || val.category.toLowerCase().includes(unValue)
    })

    console.log(filterData)
    DisplayAllProducts(filterData)
})

function getId(id){
    // console.log(id)
    localStorage.setItem("id",id)
}

