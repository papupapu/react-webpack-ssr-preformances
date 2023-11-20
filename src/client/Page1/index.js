import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import {
  increment,
  decrement,
  incrementByAmount,
  incrementByAmountAsync,
  selectCount,
} from '../../common/store/counter';

import './style.scss';

const App = () => {
  const count = useSelector(selectCount);
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const [amountToBeAdded, setAmountToBeAdded] = useState(2);
  const getAmountToBeAdded = e => setAmountToBeAdded(e.target.value);

  const doIncrement = () => dispatch(increment());
  const doDecrement = () => dispatch(decrement());
  const doIncrementByAmount = () => dispatch(incrementByAmount(Number(amountToBeAdded) || 0));
  const doIncrementByAmountAsync = () => dispatch(incrementByAmountAsync(Number(amountToBeAdded) || 0));

  return (
    <div className="test">
      ciao
      <div className="test__2">ciao</div>
      <div><Link to={'/giorno'}>aaa</Link></div>
      <div>
        <input
          type='number'
          aria-label='Set increment amount'
          value={amountToBeAdded}
          onChange={getAmountToBeAdded}
        />        
      </div>
      <div>
        <button
          type='button'
          onClick={doIncrementByAmount}
        >
          Increment by
        </button>
        -
        <button
          type='button'
          onClick={doIncrementByAmountAsync}
        >
          Increment by async
        </button>
      </div>
      <div>
        <button
          type='button'
          aria-label='Increment value'
          onClick={doIncrement}
        >
          +
        </button>
        <span>
          &nbsp;
          {count}
          &nbsp;
        </span>
        <button
          type='button'
          aria-label='Decrement value'
          onClick={doDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;
