import React from 'react'
import { connect } from 'react-redux'
import { Action,  ADD_REMOVE_PRODUCT_IN_CART, REMOVE_SELECTED_FOR_VIEWING } from '../../Redux/Actions/Actions';
import { asyncGetProductForViewActionCreator } from '../../Redux/Actions/asyncActions';
import { addedType, ProdObj, State } from '../../Types/types';
// import addedToCart from '../../Redux/addedReducer';
import PayComponent from './PayComponent'

interface IMapStateToProps {
    addedToCart: addedType[];
}


interface IMapDispatchToProps {
    remove : (id : string) => void;
}

const PayComponentContainer : React.FC = ()  => {

    const removeActionCreator = (id : string) => ({
        type: ADD_REMOVE_PRODUCT_IN_CART, 
        payload: {id}
    });
    const viewerActionCreator = (obj : {}) => ({
            type : "SELECTED_FOR_VIEWING",
            payload : obj,
    });

    const mapStateToProps = (state : State) : IMapStateToProps => { 
        let total : number = 0;
        state.selectedObjects.addedToCart.added.forEach((element : addedType) : void => {  // !!!! Attant element.cost.new??
            total += +element.cost;
        });
        return({
            addedToCart : [...state.selectedObjects.addedToCart.added],
 
        })
    };
    const mapDispatchToProps = (dispatch : (action : Action) => void) : IMapDispatchToProps => {
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