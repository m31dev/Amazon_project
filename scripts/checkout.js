import { cart, removeItem} from "../data/cart.js";
import {product} from "../data/product.js";
import { formatCurrency } from "../utils/money.js";
let itemContainer = document.querySelector(".items")
let tot = document.querySelector("#total");
import {deliveryOptions} from '../data/deliveryOptions.js'

let quantity = 0;
cart.forEach((item)=>{
    quantity += item.quantity;
    tot.textContent = `${quantity} items`
})

function calcDelDays(delption){
    const today = dayjs()
    const deliveryDate = today.add(delption.date, 'days').format('dddd MMMM D')
    return deliveryDate;
}

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

        let deliveryOption;
        deliveryOptions.forEach((del)=>{
            if(del.id === item.deliveryOptionId){
                deliveryOption = del;
            }
        })
        console.log(deliveryOption)

        empt+=`
         <div class="itm  item-${matchingProduct.id}">
            <p class="d-date">Delivery date: ${calcDelDays(deliveryOption)}</p>
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
                    ${delOption(item,matchingProduct)}
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
        })
    })


    function delOption(item,matchingProduct){
        let html = '';
        deliveryOptions.forEach((deliveryOption)=>{
              const isChecked = deliveryOption.id == item.deliveryOptionId
              
            
            html += `
                 <div class="optn">
                        <input type="radio" name="${matchingProduct.id}" ${isChecked?`checked`:``}>
                        <div class="date">
                            <p class="dt">${calcDelDays(deliveryOption)}</p>
                            <p class="sc">${deliveryOption.price === 0?`FREE Shipping`:`$${deliveryOption.price} - Shipping`}</p>
                        </div>
                    </div>
            `
        })
        return html;
    }
    
}

