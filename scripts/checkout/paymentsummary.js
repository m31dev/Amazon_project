import { cart } from "../../data/cart.js"
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { getProduct } from "../../data/product.js"
import { formatCurrency } from "../../utils/money.js";

let quantity = 0;
cart.forEach((item)=>{
    quantity += item.quantity;
})

export function renderPaymentSummary(){
    let total = 0;
    let shippingPrice = 0;
    cart.forEach((item)=>{
        const product = getProduct(item.productId)
        total += product.price * item.quantity;

        const deliveryOption = getDeliveryOption(item.deliveryOptionId)
        shippingPrice += deliveryOption.price
       
    })
   const totalbeforeTax = total + shippingPrice;
   const tax = totalbeforeTax * 0.1;
   const totalPrice = totalbeforeTax + tax;
   
   const paymentsummaryHtml = `
   
            <h3>
                Order Summary
            </h3>
            <div>
                <p>Items(${quantity}):</p>
                <p>$${formatCurrency(total)}</p>
            </div>
             <div >
                <p>Shipping & handling:</p>
                <p>$${formatCurrency(shippingPrice)}</p>
            </div>
            <div >
                <p>Total before tax:</p>
                <p>$${formatCurrency(totalbeforeTax)}</p>
            </div>
            <div >
                <p>Estimated tax(10%):</p>
                <p>$${formatCurrency(tax)}</p>
            </div>
            <hr>
            <div class="info">
                <p style="color:rgb(191, 20, 20)">Order total:</p>
                <p style="color:rgb(191, 20, 20)">$${formatCurrency(totalPrice)}</p>
            </div>
            <button class="place-order">Place your order</button>
        </div>
   
   `

   document.querySelector(".order-summary").innerHTML = paymentsummaryHtml;
    
}