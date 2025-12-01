import { cart } from "../../data/cart.js"
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { getProduct } from "../../data/product.js"
import { formatCurrency } from "../../utils/money.js";

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
   console.log(totalPrice)
    
}