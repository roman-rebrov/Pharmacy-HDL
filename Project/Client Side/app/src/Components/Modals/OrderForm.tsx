import React from 'react'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import '../../SASS/orderFormStyle.sass'

interface ISendOrderForm {
    name: string;
    address: string;
    phone: string;
    email: string;
}

interface IForms {
    value: string;
    id: string;
}

const OrderForm : React.FC <{event: () => void, pross: (a : boolean) => void}> = ({event, pross}) => {

    const close = () => {
        event();
    }

    const [ sendOrderForm, setSendOrderForm ] = React.useState<ISendOrderForm>({
        name: '',
        address: '',
        phone: '',
        email: ''
    })

    const orderFormHandler = (e : React.ChangeEvent<IForms>) : void => {
        let newData : any = {...sendOrderForm};             // ??????????????????????????????
        newData[e.target.id] = e.target.value;
        setSendOrderForm(newData);
        
    }
    
    const [ toDir, setToDir ] = React.useState<boolean>(false);

    // const dispatch = useDispatch()    /// ??????

    const sendForm = () => {
        pross(true);
        setTimeout(() => { 
            // pross(false) 
            setToDir(true);
            // return <Redirect to='/orderInfo' />
        }, 4000)
        console.log(sendOrderForm);
    }
    {if (toDir) return <Redirect to='/orderInfo' />}

    return (
        <div className='modal-order-form-wrap'  >
            <div className="modal-window-order-form">
                <div className="close-modal-wrap">

                    <div className="close-modal"
                        onClick={() => {
                            close();
                        }}
                        >&times;
                    </div>
                </div>

                <div className="model-content"  >
                    <span className="modal-form-title">
                            Type your data
                    </span>
                    <form className="order-form" >
                         {/* --------- */}
                         
                         <label >
                             <span className="title">Name</span>
                             <input onChange={(e : React.ChangeEvent<IForms>) => {orderFormHandler(e) }} value={sendOrderForm.name} type="text" id='name' placeholder="your name" />
                         </label>
                         <label >
                            <span className = "  title"> Address</span>
                            <input onChange={(e : React.ChangeEvent<IForms>) => {orderFormHandler(e) }} value={sendOrderForm.address} type="text" id='address' placeholder="your address" />
                         </label> <br />
                        <label >
                            <span className="title">Phone</span>
                            <input onChange={(e : React.ChangeEvent<IForms>) => {orderFormHandler(e) }} value={sendOrderForm.phone} type="text" id='phone'  placeholder="your phone"/>
                        </label>

                        <label >
                            <span className="title">Email</span>
                            <input onChange={(e : React.ChangeEvent<IForms>) => {orderFormHandler(e) }} value={sendOrderForm.email} type="text" id='email'  placeholder="your email"/>
                        </label>

                        <div className='modal-form-submit-wrap '>
                            <input type="submit" value="SEND" className="send-button-form" onClick= {(e :  React.MouseEvent<HTMLElement>) => {
                                e.preventDefault();
                                sendForm()
                            }} />
                        </div>
                            
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default OrderForm;