import axios from "axios"
import { useState, useEffect } from "react"
export const Allitems=()=>{
    const [products,setProducts]=useState("")
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/")
        .then((x)=>{
            setProducts([...x.data])
        })
        .catch((err)=>setProducts(`${err}`))
    },[])
    return products
}

const show=localStorage.getItem("show")?JSON.parse(localStorage.getItem("show")):[]
export const State1={
    data:show
}

const cart=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]
export const State2={
    data:cart
}

const number=localStorage.getItem("num")?JSON.parse(localStorage.getItem("num")):[]
export const amountState={
    data:number
} 

const count=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")).length:0
export const State3={
    count:count
}
