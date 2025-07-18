
import axios from "../../api/Config"
import { loadProducts } from "../reducers/ProductReducer";

export const asyncloadProducts = ()=> async(dispatch, getState)=>{
    try{
        const {data}= await axios.get("/products");
        dispatch(loadProducts(data));
    }catch(err){
        console.log(err)
    }
}