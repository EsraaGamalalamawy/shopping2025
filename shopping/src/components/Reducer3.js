import {State3} from "./states"
const Reducer3=(state=State3,action)=>{
    switch(action.type){
        case "COUNTER":
            return{
                count:localStorage.getItem("cart")?(JSON.parse(localStorage.getItem("cart")).length):1
            }
        default:
            return state
    }
}
export default Reducer3