import React  from 'react'
import '../../SASS/HeaderNav.sass'
import { useHistory } from 'react-router-dom'


interface IProps {
    topics: string[];
    selectedTopic: string;
    getTopicList: () => void;
    selectedTopicList: (selectedTopic: string) => void
}

const selectedTopicStyleHandler = (a : string, b : string) => {
    if(a === b){
        return "  active-topic"
    }
}

const HeaderNav : React.FC<IProps>  = (props) => {
    
    const history = useHistory();


    const topicRequestHandler = (topic : string) => {
        if(topic.length > 0){
            history.push("/catalog?topic=" + topic);
            props.selectedTopicList("?topic=" + topic);
        }else{
            console.log(topic.length);
            
            history.push("/catalog");
            props.selectedTopicList("");
        }
    }

    React.useEffect(() => {
       if(props.topics.length === 0) {props.getTopicList()}
    }, [])


    return (
        <div className="block">
            <div className="header-nav">
                    <div className="nav-header-catalog" onClick={() => {topicRequestHandler("")}} >
                        <i className="fas fa-bars"></i>
                        <div className="catalog-text">
                                Catalog
                        </div>
                    </div>
                    <div className="header-nav-topics-container">
                        {
                           ( props.topics.length > 0) && props.topics.map((item : string)=>{
                            return(<div className={"header-nav-topic-list  " + selectedTopicStyleHandler( props.selectedTopic , item)  } onClick={() => {topicRequestHandler(item)}}>
                                    { item }
                            </div>)
                            })
                        }
                    </div>

            </div>
        </div>
    )
}

export default HeaderNav


