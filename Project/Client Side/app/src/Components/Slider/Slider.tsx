import React from 'react'
import { Link } from 'react-router-dom';
import { SliderType } from '../../Types/types';
// import { getSlidesList } from '../../API/api'
import Spinner from '../Spinner'

interface Props {
    slides: SliderType[];
    getSlides : () => void;
}

const Slider : React.FC<Props>  = (props ) => {
    let [ slideMoving, setSlideMoving ] = React.useState(0);
    let [ dotIndex, setDotIndex] = React.useState(0);

    const getSlideList = () => { 
        props.getSlides();
    };
    
    
    const sliderInterval = (index : number) => {
        let lengthSlide = props.slides.length;
        if(index != -1) {
            let calc = index * 100;
            setSlideMoving(-calc);
        }else{
            setDotIndex((i : number)  => i  < lengthSlide - 1? i + 1: 0);

            setSlideMoving((cur : number) => {

                if (cur <= lengthSlide *-100 + 100 ){
                    return  0;
                }else {
                    return   cur - 100;
                }
            })
        };

    };
    
    React.useEffect(() => {
            let intervalSlider = setInterval(() => {
                sliderInterval(-1)
            }, 6000);
        return () => {return clearInterval(intervalSlider)};
    }, [props.slides.length])

    React.useEffect(() => {

        if( props.slides.length === 0){ 
             getSlideList()
          };
    })
    

     
    return(
        <div className="slider-container">
            <div className="slider-main-wrapper" 
                style={{left: slideMoving + "%"}}
                >
                { props.slides.length > 0 ? ( 
                    props.slides.map((item : SliderType, i : number) => {
                        
                        return(
                            <div className="slide-wrap"  key= {item.id + i}>
                                <Link  to={"/productViewer/product/" + props.slides[i].id}>
                                    <img src = {props.slides[i].baner} className=""  alt=""/>
                                </Link>
                                    <span className="slide-text">{props.slides[i].name}</span>
                                </div>
                        )
                    })
                    ) :  <Spinner/>
                }
            </div>
                <div className="slider-dots-container">
                    {
                        props.slides.map((item : SliderType, i : number) => <div key={item.id + i} className={ i === dotIndex? "slide-dot active" : "slide-dot" }
                            onClick={() =>{
                                 sliderInterval(i)
                                 setDotIndex(i)
                                }}
                        ></div> )
                    }
                </div>
        </div>
    )
};

export default Slider;