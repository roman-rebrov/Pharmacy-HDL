import { connect } from 'react-redux';
import React from 'react'
import ProductDescription from './ProductDescription';
import { State } from '../../../Types/types';

interface  IState {
    productDescription: string;
}

const ProductDescriptionContainer : React.FC = () => {

    const mapStateToProps  = (state : State) : IState  => ({
        productDescription : state.selectedObjects.viewPage.discribes
    });

    const ProductDescriptionWrap = connect(mapStateToProps)(ProductDescription);
    return ( <ProductDescriptionWrap/> )
}

export default ProductDescriptionContainer;
