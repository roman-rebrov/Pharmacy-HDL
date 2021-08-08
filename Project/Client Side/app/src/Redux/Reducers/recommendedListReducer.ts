import { Action, GET_RECOMMENDED_LIST } from "../Actions/Actions";


const recommendedList : [] = []
const recommendedListReducer = (recommended : [] = recommendedList, action : Action) => {
    
    switch(action.type) {
        case GET_RECOMMENDED_LIST:
            return [...action.payload]
    }
    return recommended
}

export default recommendedListReducer;