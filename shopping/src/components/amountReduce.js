import {amountState} from "./states"
const AmountReduce=(state=amountState,action)=>{
    const amount=localStorage.getItem("num")?JSON.parse(localStorage.getItem("num")):[]
    switch(action.type){
        case "add":
            return{
                data:[...state.data,1]
            }
        case "plus":
            localStorage.setItem("num",JSON.stringify(state.data.map((ele,index)=>action.index===index?ele+1:ele)))
            return {data:state.data.map((ele,index)=>action.index===index?ele+1:ele)}
        case "minus":
            if(state.data[action.index]===1){
                return state
            }else{
                localStorage.setItem("num",JSON.stringify(state.data.map((ele,index)=>action.index===index?ele-1:ele)))
                return {data:state.data.map((ele,index)=>action.index===index?ele-1:ele)}
            }
        default:
            return state
    }
}
export default AmountReduce