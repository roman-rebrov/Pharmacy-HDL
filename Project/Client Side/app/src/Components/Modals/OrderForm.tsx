import React from 'react'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import '../../SASS/orderFormStyle.sass'

export interface ISendOrderForm {
    name: string;
    address: string;
    phone: string;
    email: string;
}

interface IForms {
    value: string;
    id: string;
}

interface IProps {
    event: () => void;
    pross: (a : boolean) => void;
    sendOrderHandler: (data : ISendOrderForm ) => void;
}

const OrderForm : React.FC <IProps> = ({event, pross, sendOrderHandler}) => {
    
    const [ formValid, setFormValid ] = React.useState<boolean>(false)
    const [ info, setInfo ] = React.useState<boolean>(true)

    const formValidHandler = (data : any) : void => {
        let check : boolean = false;
        for( let el in data ){
            
            if(data[el].length > 0){
                if(el === 'email'){
                    if(data[el].match(/@/) === null){
                        check = false;
                        setInfo(false)
                        break;
                    }
                }
                        setInfo(true)
                        check = true;
            }else {
                        setInfo(false);
                        check = false;
                break;
            }
        }
        setFormValid(check);
    }

    const close = () => {
        event();
    }

    const [ sendOrderForm, setSendOrderForm ] = React.useState<ISendOrderForm>({     // ISendOrderForm
        name: '',
        address: '',
        phone: '',
        email: ''
    })

    const orderFormHandler = (e : React.ChangeEvent<IForms>) : void => {
        let newData : any = {...sendOrderForm};       
        newData[e.target.id] = e.target.value;
        setSendOrderForm(newData);
        formValidHandler(newData);
    }
     


    const sendForm = () => {
        pross(true);
        sendOrderHandler(sendOrderForm);
    }


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
                    { !info && <div style={{color: "red", fontSize: "1rem"}}>Не все поля заполнены!</div> }
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
                            {formValid &&  <input type="submit" value="SEND" className="send-button-form" onClick= {(e :  React.MouseEvent<HTMLElement>) => {
                                e.preventDefault();
                                sendForm()
                            }} />}
                        </div>
                            
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default OrderForm;