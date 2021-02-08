import React from 'react'
import Slider from './Slider'
import { connect } from 'react-redux'
import '../../SASS/slider.sass'


const SliderContainer = () => {

    const mapStateToProps = (state : any) => {
        return({
            slides : [...state.slider]
        })
    };
    const mapDispatchToProps = (dispatch : any) => {
        return({
                getSlides: (slides : any) => {
                    dispatch({type : "GET_SLIDE_LIST", payload: [...slides.list]})
                }
        })
    };


    const SliderWrap = connect(mapStateToProps, mapDispatchToProps)(Slider);

    return(<SliderWrap/>);
}

export default SliderContainer;