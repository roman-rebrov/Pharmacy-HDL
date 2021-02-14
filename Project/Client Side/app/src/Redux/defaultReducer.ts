import { State } from '../Types/types';
import {
     ADD_REMOVE_PRODUCT_IN_CART,
     SELECTED_FOR_VIEWING,
     GET_PRODUCTS,
} from './Actions'
import InitialState from './initialState';
 
 
 const defaultReducer = (state : State = InitialState, action : any) : State => {

    
    switch(action.type) {
        case GET_PRODUCTS:            
            return ({
                ...state,
                Products: {
                    ...action.payload
                }
            });
            case ADD_REMOVE_PRODUCT_IN_CART:
            
                // console.log(action);
                const { payload } = action;
                let { added, addedId } : any = state.addedToCart;
                
                // console.log(Products);
                
                for (let i : number = 0; i  <  state. addedToCart.added.length; i++){
                    if(added[i].id === payload) { 
                        added.splice(i , 1) ;
                        addedId.splice(i , 1) ;
                        // console.log(addedToCart);
                        return({
                            ...state,
                            addedToCart: {
                                addedId: [...addedId],
                                added: [...added],
                                }
                        })
                    }
                }
                const { list } : any = state.Products;
                
                for (let i : number = 0; i < list.length ; i++) {
                    if (list[i].id === payload){
                        addedId.push(list[i].id);
                        added.push({
                            id : list[i].id,
                            name : list[i].name,
                            cost : list[i].cost.new
                        });
                    }
                }
                // console.log(addedToCart);
                
                return({
                    ...state,
                        addedToCart: {
                            addedId: [...addedId],
                            added: [...added],
                        }
                });
                case  SELECTED_FOR_VIEWING :
                    let obj : {} = {};
                    state.Products.list.forEach( ( item : any, i : number ) => {
                        // console.log(action.payload);
                        if( item.id === action.payload ){
                            obj = item
                        }
                    });
                    return({
                        ...state,
                        viewPage: { ...obj }
                    });

    }
    return state
};

export default defaultReducer;