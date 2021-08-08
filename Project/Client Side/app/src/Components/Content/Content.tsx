import React from 'react'
import '../../SASS/Content.sass'
import { Switch, Route } from 'react-router-dom' 

import { AboutContainer,
        ProductViewerContainer,
        PayComponentContainer,
        SliderContainer, 
        CatalogContainer,
    } from '../../Components'
import RecommendedContainer from '../Recommended/RecommendedContainer'
import OrderNotifyContainer from '../Notifies/OrderNotifyContainer'


const Content : React.FC = ( ) => {
    
    return ( 
        <div className= "content-main-container" >
            <div className="content-child-container  block" >
                <Switch>
                    <Route  path='/about' render={() =>  <AboutContainer/>} />
                    <Route  path='/catalog' render={() =>  <CatalogContainer/>} />
                    <Route exact path='/' render={() => [ <SliderContainer/>, <RecommendedContainer/>]} />
                    <Route  path='/productViewer/product/:id' render={() => <ProductViewerContainer />} />
                    <Route  path='/payPage' render={() => <PayComponentContainer />} />
                    <Route path='/orderInfo'  render={() => <OrderNotifyContainer/>}/>
                </Switch>
            </div> 
        </div>
    )
};

export default Content;
