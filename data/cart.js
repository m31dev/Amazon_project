export let cart = [
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
}
