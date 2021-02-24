import React, { useState } from 'react'
import PhotoViewer from '../Modals/PhotoViewer';
import '../../SASS/ProductViewer.sass'
import Spinner from '../Spinner';

const ProductViewer : React.FC  = (props : any) => {
    // if (!props.selectedObject.id) {
        // window.location.href = "http://localhost:3000/";
    // }

    const { id, name, discribes, photo, cost } = props.selectedObject;
    let buttonAdded = props.addedId.indexOf(id) === -1 ? 'Add' : 'Remove';

    let [modal, setModal]  = useState(false);
    // let [button, setButton] = React.useState(props.addedButton);

    const openModal = () => {
        setModal(true)
    };
    const close = () => {
        setModal(false)
    };

    const Add_Remove_Product = (event : MouseEvent) => {
        // const obj = {
        //     id : id,
        //     name : name,
        //     cost : cost.new
        // }
        props.addedProductFunction(props.selectedObject)
        // button = button === 'Add' ? 'Remove' : 'Add'
        // setButton(button)
    };

    return (
        <div>
            {!props.selectedObject.id ?  <Spinner/> : 
            <div className="product-view-header">
                <div className="product-view-demo-photo"
                        onClick={() => {openModal()}}
                        >
                    <img src={photo[0]} alt=""/>    
                </div>
                <div className="product-view-headeer-info">
                        <div className="">{name}</div>
                        <div className="product-view-headeer-cost">
                                {cost.new}p 
                        </div>
                        <div className="product-view-add-button">
                            <button
                                        onClick = {(e : any) => Add_Remove_Product(e)}
                                        >
                                    {buttonAdded}
                            </button>
                        </div>

                </div>
            </div>
            }

            <div className="product-view-discribes">
                        {discribes}
                </div>

            {modal && <PhotoViewer 
          img={photo[0]}
          event={close}
        />}
        </div>
    )
}

export default ProductViewer
