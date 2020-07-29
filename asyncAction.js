const redux =require('redux')
const createStore = redux.createStore

//inital state

const initalState={
    loading:false,
    user:[],
    error:''
}


//Define action

const FETCH_USER_REQUEST="FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS="FETCH_USER_SUCCESS"
const FETCH_USER_ERROR="FETCH_USER_ERROR"

//define action creater

const fetchUsersRequest=()=>{
    return{
        type:FETCH_USER_SUCCESS
    }
}

const 


