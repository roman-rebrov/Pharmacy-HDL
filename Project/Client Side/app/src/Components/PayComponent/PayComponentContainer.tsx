import React from 'react'
import { connect } from 'react-redux'
import { Action,  ADD_REMOVE_PRODUCT_IN_CART, REMOVE_SELECTED_FOR_VIEWING } from '../../Redux/Actions/Actions';
import { asyncGetProductForViewActionCreator } from '../../Redux/Actions/asyncActions';
import { ProdObj, State } from '../../Types/types';
// import addedToCart from '../../Redux/addedReducer';
import PayComponent from './PayComponent'

const PayComponentContainer : React.FC = ()  => {

    const removeActionCreator = (id : string) => ({
        type: ADD_REMOVE_PRODUCT_IN_CART, 
        payload: {id}
    });
    const viewerActionCreator = (obj : any) => ({
            type : "SELECTED_FOR_VIEWING",
            payload : obj,
    });
    const mapStateToProps = (state : State) => { 
        let total : number = 0;
        state.selectedObjects.addedToCart.added.forEach((element : any) : any => { 
            total += +element.cost;
        });
        return({
            addedToCart : [...state.selectedObjects.addedToCart.added],
 
        })
    };
    const mapDispatchToProps = (dispatch : (action : Action) => void) => {
        return({
            remove : (id : string) => { 
                dispatch(removeActionCreator(id));
            },
        })
    } 

    const PayComponentWrap = connect(mapStateToProps, mapDispatchToProps)(PayComponent);
    
    return(<PayComponentWrap />)
};

export default PayComponentContainer;