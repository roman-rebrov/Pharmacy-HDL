import React from 'react'
// import { getSlidesList } from '../../API/api'
import Spinner from '../Spinner'

const Slider : React.FC  = (props : any) => {
    const getSlideList = () => {
        props.getSlides();

        // getSlidesList("/slides");
        // let slides = await getSlidesList("/slides");
        // await props.getSlides(slides);
    }


   if( props.slides.length === 0){ 
        getSlideList()
     }
    
    return(
        <div className="Slider-main-wrapper">
            { props.slides.length > 0 ? ( 
                <img src = {props.slides[0].baner} className=""  alt=""/>
             ):
                <Spinner/>
            }
        </div>
    )
};

export default Slider;