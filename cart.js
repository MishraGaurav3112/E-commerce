let  itemcont = document.getElementById("itemcont")

let itemPrice = document.getElementById("Toatalprice")

 let cartProduct =JSON.parse(localStorage.getItem("cart"))
 console.log(cartProduct)

 if(cartProduct.length > 0){
    //logic

    let input = ""
    let price =0

    cartProduct.map((val)=>{
        price += val.price
        input +=`
<div class="cart">

    <div>
    <img class="cartImg" src=${val.images[0]} alt=${val.title} >
    </div>
    <div class="productTitle">
     <p class="productTitle">Title: ${val.title}</p>
    </div>
   
           <span> X</span>
    
   
    </div>
    
        `
 
        
    })

   itemcont.innerHTML = input
    itemPrice.innerHTML =`${price.toFixed(2)}`
    console.log(price)
 }
  
 else{
    
    itemcont.innerHTML =`
     <h1>Cart is Empty</h1>

     <img src="./cart.jpeg" alt="">
    `
 }



 itemcont.addEventListener("click", function(e){
   if(e.target.tagName === "LI"){
       e.target.classList.toggle("checked");
       saveData();
   }
   else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
       saveData();

   }
},false);

function saveData(){
   localStorage.setItem("data", listContainer.innerHTML);
}
function showtask(){
   listContainer.innerHTML = localStorage.getItem("data");
}
showtask();