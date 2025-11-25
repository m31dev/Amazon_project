import { cart } from "../data/cart.js";
import {product} from "../data/product.js";
import { formatCurrency } from "../utils/money.js";
let itemContainer = document.querySelector(".items")

renderItems()
function renderItems(){
    let empt = ""
    cart.forEach((item)=>{
        //Get the id of each item in the cart
       const itemId = item.productId;
        let matchingProduct;
       product.forEach((prod)=>{
        //check if id in cart matches id in object in prooduct array
            if(itemId === prod.id){
                matchingProduct = prod
            }
       })

       console.log(matchingProduct)
        empt+=`
         <div class="itm">
            <p class="d-date">Delivery date: Tuesday, June 21</p>
            <div class="content">
                <img src="${matchingProduct.image}">
                <div class="details">
                    <p class="name">
                       ${matchingProduct.name}
                    </p>
                    <p class="price">$${formatCurrency(matchingProduct.price)}</p>
                    <p class="quantity"> Quantity:${item.quantity} <span class="bt">Update</span> <span class="bt">Delete</span></p>
                </div>

                <div class="del-optn">
                    <p class="del-title">Choose a delivery option</p>
                    <div class="optn">
                        <input type="radio" name="date">
                        <div class="date">
                            <p class="dt">Monday December 1</p>
                            <p class="sc">FREE Shipping</p>
                        </div>
                    </div>

                    <div class="optn">
                        <input type="radio" name="date">
                        <div class="date">
                            <p class="dt">Monday December 1</p>
                            <p class="sc">$4.99 - Shipping</p>
                        </div>
                    </div>

                    <div class="optn">
                        <input type="radio" name="date">
                        <div class="date">
                            <p class="dt">Monday December 1</p>
                            <p class="sc">$9.99 - Shipping</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        
    })

    itemContainer.innerHTML = empt;
}

