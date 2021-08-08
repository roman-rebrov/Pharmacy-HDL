import React  from 'react'
import { Link, useLocation , useHistory } from 'react-router-dom'
import { ASYNC_GET_PRODUCT_LIST } from '../../Redux/Actions/asyncActions'
import '../../SASS/ProductList.sass'
import { ProdObj, ProductListType } from '../../Types/types'
import ProdCardContainer from '../ProductCards/ProdCardsContainer'
import Spinner from '../Spinner'
import queryString from 'query-string'

interface IProps {
    proccess: boolean;
    Products: ProductListType;
    dispatch: ( action : {type: string, payload : string} ) => void;
}

const ProductList : React.FC<IProps> = ( props ) => {

    const history = useHistory();
    const { search }  = useLocation();
    const pages = Math.ceil(props.Products.arrLength / props.Products.limit);

    const  getProducts = (params : string = "") => {
        props.dispatch({ type: ASYNC_GET_PRODUCT_LIST, payload:  params }); 
    };
    
    
    const limitHandler = (limit : number) : void =>{
        let params = queryString.parse(search);
        if(params.topic){
            history.push("?limit=" + limit + "&" + "topic=" + params.topic);
            getProducts("?limit=" + limit + "&" + "topic=" + params.topic);
        }else{
            history.push("?limit=" + limit);
            getProducts("?limit=" + limit);
        }
    }

    const pagesHandler = (num : number) => {
        let params = queryString.parse(search);
        if(params.topic){
            history.push("?page=" + num + "&" + "limit=" + props.Products.limit + "&" + "topic=" + params.topic);
            getProducts("?page=" + num + "&" + "limit=" + props.Products.limit + "&" + "topic=" + params.topic);
        }else{
            history.push("?page=" + num + "&" + "limit=" + props.Products.limit);
            getProducts("?page=" + num + "&" + "limit=" + props.Products.limit);
        }
    }
    

    const pageNumberHandleer = (a : number, b : number) => {
        return(( a === b) ? "active" : "" )
    }

    React.useEffect(() => {
        if(!props.proccess){
            if(props.Products.list.length === 0){
                getProducts(search);
            };
        }
        
    }, [])
    
    const pagesNav = () :  JSX.Element[] => {
        let list = [];
        for (let i = 0; i  <  pages;  i++) {
            list.push(<div className={ " "  +pageNumberHandleer(i + 1, props.Products.page )  } style={{cursor: "pointer", border: "1px solid #cccccc55", 
                        padding: "0 0.5rem", marginLeft: "1rem"}} onClick={() => {pagesHandler(i + 1)}}><span>{i + 1}</span></div>)
        }
        return( list );
    }

    return (
        <div>
            <div className="home-catalog-title title">
                <div >
                        Catalog 
                </div>
                <div className="catalog-tools-wrap">
                            <div className={"limit-20 limit " + pageNumberHandleer(20 , props.Products.limit )}  onClick= {() => {limitHandler(20)}}><span>20</span></div>
                        <div className={"limit-40 limit " + pageNumberHandleer(40 , props.Products.limit )}  onClick= {() => {limitHandler(40)}}><span>40</span></div>
                </div>
            </div>
            { props.proccess &&  <Spinner/>} 
            <div className="product-list">
                {
                    props.Products.list.map((item : ProdObj,  i : number)  :  JSX.Element => {   
                        return (    
                            <ProdCardContainer    
                                key={item.id + i}
                                productObject={item}
                            />)
                    })
                }
                
            </div> 
            <div className="paggination-nav-wrap">
                <div className="" style={{display: "flex"}}> pages: 
                         {
                             pagesNav()
                        }
                </div>
            </div>
        </div>
    )
}

export default ProductList
