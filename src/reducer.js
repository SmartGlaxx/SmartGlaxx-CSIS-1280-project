const reducer =(state, action)=>{
    switch(action.type){
        case "CHANGE_COLOR":
            return {...state, background: action.payload};
            break;
        
        default :
            return {...state}
    }
    return state
}

export default reducer
