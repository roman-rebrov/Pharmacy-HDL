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
            case ADD_REMOVE_PRODUCT_IN_CART:
            
                const { payload } = action;
                let { added, addedId } : any = productsBlock.addedToCart;
                
                
                for (let i : number = 0; i  <  productsBlock. addedToCart.added.length; i++){
                    if(added[i].id === payload) { 
                        added.splice(i , 1) ;
                        addedId.splice(i , 1) ;
                        return({
                            ...productsBlock,
                            addedToCart: {
                                addedId: [...addedId],
                                added: [...added],
                                }
                        })
                    }
                }
                const { list } : any  = productsBlock.Products;
                
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
                
                return({
                    ...productsBlock,
                        addedToCart: {
                            addedId: [...addedId],
                            added: [...added],
                        }
                });
                case  SELECTED_FOR_VIEWING :
                    let obj : {} = {};
                    productsBlock.Products.list.forEach( ( item : any, i : number ) => {
                        if( item.id === action.payload ){
                            obj = item
                        }
                    });
                    return({
                        ...productsBlock,
                        viewPage: { ...obj }
                    });

    }
    return productsBlock
};

export default ProductListReducer;