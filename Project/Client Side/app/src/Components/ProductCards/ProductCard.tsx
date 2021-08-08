import React from 'react'
import '../../SASS/ProductCard.sass'
import { ProdObj } from '../../Types/types'
import {Link} from 'react-router-dom'
// import { render } from '@testing-library/react'
import PhotoViewer from '../Modals/PhotoViewer'

 interface IProps {
    productObject : ProdObj;
    addedProductFunction : (obj : ProdObj) => void;
    added: Array<string>;
 }


const ProductCard : React.FC<IProps> =  ( props )  => {

    let  {productObject,
            added,
            addedProductFunction
    } : IProps  =  props;

    const addedButton : string = added.indexOf(productObject.id) === -1 ? 'Add' : 'Remove'
    let [modal, setModal]  = React.useState<boolean>(false)
    let [button, setButton] = React.useState<string>(addedButton);
    

    const openModal = () => {
        setModal(true);
    };
    const close = () => {
        setModal(false)
    };
    const Add_Remove_Product = () => {
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
                            onClick = {() : void =>{ Add_Remove_Product(  )}}
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
