import React, { useState } from 'react'
import '../../SASS/ProductViewer.sass'
import { useParams } from 'react-router-dom'
import PhotoViewer from '../Modals/PhotoViewer';
import Spinner from '../Spinner';

const ProductViewer : React.FC  = (props : any) => {
    
    let paramsId : {id : string} = useParams();
    if (props.process === false && props.selectedObject.id !==  paramsId.id) {
        console.log(paramsId.id);
        props.selectForViewing(paramsId.id);
    }
    

    const { id, name, discribes, photo, cost } = props.selectedObject;
    let buttonAdded = props.addedId.indexOf(id) === -1 ? 'Add' : 'Remove';

    let [modal, setModal]  = useState(false);

    const openModal = () => {
        setModal(true)
    };
    const close = () => {
        setModal(false)
    };

    const Add_Remove_Product = () => {

        props.addedProductFunction(props.selectedObject)
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
                                        onClick = {(e : any) => Add_Remove_Product()}
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
