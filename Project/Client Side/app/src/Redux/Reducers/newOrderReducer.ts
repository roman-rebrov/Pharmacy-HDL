import { SET_NEW_ORDER_NUMBER } from "../Actions/Actions";


interface IAction {
    type: string;
    payload: {}
}

export interface IOrders {
    newOrderNumber: string;
    prodNames: string[];
    totalCost: number;
}

const orderDefault = {
    newOrderNumber: '',
    prodNames: [],
    totalCost: 0
}

const newOrder = (orders : IOrders | {} = orderDefault, action : IAction) => {
    switch (action.type) {
        case SET_NEW_ORDER_NUMBER:
            
            return(orders = {...action.payload})
    
        default:
            return(orders)
    }
}

export default newOrder;