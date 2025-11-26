
export function Details(ele) {
    return{
        type:"DETAILS",
        ele:ele
    }
}
export function ToCart(ele) {
    return{
        type:"To_Cart",
        ele:ele
    }
}
export function Amount(option,index) {
    return{
        type:option,
        index:index,
    }
}
export function Count() {
    return{
        type:"COUNTER"
    }
}
