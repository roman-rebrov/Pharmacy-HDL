import React from 'react'
import { Link } from 'react-router-dom'
import '../../SASS/Header.sass'
import HeaderNavContainer from './HeaderNavContainer'

const Header : React.FC<any> = (props) => {
    let [ popup, setPopup ] : any = React.useState(false);
    let { addedToCart, addRemove} = props;                      //  products, added ,
    
    const total = (prod: [{cost : any}]) : number => {
        let total : number = 0;
        prod.forEach((item : any, i : number) => {
            // for(let i : number = 0; i <  added.length; i++) {
                // if ( item.id === added[i] ){
                    total += Number(item.cost.new)
                // }
            // } 
        })
        return total
    };
    const event = (id : string) => {
        addRemove(id);
    }
    return (
        <div className='header-main-container'>
            <header className="App-header block" >
                    <Link  to='/' className="">
                        <div className="logo"   >
                                <div className="logo-name">
                                        HDL 
                                </div>
                                <div className="logo-line"></div>
                                <div className="logo-specific">
                                        pharmacy
                                </div>
                        </div>
                    </Link>
                <nav>
                <Link  to='/' className="link">
                        HOME
                    </Link>

                    <Link to='/about'  className="link">
                        ABOUT
                    </Link>
                </nav>
                <div className="header-phone">
                        <div className="">
                        <span>
                        <i className="fas fa-phone"></i>
                            +1 212-253-8686
                        </span>
                    </div>
                </div>
                <div className="user">
                    <div className="user-wrap">
                        <div className="notification-wrap">
                                <i className="far fa-bell"></i>
                        </div>
                        <div className="user-access">
                                <i className="fas fa-user"></i>
                        </div>
                    </div>
                </div>
                <div className="cart"            // КОРЗИНА
                    onMouseOver={()=>{
                        setPopup(true)
                    }}
                    onMouseLeave={()=>{
                        setPopup(false)
                    }}
                >
                        <div className="cart-wrap"> 
                            <div className="cart-total-cost">   
                                {total(addedToCart)}
                            </div>
                            <div className="icon">
                                <i className="fas fa-cart-arrow-down"></i>
                            </div>
                            <div className= {"cart-added-length" && addedToCart.length > 0? 'count-added-products' : ''}>
                                {addedToCart.length === 0 ? <div>Корзина <br/> пуста</div> : addedToCart.length}
                            </div>
                        </div>
                        {
                            popup &&
                            <div className="cart-popup" style={{
                                        fontSize: "1rem"
                                    }}>
                                        <div className="" style={{
                                            color: "#d18e50"
                                        }}>
                                                {addedToCart.length === 0 && 'выберите товар'} <br/>
                                        </div>
                                {addedToCart.length === 0 ? 
                                        <div className="">
                                            <div style={{ 
                                                border : '1px solid',
                                                fontSize: '1rem',
                                                backgroundColor: '#677070a4',
                                                display: 'flex',
                                                justifyContent: "center"

                                            }}>in cart</div>
                                        </div>
                                     :
                                     <div className="added-products--fast-view_container"> 
                                            <div className="added-products--fast-view_wrap">
                                                {
                                                    addedToCart.map((items : any, i : number) => {
                                                                return (<div key={items.id} className="added-product">
                                                                            <div className="fast-view--name">
                                                                                {items.name}
                                                                            </div>
                                                                            <div className="fast-view--cost">
                                                                               <div className="">
                                                                                    {items.cost.new} 
                                                                               </div>
                                                                                <div>р</div>
                                                                            </div>
                                                                            <div 
                                                                                className="fast-view-remove"
                                                                                onClick={() => {
                                                                                    event(items.id)
                                                                                }}
                                                                            >
                                                                                &times;
                                                                            </div>
                                                                        </div>)
                                                    })
                                                }
                                            </div>
                                            <Link to='/payPage' style={{ 
                                                border : '1px solid',
                                                backgroundColor: '#677070',
                                                cursor : 'pointer',
                                                color : 'white',
                                                fontSize: '1rem',
                                                display: 'flex',
                                                width: '100%',
                                                justifyContent: "center"
                                            }}
                                                onClick={
                                                   () => setPopup(false)
                                                }
                                            >
                                                        in cart
                                            </Link>
                                     </div>
                                }
                            </div>
                        }
                </div>
            </header>
                <HeaderNavContainer/>
        </div> 
    )
}

export default Header;
