import  axios from 'axios' 
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

export const newOrderAPI = async( props : any ) => {
     try {
          return await instance.post(props)
               .then( response => response.data )
               .catch( err => console.log(err) )
     } catch (err) {
          console.log(err);
     }
}