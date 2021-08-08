import React from 'react'

interface IProps {
    productDescription: String,
}

const ProductDescription : React.FC<IProps> = (props)  => {

    return ( 
        <div className="product-viewer-prod-description-wrap">
            {props.productDescription}
        </div>
     )
}

export default ProductDescription;
