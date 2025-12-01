import { cart } from "../../data/cart.js"
import { getProduct } from "../../data/product.js"
import { formatCurrency } from "../../utils/money.js";

export function renderPaymentSummary(){
    let total = 0;
    cart.forEach((item)=>{
        const product = getProduct(item.productId)
        total += product.price * item.quantity;
       
    })
    total = formatCurrency(total)
    console.log(total)
    
}