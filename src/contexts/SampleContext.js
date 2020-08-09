import createContext from './createContext';

/**
 * Usage
 * ---------------------
 * import React, { useContext} from 'react';
 * import { Context as SampleContext } from 'contexts/SampleContext.js';
 * import { Provider as SampleProvider } from 'contexts/SampleContext.js';
 *
 * const App = () => {
 *  const [ state, someAction ] = useContext(SampleContext);
 *
 *  return <><a onClick={someAction}>{state.someValue}</a></>
 * }
 *
 * export default () => {
 *  return (
 *    <SampleProvider>
 *      <App />
 *    </SampleProvider>
 *  )
 * }
 */

const sampleReducer = (state, action) => {
  switch (action.type) {
    case 'some_action':
      return [...state, {}];
    default:
      return state;
  }
};

const someAction = (dispatch) => {
  return () => {
    dispatch({ type: 'some_action' });
  };
};

export const { Context, Provider } = createContext(
  sampleReducer,
  { someAction },
  []
);
