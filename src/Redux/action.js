//Create ActionCreator functions here
import {GET_SHOES_REQUEST,GET_SHOES_SUCCESS,GET_SHOES_FAILURE,UPDATE_SHOE_COUNT_REQUEST,UPDATE_SHOE_COUNT_SUCCESS,UPDATE_SHOE_COUNT_FAILURE} from "./actionTypes"

const getShoesRequest=()=>{
    return {type:GET_SHOES_REQUEST}
}

const getShoesSuccess=(payload)=>{
    return {type:GET_SHOES_SUCCESS,payload}
};
const getShoesFailure=()=>{
    return {type:GET_SHOES_FAILURE}
}

export {getShoesFailure,getShoesSuccess,getShoesRequest};