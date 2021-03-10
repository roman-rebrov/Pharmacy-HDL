import React from 'react'
import '../../SASS/Content.sass'
import { Switch, Route } from 'react-router-dom' 
// import { JsxElement } from 'typescript'

import { AboutContainer,
        ProdListContainer,
        ProductViewerContainer,
        PayComponentContainer,
        SliderContainer, 
        CatalogContainer,
    } from '../../Components'
import RecommendedContainer from '../Recommended/RecommendedContainer';


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
                </Switch>
            </div> 
        </div>
    )
};

export default Content
