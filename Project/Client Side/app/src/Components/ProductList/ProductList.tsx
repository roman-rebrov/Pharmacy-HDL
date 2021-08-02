import React  from 'react'
import { Link, useLocation , useHistory } from 'react-router-dom'
import { ASYNC_GET_PRODUCT_LIST } from '../../Redux/Actions/asyncActions'
import '../../SASS/ProductList.sass'
import { ProductListType } from '../../Types/types'
import ProdCardContainer from '../ProductCards/ProdCardsContainer'
import Spinner from '../Spinner'

interface IProps {
    Products: any;
    // Products: ProductListType;
    dispatch: ( action : {type: string, payload : string} ) => void;
}

const ProductList : React.FC<IProps> = ( props ) => {

    const history = useHistory();
    const { search }  = useLocation();
    const pages = Math.ceil(props.Products.arrLength / props.Products.limit);
    console.log(pages);
    // console.log(props.Products);

    const  getProducts = (params : string) => {
        props.dispatch({ type: ASYNC_GET_PRODUCT_LIST, payload:  params });
    };
    

    const limitHandler = (limit : number) : void =>{
        console.log(limit);
        history.push("?limit=" + limit);
        getProducts("?limit=" + limit);
    }

    const pagesHandler = (num : number) => {
        console.log(search);
        if(search !== ""){

        }else{
            history.push("?page=" + num);
            getProducts("?page=" + num);
        }
        
    }
    
    React.useEffect(() => {
        if(props.Products.list.length === 0){
            getProducts(search)
        };
    })
    
    const pagesNav = () :  JSX.Element[] => {
        let list = [];
        for (let i = 0; i  <  pages;  i++) {
            list.push(<div className="" style={{cursor: "pointer", border: "1px solid white", padding: "5px"}} onClick={() => {pagesHandler(i + 1)}}><span>{i + 1}</span></div>)
        }
        return(   list  );
    }

    return (
        <div>
            <div className="home-catalog-title title">
                <div className="">
                        Catalog 
                </div>
                <div className="catalog-tools-wrap">
                    {/* <Link to="/catalog?limit=20"> */}
                            <div className="limit-20 limit" onClick= {() => {limitHandler(20)}}><span>20</span></div>
                    {/* </Link> */}
                    {/* <Link to="/catalog?limit=40"> */}
                        <div className="limit-40 limit" onClick= {() => {limitHandler(40)}}><span>40</span></div>
                    {/* </Link> */}
                </div>
            </div>
            { props.Products.list.length  === 0 &&  <Spinner/>} 
            <div className="product-list">
                {
                    props.Products.list.map((item : any,  i : number)  :  JSX.Element => {    ////  !!!!!!!!!!!!!!!!!!!!! :any
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
