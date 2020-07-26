// console.log('From index file')
//initalize store
const redux =require('redux')
const createStore=redux.createStore

//Create Action
const buy_cake ='Buy_Cake'

//Create Action creater

function buycake(){
    return{
        type:buy_cake,
        info:"My first action function"
    }
}

//Create Reducer

//(prevstate,action)=>new state
const initalstate={
    numOfCakes:10
}

const reducer=(state=initalstate,action)=>{
    switch(action.type){
        case buy_cake:return{
            numOfCakes : state.numOfCakes-1
        }
        default:return state
    }

}

//Create Store

const store=createStore(reducer)
console.log("Initali state",store.getState())
store.subscribe(()=>{console.log("Updated state",store.getState())})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
 
