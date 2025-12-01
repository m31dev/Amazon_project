import { cart } from "../../data/cart.js"
import { getProduct } from "../../data/product.js"
import { formatCurrency } from "../../utils/money.js";

export function renderPaymentSummary(){
    let total = 0;
    cart.forEach((item)=>{
        const product = getProduct(item.productId)
        total += item.quantity * product.price
       
    })
    total = formatCurrency(total)
    console.log(total)
    
}