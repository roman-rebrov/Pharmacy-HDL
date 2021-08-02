import React from 'react'
import Slider from './Slider'
import { connect } from 'react-redux'
import '../../SASS/slider.sass'
import { ASYNC_GET_SLIDE_LIST } from '../../Redux/Actions/asyncActions'
import { SliderType, State } from '../../Types/types'

interface IMapStateToProps {
    slides: SliderType[];
}


interface IMapDispatchToProps {
    getSlides : () => void;
}


const SliderContainer : React.FC = () => {

    const mapStateToProps = (state : State) : IMapStateToProps => {
        return({
            slides : [...state.slider],
        })
    };
    const mapDispatchToProps = (dispatch : (action : {type : string}) => void) : IMapDispatchToProps=> {
        return({
                getSlides: () => {
                    dispatch({type : ASYNC_GET_SLIDE_LIST})
                    // dispatch({type : ASYNC_GET_SLIDE_LIST, payload: [...slides.list]}) 
                }
        })
    };


    const SliderWrap = connect(mapStateToProps, mapDispatchToProps)(Slider);

    return(<SliderWrap/>);
}

export default SliderContainer;