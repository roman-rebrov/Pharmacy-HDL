import {
     ADD_REMOVE_PRODUCT_IN_CART,
     SELECTED_FOR_VIEWING,
     GET_PRODUCTS,
     Action,
     SET_TOPIC_LIST,
} from '../Actions/Actions'
import productsBlockInit from '../initialState';
import { productsBlockType} from '../../Types/types'
 
 
 const ProductListReducer = (productsBlock : productsBlockType = productsBlockInit,  action : Action ) : productsBlockType => {
    
    switch(action.type) {
        case GET_PRODUCTS:            
            return ({
                ...productsBlock,
                Products: {
                    ...action.payload
                }
            });
            case SET_TOPIC_LIST:
                return({
                ...productsBlock,
                topics: [...action.payload]
                })
    }
    return productsBlock
};

export default ProductListReducer;