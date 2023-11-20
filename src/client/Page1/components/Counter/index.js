import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  increment,
  decrement,
  incrementByAmount,
  incrementByAmountAsync,
  selectCount,
} from '../../../../common/store/counter';

import Grid from '../../../UI/Grid';
import GridItem from '../../../UI/GridItem';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const [amountToBeAdded, setAmountToBeAdded] = useState(2);
  const getAmountToBeAdded = e => setAmountToBeAdded(e.target.value);

  const doIncrement = () => dispatch(increment());
  const doDecrement = () => dispatch(decrement());
  const doIncrementByAmount = () => dispatch(incrementByAmount(Number(amountToBeAdded) || 0));
  const doIncrementByAmountAsync = () => dispatch(incrementByAmountAsync(Number(amountToBeAdded) || 0));

  return (
    <Grid direction="column">
      <GridItem behavior="fixed">
        <Grid>
          <GridItem behavior="fixed">
            <button
              type='button'
              aria-label='Increment value'
              onClick={doIncrement}
            >
              +
            </button>
          </GridItem>
          <GridItem align="middle">
            {count}
          </GridItem>
          <GridItem behavior="fixed">
            <button
              type='button'
              aria-label='Decrement value'
              onClick={doDecrement}
            >
              -
            </button> 
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem behavior="fixed">
        <Grid direction="column">
          <GridItem behavior="fixed">
            <input
              type='number'
              aria-label='Set increment amount'
              value={amountToBeAdded}
              onChange={getAmountToBeAdded}
            />
          </GridItem>
          <GridItem behavior="fixed">
            <Grid justify="space-between">
              <GridItem behavior="fixed">
                <button
                  type='button'
                  onClick={doIncrementByAmount}
                >
                  Increment by
                </button>
              </GridItem>
              <GridItem behavior="fixed">
                <button
                  type='button'
                  onClick={doIncrementByAmountAsync}
                >
                  Increment by async
                </button> 
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </GridItem>      
    </Grid>
  );
};

export default Counter;
