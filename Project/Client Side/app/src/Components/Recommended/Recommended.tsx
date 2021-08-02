import React from 'react'
import { ProdObj } from '../../Types/types';
import Spinner from '../Spinner';
import ProdCardContainer from '../ProductCards/ProdCardsContainer'
import '../../SASS/Recommended.sass'
import { TargetElement } from '@testing-library/user-event';

interface IProps {
    list: ProdObj[]
    getRecommendedList: () => void

}

const Recommended : React.FC<IProps> = (props) => {

    let list  :  ProdObj[]  = props.list;
    // const getRecommendedList : () => void  =  props.getRecommendedList;
    if(list.length === 0){
        props.getRecommendedList()
    }


    return (
        <div className='recommended-container'>

            <div className="recommended-title title">
                    Recommended
            </div>
            <div className="recommended-list-wrap">
                    { list.length  === 0 &&  <Spinner/> }
                    {
                        list.map((item : ProdObj, i : number) :  JSX.Element => {
                            return <ProdCardContainer    
                            key={item.id + i}
                            productObject={item}
                            />
                        })  
                    }
            </div>
        </div>
    )
}

export default Recommended
