const reducer =(state, action)=>{
    switch(action.type){
        case "CHANGE_COLOR":
            console.log('rwsbf')
            // return {...state, background: action.payload};
            // break;
        
        default :
            return {...state}
    }
    return state
}

export default reducer
