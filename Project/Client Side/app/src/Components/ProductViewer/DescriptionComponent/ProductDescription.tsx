import React from 'react'

interface IProps {
    productDescription: String,
}

const ProductDescription : React.FC<IProps> = (props)  => {

    return ( 
        <div className="">
            {props.productDescription}
        </div>
     )
}

export default ProductDescription;
