import React, { MouseEventHandler } from 'react'
import '../../SASS/ProductCard.sass'
import { ProdObj } from '../../Types/types'
import {Link} from 'react-router-dom'
// import { render } from '@testing-library/react'
import PhotoViewer from '../Modals/PhotoViewer'

 


const ProductCard : React.FC<{productObject : ProdObj, 
    addedProductFunction : (id : any) => void,
    added: Array<string>,
}> =  ( props )  => {

    let  {productObject,
            added,
            addedProductFunction,
    } : {
            added: Array<string>,
            productObject : any, 
            addedProductFunction : (id : any) => void,
        }  
        =  props;
    const addedButton : string = added.indexOf(productObject.id) === -1 ? 'Add' : 'Remove'
    let [modal, setModal]  = React.useState(false)
    let [button, setButton] = React.useState(addedButton);
    

    const openModal = () => {
        setModal(true);
    };
    const close = () => {
        setModal(false)
    };
    const Add_Remove_Product = (event : MouseEvent) => {
        addedProductFunction(productObject)
    };
    
        return (
            <div className='Products'> 
            <div className="product-card">
                <Link to={'/productViewer/product/' + productObject.id} >
                    <div className="product-name">
                            {productObject.name}
                    </div>
                </Link>
                <div className="product-photo"
                    onClick={() => {openModal()}}
                >
                    <img src={productObject.photo[0]} alt={`Photo ${
                        productObject.brand
                    }`}/>
                </div>
                <div className="cost-wrap">
                    <div className="new-cost">
                        {productObject.cost['new']}р
                    </div>
                    <div className="add-in-cart-wrap"> 
                        <button
                            onClick = {(e : any) : void =>{ Add_Remove_Product(e)}}
                            >
                        {
                            button
                        }
                        </button> 
                    </div>
                </div>
            </div>
            {modal && <PhotoViewer 
          img={productObject.photo[0]}
          event={close}
        />}
        </div>
    )
};

export default ProductCard
