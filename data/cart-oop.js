function Cart(localStorageKey){
const cart = {
    cartItems: undefined,

    loadFromLocalStorage(){

     this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) ||
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
    },

saveToStorage(){
    localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems))
},

updateDelOption(productId,deliveryOptionId){
    let matchingItem;
    this.cartItems.forEach((item)=>{
        if(productId === item.productId){
            matchingItem = item;
        }
    })
    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage()
},

removeItem(prodId){
    const newCart = [];
    this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId !== prodId){
            newCart.push(cartItem)
        }
    })
    this.cartItems = newCart;
    this.saveToStorage()
}


};
return cart;

}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromLocalStorage()

console.log(cart);
console.log(businessCart)



