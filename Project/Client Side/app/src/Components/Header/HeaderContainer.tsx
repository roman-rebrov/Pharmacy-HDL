import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { Action,  ADD_REMOVE_PRODUCT_IN_CART } from '../../Redux/Actions/Actions'
import { addedType, State } from '../../Types/types'

type addedT = {
    added : string[],
    addedToCart : addedType[]
};

interface IMapDispatch {
    addRemove: ( id : string ) => void;
    remove: ( id : string ) => void;
    totalCost: (cost : number) => void;
}

const HeaderContainer : React.FC = () => {
    const removeActionCreator = (id : string) => ({
        type: ADD_REMOVE_PRODUCT_IN_CART, 
        payload: id
    });
    const addRemoveActionCreator = (id : string) => ({
        type: ADD_REMOVE_PRODUCT_IN_CART, 
        payload: {id}
    });
 
    const mapStateToProps = ( state : State ) : addedT => {
        return {
            added : [...state.selectedObjects.addedToCart.addedId],
            addedToCart : [...state.selectedObjects.addedToCart.added],
        }
    };
    const mapDispatchToProps = ( dispatch : (action : Action) => void ) : IMapDispatch => { 
        return { 
            remove : (id : string) => { 
                dispatch(removeActionCreator(id))
            },
            addRemove : (id : string) => {
                dispatch(addRemoveActionCreator(id))
            },
            totalCost : (cost : number) => {
                
            }
        }
    };

    const HeaderWrap = connect(mapStateToProps, mapDispatchToProps)(Header);

    return ( <HeaderWrap/> );
}

export default HeaderContainer ;
