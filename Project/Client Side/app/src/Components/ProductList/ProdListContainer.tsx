import React from 'react'
import ProductList from './ProductList'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { ProductListType, State } from '../../Types/types'
// import { Action } from '../../Redux/Actions/Actions'

interface iMapStateToProps {
    Products: ProductListType;
}
interface iMapDispatchToProps {
    dispatch: ( action  : {type: string, payload: string} ) => void;
}



const   ProdListContainer : React.FC = ( )  => {
 
    const mapStateToProps = (state : State) : iMapStateToProps => {
        return {
            Products : {...state.productsBlock.Products},
        }
    };
    
    const mapDispatchTpProps = (dispatch : ( action : {type: string, payload: string}) => void ) : iMapDispatchToProps =>{
        return{
            dispatch
        }
    };

    const ProdoctListWrap = connect(mapStateToProps, mapDispatchTpProps)(ProductList);
    const ProductListWithRouterWrap = withRouter(ProdoctListWrap)
    return(<ProdoctListWrap/>);
}
export default ProdListContainer;