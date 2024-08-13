import { change } from '@/store/reducers/DasboardSlice';
import React from 'react'
import { useDispatch } from 'react-redux';

const Transactions = () => {
    const dispatch = useDispatch();
  return (
    <>
      <div>Transaction</div>
      <button className="p-4 bg-yellow-300"
      onClick={() => dispatch(change(8))}>Go back</button>
    </>
  )
}

export default Transactions