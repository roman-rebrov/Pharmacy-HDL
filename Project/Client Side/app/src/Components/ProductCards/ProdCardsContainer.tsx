import React from 'react'
import { connect } from 'react-redux'
import ProductCard from './ProductCard'
import { ActionType, ProdObj, State } from '../../Types/types'
import {
    ADD_REMOVE_PRODUCT_IN_CART,
    REMOVE_SELECTED_FOR_VIEWING,  // selectForViewingCreator,
} from '../../Redux/Actions/Actions'

import { withRouter } from 'react-router'
import { asyncGetProductForViewActionCreator } from '../../Redux/Actions/asyncActions'
// import { render } from '@testing-library/react'

interface IMapStateToProps {
    added : string[];
    productObject : ProdObj;
}
interface IMapDispatchToProps {
    addedProductFunction : (obj : ProdObj) => void;
}

const ProdCardsContainer : React.FC<{ productObject : ProdObj }> = ( {productObject  }   ) => {
    const Add_Remove_Action_Creater = (type : string, payload : {}) : ActionType =>  ({
        type ,
        payload
    })

    const mapStateToProps = (state : State) : IMapStateToProps => ({
            productObject,
            added : [...state.selectedObjects.addedToCart.addedId],
    });
    const mapDispatchToProps = (dispatch : (action: {type : string, payload : {}}) => void) : IMapDispatchToProps => {
        return{
            addedProductFunction : (obj : ProdObj) : void => {
                const action : ActionType = Add_Remove_Action_Creater(ADD_REMOVE_PRODUCT_IN_CART, obj);
                dispatch(action)
            }
        }
    };
    const ProductCardWrap = connect(mapStateToProps,mapDispatchToProps)(ProductCard);
    const ProductCardWrapWithRouter = withRouter(ProductCardWrap);
    return(<ProductCardWrapWithRouter/>);
};

export default ProdCardsContainer;
