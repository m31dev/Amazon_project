let cont = document.querySelector(".content")
renderData()

function renderData(){
    let empt = ""
    product.forEach((element, index)=>{
        let {id,name,image,rating,reviews,price} = element;
        empt += `<div class="prod">
        <div class="img-cont">
            <img src="${image}" class="prod-img">
            </div>
            <div class="bot">
            <p class="prod-name">${name}</p>
            <div class="rr">
            <img src="images/rating-${rating.stars*10}.png" class="rating">
            <p class="reviews">${reviews}</p>
            </div>
            <p class="prod-price">$${(price/100).toFixed(2)}</p>
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
           <button class="add-but" data-product-name="${name}">Add to Cart</button>
        </div>`
    })
    cont.innerHTML = empt;

    let buts = document.querySelectorAll(".add-but")
    buts.forEach((element,index)=>{
        element.addEventListener("click",()=>addToCart(index,element))
    })

    
}


function addToCart(index,but){
    let quant = document.querySelector(".cart-count")
    let div = document.querySelectorAll(".prod")
    let adivs = div[index].querySelector(".alert")
    let selected = div[index].querySelector(".select-quant")
    selected = Number(selected.value)
    let quantity = Number(quant.textContent)
    quantity += selected;
    quant.textContent = quantity;
    const productName = but.dataset.productName;

    let matchingItem;
    cart.forEach((item)=>{
        if(productName === item.productName){
            matchingItem = item;
        }
    })

    if(matchingItem){
        matchingItem.quantity += selected;
    }
    else{
        cart.push({
            productName: productName,
            quantity:selected
        })
    }

    console.log(cart)
   
    
    adivs.innerHTML = `
      <img src="images/checkmark.png" alt="success" width="18" />
    <span style="color:green">Added</span>
   `
   setTimeout(()=> adivs.innerHTML = "",2000)
}