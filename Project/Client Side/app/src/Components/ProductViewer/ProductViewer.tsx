import React  from 'react'
import '../../SASS/ProductViewer.sass'
import { useParams } from 'react-router-dom'
import PhotoViewer from '../Modals/PhotoViewer'
import Spinner from '../Spinner'
import ProductDescriptionContainer from './DescriptionComponent/ProductDescriptionContainer'

export interface ISelected {
    id : string;
    name: string;
    photo: string;
    cost: { new: string }
}
export interface IMapStateToProps {
    selectedObject: ISelected;
    addedId: string[];
    process: boolean;
}
export interface IMapDispatchToProps {
    addedProductFunction: (obj : ISelected) => void;
    selectForViewing : (id : string) =>  void;
}

interface IProps extends IMapStateToProps, IMapDispatchToProps{}

const ProductViewer : React.FC<IProps>  = ( props ) => {
    
    let paramsId : {id : string} = useParams();

    

    React.useEffect(() => {
        if( props.selectedObject.id !==  paramsId.id ){
            props.selectForViewing(paramsId.id);
        }
    }, []);
     

    const { id, name, photo, cost } = props.selectedObject;
    let buttonAdded = props.addedId.indexOf(id) === -1 ? 'Add' : 'Remove';

    let [modal, setModal]  = React.useState<boolean>(false);

    const openModal = () => {
        setModal(true);
    };
    const close = () => {
        setModal(false);
    };

    const Add_Remove_Product = () => {

        props.addedProductFunction(props.selectedObject);
    };
    
    return (
        <div>
            {!props.selectedObject.id ?  <Spinner/> : 
                    <div>

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
                                                        onClick = {() => Add_Remove_Product()}
                                                        >
                                                {buttonAdded}
                                        </button>
                                    </div>

                            </div>
                        </div>
                    
                        <div className="description-container">
                            <div className="product-view-tabs-wrapper">
                                <div className="product-view-tabs-btns">
                                Describes
                                </div>
                            </div>
                            <ProductDescriptionContainer/>
                            <div className="product-view-discribes">
                            </div>
                        </div>

                    </div>
            }
            {modal && <PhotoViewer 
                img={photo[0]}
                event={close}
                />}
                </div>
    )
}

export default ProductViewer
