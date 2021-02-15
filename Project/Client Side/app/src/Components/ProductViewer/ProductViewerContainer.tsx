import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  ADD_REMOVE_PRODUCT_IN_CART } from '../../Redux/Actions/Actions'
import { State } from '../../Types/types';
import ProductViewer from './ProductViewer'
// type Action = {
//     type : string,
//     payload : string
// }
// type MDTP = {
//     addedProductFunction : (id : string) => void
// };

const ProductViewerContainer = () => {
    
    const Add_Remove_Action_Creater = (type : string, payload : string) : {} =>  ({
        type,
        payload
    })

    const mapStateToProps = (state : State) : any => {
        
        return({
        selectedObject : {...state.productsBlock.viewPage},
        addedId :[ ...state.productsBlock.addedToCart.addedId],
    })};
    
    const mapDispatchToProps  = (dispatch : (action : {}) => void ) :  any => {
        return({
            addedProductFunction : (id : string) : void => {
                const action : {} = Add_Remove_Action_Creater(ADD_REMOVE_PRODUCT_IN_CART,  id)
                dispatch(action)
            }
        })

    };
    const ProductViewerWrap = connect(mapStateToProps, mapDispatchToProps)(ProductViewer);
    return( <ProductViewerWrap /> );
};

export default ProductViewerContainer;
