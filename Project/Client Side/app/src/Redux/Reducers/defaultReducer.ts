import {
     ADD_REMOVE_PRODUCT_IN_CART,
     SELECTED_FOR_VIEWING,
     GET_PRODUCTS,
     Action,
} from '../Actions/Actions'
import productsBlockInit from '../initialState';
import {ProdObj, ProductList, productsBlockType} from '../../Types/types'
 
 
 const ProductListReducer = (productsBlock : productsBlockType = productsBlockInit,  action : Action | {type:  string, payload : {list : {}[]}}) : productsBlockType => {
    
    switch(action.type) {
        case GET_PRODUCTS:            
            return ({
                ...productsBlock,
                Products: {
                    ...action.payload
                }
            });

    }
    return productsBlock
};

export default ProductListReducer;