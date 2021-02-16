import Products from "../Redux/Products";

import { Action,  ADD_REMOVE_PRODUCT_IN_CART } from "../Redux/Actions/Actions";
import { addedToCartType } from "../Types/types";


// const addedToCartInit = {
//     addedId : [],
//     added : []
// }

// const addedToCartReducer = (addedToCart  :  addedToCartType = addedToCartInit, action : Action ) : addedToCartType => {
    
//     switch (action.type) {
//         case ADD_REMOVE_PRODUCT_IN_CART:
            
//             console.log(action);
//             const { payload } = action;
//             let { added, addedId } = addedToCart;

//             console.log(Products);
            
//             for (let i : number = 0; i < addedToCart.added.length; i++){
//                 if(addedToCart.added[i].id === payload) { 
//                     added.splice(i , 1) ;
//                     addedId.splice(i , 1) ;
//                     return({
//                         addedId,
//                         added,
//                     })
//                 }
//             }
            
//             return({
//                 addedId,
//                 added,
//             })
//         }
//         return(addedToCart)
//     };
    
    // export default addedToCartReducer;
