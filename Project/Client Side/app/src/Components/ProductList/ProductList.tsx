import React  from 'react'
import '../../SASS/ProductList.sass'
import ProdCardContainer from '../ProductCards/ProdCardsContainer'
// import { State } from '../../Types/types'
// import { Provider } from 'react-redux'
import { getProducts } from '../../API/api'
import Spinner from '../Spinner'

const ProductList : React.FC<any> = ( props ) => {
    // console.log(props);

    const  io = async() => {
        const products = await getProducts("/")
        await props.dispatch({type: "GET_PRODUCTS", payload: {...products}})
    };
    
    if(props.Products.list.length === 0){
        // console.log(props.dispatch);
        io()
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
