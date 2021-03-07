const initialState = {
    totalKeranjang: 0
}

function dataCartsReducer(state = initialState, action){
    switch(action.type){
        case 'UPDATE_TOTALCARTS' :
            console.log('reducer jalan')
            return {totalKeranjang: action.payload}
        default:
            return state
    }
}

export default dataCartsReducer