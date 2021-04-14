import React from 'react'

interface Props {
    productDescription: String,
}

const ProductDescription : React.FC<any> = (props)  => {

    return ( 
        <div className="">
            {props.productDescription}
        </div>
     )
}

export default ProductDescription;
