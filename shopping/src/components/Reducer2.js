import { useSelector } from "react-redux"
import {State2} from "./states"
const Reducer2=(state=State2,action)=>{
    const olditems=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]
    switch(action.type){
        case "To_Cart":
            const existed=olditems.find(item=>{return item.title===action.ele.title})
            const amount=localStorage.getItem("num")?JSON.parse(localStorage.getItem("num")):[]
            if(existed){
                return state
            }else{
                localStorage.setItem("cart",JSON.stringify([...olditems,action.ele]))
                localStorage.setItem("num",JSON.stringify([...amount,1]))
                return{
                    data:[...olditems,action.ele],
                }
            }
        default:
            return state
    }
}
export default Reducer2