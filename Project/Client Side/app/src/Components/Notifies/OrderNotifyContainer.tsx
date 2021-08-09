import React from 'react'
import { connect } from 'react-redux'
import { IOrders } from '../../Redux/Reducers/newOrderReducer'
import { State } from '../../Types/types'
import OrderNotifyComponent from './OrderNotifyComponent'


interface IMapStateToProps {
    newOrder: IOrders
}

const OrderNotifyContainer : React.FC = () => {

    const mapStateToProps = (state : State) : IMapStateToProps => ({
        newOrder: state.newOrder
    })

    const OrderNotifyWrap = connect(mapStateToProps)(OrderNotifyComponent)
    return (  <OrderNotifyWrap/>   )
}

export default OrderNotifyContainer;