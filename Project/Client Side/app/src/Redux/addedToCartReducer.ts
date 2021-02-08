// import InitialState from './initialState';/
import Products from "./Products";

import { ADD_REMOVE_PRODUCT_IN_CART } from "./Actions";


const addedToCartInit = {
    addedId : [],
    added : []
}

const addedToCartReducer = (addedToCart  : any = addedToCartInit, action : any ) : any => {
    console.log(Products);
    // console.log(InitialState.Products.list);
    // console.log(action);
    
    switch (action.type) {
        case ADD_REMOVE_PRODUCT_IN_CART:
            
            console.log(action);
            const { payload } = action;
            let { added, addedId } = addedToCart;
            // console.log(added);

            console.log(Products);
            
            for (let i : number = 0; i < addedToCart.added.length; i++){
                if(addedToCart.added[i].id === payload) { 
                    added.splice(i , 1) ;
                    addedId.splice(i , 1) ;
                    // console.log(addedToCart);
                    return({
                        addedId,
                        added,
                    })
                }
            }
            // const { list } = InitialState.Products;
            
            // for (let i : number = 0; i < list.length ; i++) {
            //     if (list[i].id === payload){
            //         addedId.push(list[i].id);
            //         added.push({
            //             id : list[i].id,
            //             name : list[i].name,
            //             cost : list[i].cost.new
            //         });
            //     }
            // }
            // console.log(addedToCart);
            
            return({
                addedId,
                added,
            })
        }
    return(addedToCart)
};

export default addedToCartReducer;