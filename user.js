let allproduct = JSON.parse(localStorage.getItem("allproduct"));
let uniqueId = JSON.parse(localStorage.getItem("id"));

console.log(allproduct)

console.log(uniqueId)

let productCont = document.getElementById("userid");


let uniqueProduct = allproduct.find((val) => {
  return val.id == uniqueId
})

console.log(uniqueProduct)

let imageUrl = uniqueProduct.images[0];

let Title = uniqueProduct.title;

let Description = uniqueProduct.description;

let Category = uniqueProduct.category;

let Price = uniqueProduct.price;

let DiscountPercentage = uniqueProduct.discountPercentage;

let Rating = uniqueProduct.rating;

let Stock = uniqueProduct.stock;



productCont.innerHTML =
  `
<div class="bg-gray-100 dark:bg-gray-800 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" src=${imageUrl} alt="Product Image">
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                    <button id="cart-btn" class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                    </div>
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">${Title}</h2>
                <h4 class="text-xl font-bold text-red-800 dark:text-white mb-2">${Category}</h4>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">${Description}</p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span class="text-gray-600 dark:text-gray-300">$${Price}</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Discount:</span>
                        <span class="text-gray-600 dark:text-gray-300">${DiscountPercentage}%</span>
                    </div>
                     <div>
                        <span class="ml-5 font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span class="text-gray-600 dark:text-gray-300">${Stock}</span>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Rating:</span>
                    <span class="font-bold text-gray-700 dark:text-gray-300">${Rating}</span><i class="fa-solid fa-star"></i>
                   
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                    
                </div>
                <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>


`

// logic to add product i to cart

let addToCartElement = document.getElementById("cart-btn")

console.log(addToCartElement)




addToCartElement.addEventListener("click", () => {

  let cartProduct = JSON.parse(localStorage.getItem("cart")) || []
console.log(cartProduct)
  let isPresent = cartProduct.find((val) => {
    return val.id === uniqueProduct.id
  })
  console.log(isPresent)

  if (isPresent) {
    alert("Already in The cart")
  }
  else {

    cartProduct.push(uniqueProduct)

    localStorage.setItem("cart", JSON.stringify(cartProduct))

    alert("added to the cart")
   


  }
  
 window.location.href = "cart.html"


})

















// let userdataCont = document.getElementById("UserData")

// // get data from local storage

// let jsonData = localStorage.getItem("allUser")

// let userobject = JSON.parse(jsonData)

// console.log(userobject)

// //get id

// let jsonId = localStorage.getItem("userId")

// console.log(jsonId);

// let unique_obj_data = userobject.find((val)=>{

//     return val.id == jsonId;
// })

// console.log(unique_obj_data);


// userdataCont.innerHTML=`

// <div class="discont">
//      <p> ${unique_obj_data.id} </p>
//  </div>