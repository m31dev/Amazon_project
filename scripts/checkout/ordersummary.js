import { cart, removeItem,updateDelOption} from "../../data/cart.js";
import {product} from "../../data/product.js";
import { formatCurrency } from "../../utils/money.js";
let itemContainer = document.querySelector(".items")
let tot = document.querySelector("#total");
import {deliveryOptions, getDeliveryOption} from '../../data/deliveryOptions.js'
import { renderPaymentSummary } from "./paymentsummary.js";

let quantity = 0;
cart.forEach((item)=>{
    quantity += item.quantity;
    tot.textContent = `${quantity} items`
})



   


export function renderItems(){
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

       const deliveryOptionId = item.deliveryOptionId;
       const deliveryOption = getDeliveryOption(deliveryOptionId)

        let today = dayjs()
        let deliveryDate = today.add(deliveryOption.date, 'days').format('dddd MMMM D')

        empt+=`
         <div class="itm  item-${matchingProduct.id}">
            <p class="d-date">Delivery date: ${deliveryDate}</p>
            <div class="content">
                <img src="${matchingProduct.image}">
                <div class="details">
                    <p class="name">
                       ${matchingProduct.name}
                    </p>
                    <p class="price">$${formatCurrency(matchingProduct.price)}</p>
                    <p class="quantity"> Quantity:${item.quantity} <span class="bt" id="update" data-product-id ="${matchingProduct.id}">Update</span> <span class="bt" id="delete" data-product-id ="${matchingProduct.id}">Delete</span></p>
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
            const productId = link.dataset.productId;
            removeItem(productId)

           document.querySelector(`.item-${productId}`).remove()
           renderPaymentSummary()
        })
    })

    const updateQuant = document.querySelectorAll("#update");
    updateQuant.forEach((up)=>{
        up.addEventListener('click',()=>{
            const productId = link.dataset.productId;

            renderPaymentSummary()

        })
    })


    function delOption(item,matchingProduct){
        let html = '';
        deliveryOptions.forEach((deliveryOption)=>{
              const isChecked = deliveryOption.id == item.deliveryOptionId
        const today = dayjs()
        const deliveryDate = today.add(deliveryOption.date, 'days').format('dddd MMMM D')
            
            html += `
                 <div class="optn" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
                        <input type="radio" name="${matchingProduct.id}" ${isChecked?`checked`:``}>
                        <div class="date">
                            <p class="dt">${deliveryDate}</p>
                            <p class="sc">${deliveryOption.price === 0?`FREE Shipping`:`$${formatCurrency(deliveryOption.price)} - Shipping`}</p>
                        </div>
                    </div>
            `
        })
        return html;
    }

    document.querySelectorAll('.optn').forEach((element)=>{
        const {productId,deliveryOptionId} = element.dataset;
        element.addEventListener('click',()=>{
            updateDelOption(productId,deliveryOptionId)
            renderItems()
            renderPaymentSummary()
            console.log(cart)
        })
    })

   
}

 