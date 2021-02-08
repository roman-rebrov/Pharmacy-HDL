import React from 'react'
import ProductList from './ProductList'
// import { State } from '../../Types/types'
import { connect } from 'react-redux'

const   ProdListContainer : React.FC<{}> = () : any => {
 
    
    const mapStateToProps = (store : any) : {} => {
        // console.log(store.State.dispatch);
        
        return {
            ...store.productsBlock,
            // added : store.addedToCart,
            added : [...store.productsBlock.addedToCart.addedId],
        }
    };
    
    const mapDispatchTpProps = (dispatch : any) : {} =>{
        return{
            dispatch
        }
    };

    const ProdoctListWrap = connect(mapStateToProps, mapDispatchTpProps)(ProductList);
    // export default ProdListContainrt
    return(<ProdoctListWrap/>);
}
export default ProdListContainer;