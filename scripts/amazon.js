let cont = document.querySelector(".content")
const product = [
    {
        id:0,
        name:"Black and Gray Athletic Cotton Socks - 6 Pairs",
        image:"images/athletic-cotton-socks-6-pairs.jpg",
        rating:{
            stars:4.5,
            count: 87,
        },
        price: 1090,
    },
     {
        id:1,
        name:"Intermediate Size Basketball",
        image:"images/intermediate-composite-basketball.jpg",
        rating:{
            stars:4.0,
            count: 127,
        },
        price: 2095,
    },
     {
        id:2,
        name:"Adults Plain Cotton T-Shirt - 2 Pack",
        image:"images/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        rating:{
                stars:4.5,
                count: 56,
            },
        price: 799,
    },
     {
        id:3,
        name:"2 Slot Toaster - Black",
        image:"images/black-2-slot-toaster.jpg",
        rating:{
                stars:5,
                count: 2197,
            },
        price: 1899,
    },
     {
        id:4,
        name:"6 Piece White Dinner Plate Set",
        image:"images/6-piece-white-dinner-plate-set.jpg",
        rating:{
                stars:4.0,
                count: 37,
            },
        price: 2067,
    },
     {
        id:5,
        name:"6-Piece Nonstick, Carbon Steel Oven",
        image:"images/6-piece-non-stick-baking-set.webp",
        rating:{
                stars:4.5,
                count: 175,
            },
        price: 3499,
    },
      {
        id:6,
        name:"Plain Hooded Fleece Sweatshirt",
        image:"images/plain-hooded-fleece-sweatshirt-yellow.jpg",
        rating:{
                stars:4.5,
                count: 317,
            },
        price: 2400,
    },
      {
        id:7,
        name:"Luxury Towel Set - Graphite Gray",
        image:"images/luxury-tower-set-6-piece.jpg",
        rating:{
                stars:4.5,
                count: 144
            },
        price: 3599,
    },
    {
        id:8,
        name:"Liquid Laundry Detergent, 110 Loads",
        image:"images/liquid-laundry-detergent-plain.jpg",
        rating:{
                stars:4.5,
                count: 305,
            },
        price: 2899,
    },
    {
        id:9,
        name:"Waterproof Knit Athletic Sneakers",
        image:"images/knit-athletic-sneakers-gray.jpg",
        rating:{
                stars:4.0,
                count: 89,
            },
        price: 3390,
    },
     {
        id:10,
        name:"Women's Chiffon Beachwear Cover Up",
        image:"images/women-chiffon-beachwear-coverup-black.jpg",
         rating:{
                stars:4.5,
                count: 235,
            },
        price: 3070,
    },
    {
        id:10,
        name:"Round Sunglasses",
        image:"images/round-sunglasses-black.jpg",
        rating:{
                stars:4.5,
                count: 30,
            },
        price: 15.60,
    },


]



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
            <p class="prod-price">$${price}</p>
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
           <button class="add-but">Add to Cart</button>
        </div>`
    })
    cont.innerHTML = empt;

    let buts = document.querySelectorAll(".add-but")
    buts.forEach((element,index)=>{
        element.addEventListener("click",()=>addToCart(index))
    })

    
}


function addToCart(index){
    let quant = document.querySelector(".cart-count")
    let div = document.querySelectorAll(".prod")
    let adivs = div[index].querySelector(".alert")
    let selected = div[index].querySelector(".select-quant")
    
    selected = Number(selected.value)
    let quantity = Number(quant.textContent)
    quantity += selected;
    quant.textContent = quantity;
    console.log(quantity)
    
    adivs.innerHTML = `
      <img src="images/checkmark.png" alt="success" width="18" />
    <span style="color:green">Added</span>
   `
   setTimeout(()=> adivs.innerHTML = "",2000)
}