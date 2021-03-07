export const updateDataCarts = (totalCarts) =>{ //function biasa nerima parameter
    console.log('Action jalan')
    return{
        type: 'UPDATE_TOTALCARTS', //ini type bebas tapi harus disamain sama yang di reducers
        payload: totalCarts
    }
}