import React from 'react'
import '../../SASS/Content.sass'
import { Switch, Route } from 'react-router-dom' 
// import { JsxElement } from 'typescript'
// import {ProductList, State } from '../../Types/types'
// interface PropsTypes {}

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
                    <Route exact path='/about' render={() =>  <AboutContainer/>} />
                    <Route exact path='/catalog' render={() =>  <CatalogContainer/>} />
                    <Route exact path='/' render={() => [ <SliderContainer/>, <RecommendedContainer/>]} />
                    <Route exact path='/productViewer' render={() => <ProductViewerContainer />} />
                    <Route exact path='/payPage' render={() => <PayComponentContainer />} />
                </Switch>
            </div> 
        </div>
    )
};

export default Content
