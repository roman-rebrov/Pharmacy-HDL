import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  ADD_REMOVE_PRODUCT_IN_CART, REMOVE_SELECTED_FOR_VIEWING } from '../../Redux/Actions/Actions'
import { State } from '../../Types/types';
import ProductViewer from './ProductViewer'
import { withRouter } from 'react-router'
import { asyncGetProductForViewActionCreator } from '../../Redux/Actions/asyncActions';
import { useParams } from 'react-router-dom'



const ProductViewerContainer : React.FC = () => {
    const routeParams = useParams();
    const Add_Remove_Action_Creater = (type : string, payload : {}) : {} =>  ({
        type,
        payload
    })

    const mapStateToProps = (state : State) : any => {
        
        return({
        selectedObject :  {
            id:  state.selectedObjects.viewPage.id,
            name: state.selectedObjects.viewPage.name,
            photo: state.selectedObjects.viewPage.photo,
            cost: state.selectedObjects.viewPage.cost
        },   
        addedId :[ ...state.selectedObjects.addedToCart.addedId],
        process: state.process,
    })};
    
    const mapDispatchToProps  = (dispatch : (action : {}) => void ) :  any => {
        return({
            addedProductFunction : (obj : any) : void => {
                const action : {} = Add_Remove_Action_Creater(ADD_REMOVE_PRODUCT_IN_CART,  obj)
                dispatch(action)
            },
            selectForViewing : (id : string) => {
                dispatch({type : REMOVE_SELECTED_FOR_VIEWING, payload: ''})
                dispatch(asyncGetProductForViewActionCreator(id))
            }
        })

    };
    const ProductViewerWrap = connect(mapStateToProps, mapDispatchToProps)(ProductViewer);
    const ProductViewerWrapWithRouter = withRouter(ProductViewerWrap);

    return( <ProductViewerWrapWithRouter /> );
};

export default ProductViewerContainer;
