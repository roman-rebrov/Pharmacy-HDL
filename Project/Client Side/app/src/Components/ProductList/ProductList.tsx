import React  from 'react'
import { ASYNC_GET_PRODUCT_LIST } from '../../Redux/Actions/asyncActions'
import '../../SASS/ProductList.sass'
import ProdCardContainer from '../ProductCards/ProdCardsContainer'
import Spinner from '../Spinner'

const ProductList : React.FC<any> = ( props ) => {

    const  getProducts = () => {
        props.dispatch({ type: ASYNC_GET_PRODUCT_LIST });
    };
    
    if(props.Products.list.length === 0){
        getProducts()
    };
    return (
        <div>
            <div className="home-recommended-title title">
                    recommended 
            </div>
            { props.Products.list.length  === 0 &&  <Spinner/>} 
            <div className="product-list">
                {
                    props.Products.list.map((item : any,  i : number)  :  JSX.Element => { 
                        return (
                            <ProdCardContainer    
                                key={item.id + i}
                                props={item}
                                dispatch= {props.dispatch}
                                added={props.added}
                            >
                                {item}
                            </ProdCardContainer>)
                    })
                }
                
            </div>
        </div>
    )
}

export default ProductList
