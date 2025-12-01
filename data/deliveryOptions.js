export const deliveryOptions = [
    {
        id:'0',
        date:7,
        price:0
    },
    {
        id:'1',
        date:3,
        price:499
    },
    {
        id:'2',
        date:1,
        price:999
    }
]

export function getDeliveryOption(deliveryOptionId){
       let deliveryOption;
       deliveryOptions.forEach((option)=>{
        if(option.id === deliveryOptionId){
            deliveryOption = option;
        }
       })
       return deliveryOption || deliveryOptions[0]
    }