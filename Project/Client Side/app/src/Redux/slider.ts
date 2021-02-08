import {State} from '../Types/types'

const slides : [] = []

const slider = (slidesInit = slides, action  : any ) : any => {
    switch(action.type){
        case "GET_SLIDE_LIST":
            console.log(action.payload);
            let arr : any =  [...action.payload]

            return([...arr])
    };
    return slidesInit;
}
export default slider