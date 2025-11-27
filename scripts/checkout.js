import { cart, removeItem} from "../data/cart.js";
import {product} from "../data/product.js";
import { formatCurrency } from "../utils/money.js";
import { deliveryOption } from "../data/deliveryOptions.js";
import dayjs from "../utils/date.js";

let itemContainer = document.querySelector(".items")
let tot = document.querySelector("#total");


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
                    ${delOptionHTML(matchingProduct)}
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

    function delOptionHTML(matchingProduct){
        let html;
        const today = dayjs()
        const deliveryDate = today.add(deliveryOption.time,'days').format('dddd MMMM D')

        deliveryOption.forEach((option)=>{
           html += ` 
            <div class="optn">
                        <input type="radio" name="${matchingProduct.id}">
                        <div class="date">
                            <p class="dt">${deliveryDate}</p>
                            <p class="sc">${deliveryOption.price === 0? `FREE Shipping`:formatCurrency(deliveryOption.price)}</p>
                        </div>
                    </div>

            `
        })
        console.log(deliveryDate)
        return html
        
    }

    
}

