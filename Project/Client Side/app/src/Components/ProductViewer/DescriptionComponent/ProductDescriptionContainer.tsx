import { connect } from 'react-redux';
import React from 'react'
import ProductDescription from './ProductDescription';
import { State } from '../../../Types/types';


const ProductDescriptionContainer : React.FC = () : any=> {

    const mapStateToProps  = (state : State)  => ({
        productDescription : state.selectedObjects.viewPage.discribes
    });

    const ProductDescriptionWrap = connect(mapStateToProps)(ProductDescription);
    return ( <ProductDescriptionWrap/> )
}

export default ProductDescriptionContainer;
