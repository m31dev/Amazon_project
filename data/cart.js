export let cart = JSON.parse(localStorage.getItem('cart')) ||
[
    {
        productId:'0',
        quantity:2,
        deliveryOptionId:'0'
    },
    
    {
        productId:'1',
        quantity:1,
        deliveryOptionId:'1'
    }
]

export function updateDelOption(productId,deliveryOptionId){
    let matchingItem;
    cart.forEach((item)=>{
        if(productId === item.productId){
            matchingItem = item;
        }
    })
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage()
}

export function removeItem(prodId){
    const newCart = [];
    cart.forEach((cartItem)=>{
        if(cartItem.productId !== prodId){
            newCart.push(cartItem)
        }
    })
    cart = newCart;
    saveToStorage()
}

export function updateQuantity(prodId){
    cart.forEach((cartItem)=>{
        
    })
}

export function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart))
}
