import { cart } from "../data/cart.js";
let itemContainer = document.querySelector(".items")

renderItems()
function renderItems(){
    let empt = ""
    cart.forEach((item)=>{
        let {productId, quantity} = item;
        empt+=`
         <div class="itm">
            <p class="d-date">Delivery date: Tuesday, June 21</p>
            <div class="content">
                <img src="images/adults-plain-cotton-tshirt-2-pack-teal.jpg">
                <div class="details">
                    <p class="name">
                        Adults Plain Cotton T-Shirt - 2 Pack
                    </p>
                    <p class="price">$7.99</p>
                    <p class="quantity"> Quantity:${quantity} <span class="bt">Update</span> <span class="bt">Delete</span></p>
                </div>

                <div class="del-optn">
                    <p class="del-title">Choose a delivery option</p>
                    <div class="optn">
                        <input type="radio" name="date">
                        <div class="date">
                            <p class="dt">Monday December 1</p>
                            <p class="sc">FREE Shipping</p>
                        </div>
                    </div>

                    <div class="optn">
                        <input type="radio" name="date">
                        <div class="date">
                            <p class="dt">Monday December 1</p>
                            <p class="sc">$4.99 - Shipping</p>
                        </div>
                    </div>

                    <div class="optn">
                        <input type="radio" name="date">
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
}

