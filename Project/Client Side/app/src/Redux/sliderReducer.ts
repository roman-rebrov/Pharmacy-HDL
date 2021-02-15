import { Action, GET_SLIDE_LIST } from './Actions/Actions'

const slides : [] = []

const sliderReducer = (slidesInit  : []= slides, action  : Action ) : {}[] => { 
    switch(action.type){
        case GET_SLIDE_LIST:
            let arr : {}[] =  [...action.payload]

            return([...arr])
    };
    return slidesInit;
}
export default sliderReducer