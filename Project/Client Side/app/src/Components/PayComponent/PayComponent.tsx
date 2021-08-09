import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../SASS/PayComponent.sass';
import { addedType } from '../../Types/types';
import OrderForm, { ISendOrderForm } from '../Modals/OrderForm';
import Spinner from '../Spinner';

interface IProps {
    process: boolean;
    addedToCart: addedType[];
    newOrder: string;
    remove : (id : string) => void;
    sendNewOrder: (data: INewOrder) => void;
}

export interface INewOrder {
    personalData: ISendOrderForm | {};
    productsOrder: string[];
}

const PayComponent : React.FC<IProps>  = ( props ) => {

    console.log(props.newOrder);
    
    let total : number = 0;
    let { remove } = props;
    props.addedToCart.forEach((element : addedType) : void => {
        total += Number(element.cost.new);
    });
    const event = (id : string) => {
        remove(id);
    };

    const [ orderSendProssecc, setOrderSendProssecc ] = React.useState<boolean>(false)
    let [modalWindow, setModalWindow] = React.useState<boolean>(false);
    let [changeDir, setChangeDir] = React.useState<boolean>(false);

    const sendOrderHandler = (personalData : ISendOrderForm) => {
        let newOrder : INewOrder  = {productsOrder : [], personalData: {}};
        
        newOrder.personalData = personalData;
        for (let i = 0; i < props.addedToCart.length; i++) {
            const el = props.addedToCart[i];
            newOrder.productsOrder.push(el.id)
        }
        
        props.sendNewOrder(newOrder);
        setModalWindow(false);
        setChangeDir(true)
    }
    
    const openModal = () => {
        if (props.addedToCart.length === 0) {
            
        }else {
            setModalWindow(true);
        }
    }
    
    const closeModal = () => {
        setModalWindow(false)
    }
    
    {if (changeDir &&( props.addedToCart.length === 0)) return <Redirect to='/orderInfo' />}

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
                        props.addedToCart.map((el : addedType , i : number) :  JSX.Element => (
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

            {modalWindow && <OrderForm event = {closeModal}  pross={setOrderSendProssecc} sendOrderHandler={sendOrderHandler}/>}
            { props.process && <Spinner/>}

        </div>
    )
}

export default PayComponent
