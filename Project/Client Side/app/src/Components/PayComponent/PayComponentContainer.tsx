import React from 'react'
import { connect } from 'react-redux'
import { Action,  ADD_REMOVE_PRODUCT_IN_CART } from '../../Redux/Actions/Actions';
import { ProdObj, State } from '../../Types/types';
// import addedToCart from '../../Redux/addedReducer';
import PayComponent from './PayComponent'

const PayComponentContainer : React.FC = ()  => {

    const removeActionCreator = (id : string) => ({
        type: ADD_REMOVE_PRODUCT_IN_CART, 
        payload: id
    });
    const viewerActionCreator = (id : string) => ({
            type : "SELECTED_FOR_VIEWING",
            payload : id,
    });
    const mapStateToProps = (state : State) => { 
        let total : number = 0;
        state.productsBlock.addedToCart.added.forEach((element : any) : any => { 
            // console.log(element.cost);
            total += +element.cost;
        });
        return({
            addedToCart : [...state.productsBlock.addedToCart.added],
 
        })
    };
    const mapDispatchToProps = (dispatch : (action : Action) => void) => {
        return({
            viewer : (id : string) => {
                dispatch(viewerActionCreator(id))
            },
            remove : (id : string) => { 
                dispatch(removeActionCreator(id));
            },
        })
    } 

    const PayComponentWrap = connect(mapStateToProps, mapDispatchToProps)(PayComponent);
    
    return(<PayComponentWrap />)
};

export default PayComponentContainer;