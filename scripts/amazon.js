import { cart } from "../data/cart.js"
import {product} from "../data/product.js"
import { formatCurrency } from "../utils/money.js"

let cont = document.querySelector(".content")
renderData()

function renderData(){
    let empt = ""
    product.forEach((element, index)=>{
        let {id,name,image,rating,count,price} = element;
        empt += `<div class="prod">
        <div class="img-cont">
            <img src="${image}" class="prod-img">
            </div>
            <div class="bot">
            <p class="prod-name">${name}</p>
            <div class="rr">
            <img src="images/rating-${rating.stars*10}.png" class="rating">
            <p class="reviews">${rating.count}</p>
            </div>
            <p class="prod-price">$${formatCurrency(price)}</p>
           <select  class="select-quant">
                <option selected value="1">1</option>
                 <option value="2">2</option>
                 <option value="3" >3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
                 <option value="8">8</option>
           </select>
           </div>
           <div class="alert">
           
           </div>
           <button class="add-but" data-product-id="${id}">Add to Cart</button>
        </div>`
    })
    cont.innerHTML = empt;

    let buts = document.querySelectorAll(".add-but")
    buts.forEach((element,index)=>{
        element.addEventListener("click",()=>{
            addToCart(index,element)
            updateCart()
        }
    
    )
    })

    
}


function addToCart(index,but){
    let div = document.querySelectorAll(".prod")
    let adivs = div[index].querySelector(".alert")
    let selected = Number(div[index].querySelector(".select-quant").value)
    const productId = but.dataset.productId;
    

    let matchingItem;
    cart.forEach((item)=>{
        if(productId === item.productId){
            matchingItem = item;
        }
    })

    if(matchingItem){
        matchingItem.quantity += selected;
    }
    else{
        cart.push({
            productId: productId,
            quantity:selected
        })
    }
    
    adivs.innerHTML = `
      <img src="images/checkmark.png" alt="success" width="18" />
    <span style="color:green">Added</span>
   `
   setTimeout(()=> adivs.innerHTML = "",2000)
}

function updateCart(){
    let quant = document.querySelector(".cart-count")
    let cartQuantity = 0;
        cart.forEach((item)=>{
            cartQuantity += item.quantity;
        })
        quant.innerHTML = cartQuantity
        console.log(cart)
}
        