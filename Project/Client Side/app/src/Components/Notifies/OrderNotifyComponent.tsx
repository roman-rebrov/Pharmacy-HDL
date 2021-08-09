import React from 'react'
import { IOrders } from '../../Redux/Reducers/newOrderReducer'
import '../../SASS/OrderNotifyStyle.sass'

interface IProps {
    newOrder: IOrders;
}

const OrderNotifyComponent : React.FC<IProps> = ( props ) => {
    console.log(props);
    
    return (
        <div className='order-notify-container'>
            <div className="order-notify-wrap">
                    <div className="order-notify-title">
                        Your new order:
                    </div>
                    <div>
                        <span>order number:</span> <span>{props.newOrder.newOrderNumber}</span> <br />
                        <div>
                            {
                                props.newOrder.prodNames.map((item : string) => {
                                    return(
                                        <div>
                                               { '-' + item}
                                        </div>
                                        
                                        );
                                })
                            }
                        </div>
                        <span>total cost:</span> <span>{props.newOrder.totalCost}</span>
                    </div>

            </div>
        </div>
    )
}

export default OrderNotifyComponent
