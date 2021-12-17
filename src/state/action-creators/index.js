export const depositeMoney=(amount)=>{
    return (dispatch)=>{
        dispatch(
           { type: 'deposite',
            payload : amount}
        )
    }
}

export const upad=(amount)=>{
    return (dispatch)=>{
            dispatch(
               { type: 'upad',
                payload : amount
            })
        }
    
}