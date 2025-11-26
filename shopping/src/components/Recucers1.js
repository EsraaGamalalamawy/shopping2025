import {State1} from "./states"
const Reducer1=(state=State1,action)=>{
    switch(action.type){
        case "DETAILS":
            localStorage.setItem("show",JSON.stringify(action.ele))
            return{
                data:action.ele
            }
        default:
            return state
    }
}
export default Reducer1 