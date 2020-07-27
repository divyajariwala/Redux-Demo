// console.log('From index file')
//initalize store
const redux =require('redux')
const reduxLogger=require('redux-logger')
const createStore=redux.createStore
const combinReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
//initalize middleware
// const reduxLogger=require('redux-logger')
const logger=reduxLogger.createLogger


//Create Action
const buy_cake ='Buy_Cake'
const buy_icecream ='Buy_icecream'

//Create Action creater

function buycake(){
    return{
        type:buy_cake,
        info:"My first action function"
    }
}
function buyicecream(){
    return{
        type:buy_icecream,
        info:"My seocund action function"
    }
}

//Create Reducer

//(prevstate,action)=>new state
// const initalstate={
//     numOfCakes:10
// }
//Splite the state

const initalIcecreamState={
    numOfIcecream:10
}

const initalCakeState={
    numOfCakes:10
}

//Reducer
const cakeReducer=(state=initalCakeState,action)=>{
    switch(action.type){
        case buy_cake:return{
            numOfCakes : state.numOfCakes-1
        }
        default:return state
    }

}
const icecreamReducer=(state=initalIcecreamState,action)=>{
    switch(action.type){
        case buy_icecream:return{
            numOfIcecream : state.numOfIcecream-1
        }
        default:return state
    }

}
//Define root reducer for combining both reducer
const rootReducer=combinReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})
//Create Store

const store=createStore(rootReducer,applyMiddleware(logger))
console.log("Initali state",store.getState())
store.subscribe(()=>{})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
store.dispatch(buyicecream())

 
