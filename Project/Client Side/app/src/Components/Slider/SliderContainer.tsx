import React from 'react'
import Slider from './Slider'
import { connect } from 'react-redux'
import '../../SASS/slider.sass'
import { ASYNC_GET_SLIDE_LIST } from '../../Redux/Actions/asyncActions'


const SliderContainer = () => {

    const mapStateToProps = (state : any) => {
        return({
            slides : [...state.slider]
        })
    };
    const mapDispatchToProps = (dispatch : any) => {
        return({
                getSlides: (slides : any) => {
                    dispatch({type : ASYNC_GET_SLIDE_LIST, payload: [...slides.list]})
                }
        })
    };


    const SliderWrap = connect(mapStateToProps, mapDispatchToProps)(Slider);

    return(<SliderWrap/>);
}

export default SliderContainer;