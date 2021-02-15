import React from 'react'
import ProductList from './ProductList'
import { connect } from 'react-redux'
import { State } from '../../Types/types'
import { Action } from '../../Redux/Actions/Actions'

const   ProdListContainer : React.FC = ( )  => {
 
    const mapStateToProps = (state : State) : {} => {
        
        return {
            ...state.productsBlock,

            added : [...state.productsBlock.addedToCart.addedId],
        }
    };
    
    const mapDispatchTpProps = (dispatch : (action : Action) => void) : {} =>{
        return{
            dispatch
        }
    };

    const ProdoctListWrap = connect(mapStateToProps, mapDispatchTpProps)(ProductList);

    return(<ProdoctListWrap/>);
}
export default ProdListContainer;