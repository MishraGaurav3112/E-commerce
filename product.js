// Retrieve products and unique ID from localStorage
let allproduct = JSON.parse(localStorage.getItem("allproduct")) || [];
let uniqueId = JSON.parse(localStorage.getItem("id"));

console.log("All Products:", allproduct);
console.log("Unique ID:", uniqueId);

// Ensure `allproduct` is a valid array
if (!Array.isArray(allproduct) || allproduct.length === 0) {
  console.warn("No products found! Setting default products...");

  // Set default products if none exist
  allproduct = [
    {
      id: 1,
      title: "Gaming Laptop",
      images: ["https://via.placeholder.com/150"],
      description: "A high-performance laptop for gaming.",
      category: "Electronics",
      price: 1500,
      discountPercentage: 10,
      rating: 4.5,
      stock: 5
    }
  ];

  // Save default products to localStorage
  localStorage.setItem("allproduct", JSON.stringify(allproduct));
}

// Find the unique product based on ID
let uniqueProduct = allproduct.find((val) => val.id == uniqueId);

if (!uniqueProduct) {
  console.error("Product not found! Check if the correct ID is set in localStorage.");
} else {
  console.log("Selected Product:", uniqueProduct);

  let productCont = document.getElementById("userid");

  // Extract product details
  let imageUrl = uniqueProduct.images[0] || "https://via.placeholder.com/150";
  let Title = uniqueProduct.title || "Unknown Product";
  let Description = uniqueProduct.description || "No description available.";
  let Category = uniqueProduct.category || "Uncategorized";
  let Price = uniqueProduct.price || "N/A";
  let DiscountPercentage = uniqueProduct.discountPercentage || 0;
  let Rating = uniqueProduct.rating || "No rating";
  let Stock = uniqueProduct.stock || "Out of stock";

  // Inject HTML into `productCont`
  productCont.innerHTML = `
    <div class="bg-gray-100 dark:bg-gray-800 py-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
                <div class="md:flex-1 px-4">
                    <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <img class="w-full h-full object-cover" src="${imageUrl}" alt="Product Image">
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
  `;

// Get the "Add to Cart" button element
const cartBtn = document.getElementById("cart-btn");

// Check if the button exists
if (!cartBtn) {
  console.error("Cart button not found!"); // Log an error if the button is missing
  return; // Stop execution
}

// Add click event listener to the button
cartBtn.addEventListener("click", () => {
  // Retrieve existing cart items from local storage (or initialize as an empty array)
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the product is already in the cart
  const isPresent = cart.some((item) => item.id === uniqueProduct.id);

  if (isPresent) {
    alert("Already in the cart"); // Notify user if the product is already added
    return;
  }

  // Add new product to the cart
  cart.push(uniqueProduct);
  
  // Update local storage with the new cart data
  localStorage.setItem("cart", JSON.stringify(cart));

  // Notify user that the product is added
  alert("Added to the cart");

  // Redirect to the cart page
  window.location.href = "/cart.html";
});

