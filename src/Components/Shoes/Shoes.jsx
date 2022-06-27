import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";
import axios from "axios";

import ShoeCard from "./ShoeCard/ShoeCard";

import "./shoes.css"

const Shoes = () => {
  const dispatch=useDispatch();
    // const [todos,setTodos]=useState([])
    const shoesList=useSelector(state=>state.shoes)
    const getshoes=()=>{
        dispatch(getShoesRequest())
        axios

        .get("http://localhost:8080/shoes")

        .then((r)=>{dispatch(getShoesSuccess(r.data));})

        .catch((e)=>dispatch(getShoesFailure(e)));
        
    }
    useEffect(()=>{
        getshoes()
    },[])

    // console.log(shoesList);
  return <div className="rohan">

    
    {shoesList.map((shoe)=>{
    return(

      <ShoeCard key={shoe.id} shoe={shoe}/>
    )
  }
    )}</div>;
};

export default Shoes;