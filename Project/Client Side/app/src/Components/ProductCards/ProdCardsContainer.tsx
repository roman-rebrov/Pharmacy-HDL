import React from 'react'
import { connect } from 'react-redux'
import ProductCard from './ProductCard'
import { ProdObj, State } from '../../Types/types'
import {
    Action,
    ADD_REMOVE_PRODUCT_IN_CART,
    REMOVE_SELECTED_FOR_VIEWING,  // selectForViewingCreator,
} from '../../Redux/Actions/Actions'

import { withRouter } from 'react-router'
import { asyncGetProductForViewActionCreator } from '../../Redux/Actions/asyncActions'
// import { render } from '@testing-library/react'

// interface MapStateToProps {
//     added : string[],
//     products : {},
//     addedButton : string
// }

const ProdCardsContainer : React.FC<{
    productObject : ProdObj, 
}> = (
    {productObject, 
        } : {
            productObject : ProdObj,
    }
    ) => {
    const Add_Remove_Action_Creater = (type : string, payload : any) : {} =>  ({
        type ,
        payload
    })

    const mapStateToProps = (state : State) => ({
            productObject,
            added : [...state.selectedObjects.addedToCart.addedId],
    });
    const mapDispatchToProps = (dispatch : (action: {type : string, payload : any}) => void) => {
        return{
            addedProductFunction : (obj : any) : void => {
                const action : any = Add_Remove_Action_Creater(ADD_REMOVE_PRODUCT_IN_CART, obj);
                dispatch(action)
            }
        }
    };
    const ProductCardWrap = connect(mapStateToProps,mapDispatchToProps)(ProductCard);
    const ProductCardWrapWithRouter = withRouter(ProductCardWrap);
    return(<ProductCardWrapWithRouter/>);
};

export default ProdCardsContainer;
