export let cart = JSON.parse(localStorage.getItem('cart')) ||
[
    {
        productId:0,
        quantity:2
    },
    
    {
        productId:1,
        quantity:1
    }
]



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

export function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart))
}
