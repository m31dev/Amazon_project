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

export function removeItem(productId){
    const newCart = [];

    cart.forEach((cartItem)=>{
        if(cartItem.productId = productId){
            newCart.push(cartItem)
        }
    })

    cart = newCart;
}