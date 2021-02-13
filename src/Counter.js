import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/reducer';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      当前的数字是{counter.value}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}

export default Counter;