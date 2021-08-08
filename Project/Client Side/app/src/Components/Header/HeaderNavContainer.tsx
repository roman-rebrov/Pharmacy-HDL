import React from 'react'
import HeaderNav from './HeaderNav'
import { connect } from 'react-redux'
import { State } from '../../Types/types'
import { ASYNC_GET_PRODUCT_LIST, ASYNC_GET_TOPIC_LIST } from '../../Redux/Actions/asyncActions'

interface IMapStateToProps {
    topics: string[];
    selectedTopic: string
}

interface IDispatchStateToProps {
    getTopicList: () => void;
    selectedTopicList: (selectedTopic: string) => void
}
interface Actions {
    type: string;
    payload?: string 
}

const HeaderNavContainer : React.FC = () => {

    const mapStateToProps = (state : State) : IMapStateToProps => {
        return({
            topics: state.productsBlock.topics,
            selectedTopic: state.productsBlock.Products.topic
        })
    }

    const mapDispatchToProps = (dispatch : (action : Actions) => void) : IDispatchStateToProps => ({
        getTopicList: () => {
            dispatch({type:  ASYNC_GET_TOPIC_LIST})
        },
        selectedTopicList: (selectedTopic: string) => {
            dispatch({ type: ASYNC_GET_PRODUCT_LIST, payload:  selectedTopic }); 
        }
    })


    const HeaderNawWrap = connect(mapStateToProps, mapDispatchToProps)(HeaderNav)
    return ( <HeaderNawWrap/> )
}

export default HeaderNavContainer ;