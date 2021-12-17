import React from 'react'
import  {actionCreators} from '../state/index'
import {useDispatch,useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';


function Shop() {
    const amount = useSelector(state => state.amount);
    const dispatch = useDispatch();
    const {upad,depositeMoney}=bindActionCreators(actionCreators,dispatch);
    return (
        <div>
            <h2>Deposite/withraw money</h2>
            <button className="btn btn-primary mx-2" onClick={()=>{upad(500)}}>
                -
            </button>
            Update Balance { amount}
            <button className="btn btn-primary mx-2" onClick={()=>{depositeMoney(700)} }>
                +
            </button>

        </div>

    )
}

export default Shop
