import React from 'react'
import { connect } from 'react-redux'
import { State } from '../../Types/types'
import OrderNotifyComponent from './OrderNotifyComponent'

const OrderNotifyContainer : React.FC = () => {

    const mapStateToProps = (state : State) => ({

    })

    const OrderNotifyWrap = connect(mapStateToProps)(OrderNotifyComponent)
    // return (  <OrderNotifyWrap/>   )
    return (  <OrderNotifyComponent/>   )
}

export default OrderNotifyContainer;
