import React from 'react';
import { Link } from 'react-router-dom';
import '../../SASS/PayComponent.sass';
import { ProdObj } from '../../Types/types';
import OrderForm from '../Modals/OrderForm';
import Spinner from '../Spinner';



const PayComponent : React.FC  = (props : any) => {
    let total : number = 0;
    let { remove } = props;
    props.addedToCart.forEach((element : ProdObj) => {
        total += Number(element.cost.new);
    });
    const event = (id : string) => {
        remove(id);
    };

    const [ orderSendProssecc, setOrderSendProssecc ] = React.useState(false)
    let [modalWindow, setModalWindow] = React.useState(false);

    const openModal = () => {
        if (props.addedToCart.length === 0) {
            
        }else {
            setModalWindow(true);
        }
        
        // console.log(props.addedToCart.length);
        
    }

    const closeModal = () => {
        setModalWindow(false)
    }

    return (
        <div>
            <div className="pay-component-title">
                <span >
                    Your order
                </span>
            </div>
            <div className="order-objects-wrap">
                <div className="order-objects">
                    { 
                        props.addedToCart.map((el : ProdObj , i : number) => (
                            <div key={el.id + i} className="order-objects_item">
                                <Link to={'/productViewer/product/' + el.id} >
                                    <div className="">
                                        {el.name}
                                    </div>
                                </Link>
                                <div className='pay-component-cost-block'>

                                    <div className="pay-component-costOfElement">
                                        {el.cost.new}
                                    </div>
                                    <div 
                                        className="order-objects-btn-remove"
                                        onClick={() => {
                                            event(el.id)
                                        }}
                                        >
                                        &times;
                                    </div>
                                </div>

                            </div>
                            )
                        )
                    }
                </div>
            </div>
            <div className="pay" >
                <div className="total-cost" >
                    <span>total: </span>
                    <span style={{color: "white"}}>
                        { total }
                    </span>
                </div>
                <div className="orderButton">
                    <button onClick={() => { openModal() }}> { props.addedToCart.length === 0? 'Empty' :  'Buy' }</button>
                </div>
            </div>

            {modalWindow && <OrderForm event = {closeModal}  pross={setOrderSendProssecc}/>}
            { orderSendProssecc && <Spinner/>}

        </div>
    )
}

export default PayComponent
