import { PROCESSING , Action } from "../Actions/Actions";

const processInit : boolean = false;

const processReducer = (process =  processInit, action : Action) => {
    switch(action.type){
        case PROCESSING:
            return(action.payload)
    };
    return(process);
};

export default processReducer;