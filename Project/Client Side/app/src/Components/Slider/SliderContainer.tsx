import React from 'react'
import Slider from './Slider'
import { connect } from 'react-redux'
import '../../SASS/slider.sass'
import { ASYNC_GET_SLIDE_LIST } from '../../Redux/Actions/asyncActions'
import { State } from '../../Types/types'


const SliderContainer : React.FC = () => {

    const mapStateToProps = (state : State) : {} => {
        return({
            slides : [...state.slider]
        })
    };
    const mapDispatchToProps = (dispatch : (action : {type : string}) => void) => {
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