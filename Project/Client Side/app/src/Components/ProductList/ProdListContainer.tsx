import React from 'react'
import ProductList from './ProductList'
import { connect } from 'react-redux'
// import { State } from '../../Types/types'

const   ProdListContainer : React.FC = ( )  => {
 
    const mapStateToProps = (store : any) : {} => {
        
        return {
            ...store.productsBlock,

            added : [...store.productsBlock.addedToCart.addedId],
        }
    };
    
    const mapDispatchTpProps = (dispatch : any) : {} =>{
        return{
            dispatch
        }
    };

    const ProdoctListWrap = connect(mapStateToProps, mapDispatchTpProps)(ProductList);

    return(<ProdoctListWrap/>);
}
export default ProdListContainer;