import React from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux'
import { ASYNC_GET_RECOMMENDED_LIST } from '../../Redux/Actions/asyncActions'
import { ProdObj, State } from '../../Types/types'
import Recommended from './Recommended'

interface IMapStateToProps {
    list: ProdObj[]
}

interface IMapDispatchToProps {
    getRecommendedList: () => void
}

const RecommendedContainer = () => {

    const mapStateToProps = (state: State) : IMapStateToProps  => ({
        list: [...state.recommendedList]
    });
    const mapDispatchToProps = ( dispatch : (action : Action) => void ) : IMapDispatchToProps => ({
        getRecommendedList: () => {
            dispatch({type: ASYNC_GET_RECOMMENDED_LIST});
        }
    })
    const RecommendedWrap = connect(mapStateToProps, mapDispatchToProps)(Recommended)
    return ( <RecommendedWrap/> )
}

export default RecommendedContainer;