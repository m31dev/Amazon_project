import { cart, removeItem} from "../data/cart.js";
import {product} from "../data/product.js";
import { formatCurrency } from "../utils/money.js";

let itemContainer = document.querySelector(".items")
let tot = document.querySelector("#total");

const today = dayjs()
const seven = today.add(7,"days").format('dddd MMMM D');
const three = today.add(3,"days").format('dddd MMMM D');
const four = today.add(4,'days').format('dddd MMMM D');

let quantity = 0;
cart.forEach((item)=>{
    quantity += item.quantity;
    tot.textContent = `${quantity} items`
})

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

      
        empt+=`
         <div class="itm  item-${matchingProduct.id}">
            <p class="d-date">Delivery date:</p>
            <div class="content">
                <img src="${matchingProduct.image}">
                <div class="details">
                    <p class="name">
                       ${matchingProduct.name}
                    </p>
                    <p class="price">$${formatCurrency(matchingProduct.price)}</p>
                    <p class="quantity"> Quantity:${item.quantity} <span class="bt">Update</span> <span class="bt" id="delete" data-product-id ="${matchingProduct.id}">Delete</span></p>
                </div>

                <div class="del-optn">
                    <p class="del-title">Choose a delivery option</p>
                    <div class="optn">
                        <input type="radio" name="${item.productId}" value="${seven}" checked>
                        <div class="date">
                            <p class="dt">Monday December 1</p>
                            <p class="sc">FREE Shipping</p>
                        </div>
                    </div>

                    <div class="optn">
                        <input type="radio" name="${item.productId}" value="${three}">
                        <div class="date">
                            <p class="dt">Monday December 1</p>
                            <p class="sc">$4.99 - Shipping</p>
                        </div>
                    </div>

                    <div class="optn">
                        <input type="radio" name="${item.productId}" value="${four}">
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
 
    
    const delBut = document.querySelectorAll("#delete")
    delBut.forEach((link)=>{
        link.addEventListener("click",()=>{
            const productId = Number(link.dataset.productId);
            removeItem(productId)

           document.querySelector(`.item-${productId}`).remove()
            console.log(cart)
        })
    })


    
}

