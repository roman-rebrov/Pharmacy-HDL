import  axios from 'axios' 
import { INewOrder } from '../Components/PayComponent/PayComponent';
import { IOrders } from '../Redux/Reducers/newOrderReducer';
import { ProdObj, ProductListType, SliderType } from '../Types/types';

const instance = axios.create(
     {
     baseURL : "http://localhost:3219",
}
);

export const getProductsAPI = async(props : string) => {
     try{
          return await instance.get<ProductListType>( props )
          .then(response => response.data )
          .catch(err => console.log(err))
     } catch (err) { 
          console.log(err);
     }
}

export const getProductForViewAPI = async(props : string) => {
     try{
          return await instance.get<ProdObj>( props )
          .then(response => response.data )
          .catch(err => console.log(err))
     } catch (err) {
          console.log(err);
     }
}

export const getSlidesListAPI = async(props : string) => {
     try{
          return await instance.get<{list : SliderType[]}>(props)
                    .then(response => response.data.list )
                    .catch(err => console.log(err))
          } catch(err){
               console.log(err);
          }
}

export const getTopicListAPI = async(props: string) => {
     try{
          return await instance.get<string[]>(props)
                    .then(response => response.data )
                    .catch(err => console.log(err))
          } catch(err){
               console.log(err);
          }
}



export const getRecommendedListAPI = async(props : string) => {
     try{
          return await instance.get<ProdObj[]>(props)
                    .then(response => response.data )
                    .catch(err => console.log(err))
          } catch(err){
               console.log(err);
          }
}

export const newOrderAPI = async( props : [string ,  INewOrder] ) => {
     try {
          return await instance.post<IOrders>(props[0], props[1])
               .then( response => response.data )
               .catch( err => console.log(err) )
     } catch (err) {
          console.log(err);
     }
}