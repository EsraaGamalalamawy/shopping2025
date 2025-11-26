import { createStore } from "redux"
import { combineReducers } from "redux"
import Reducer1 from "./Recucers1"
import Reducer2 from "./Reducer2"
import Reducer3 from "./Reducer3"
import AmountReduce from "./amountReduce"
const rootReducer=combineReducers({
    details:Reducer1,
    tocart:Reducer2,
    amount:AmountReduce,
    counter:Reducer3,
})
export const store=createStore(rootReducer)