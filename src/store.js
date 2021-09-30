import React, {createContext, useReducer} from 'react';

const initialState =  {
  text:localStorage.getItem('document').toString(),
  saving:false
}
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'text':
          state.text = action.data
        return state;
      case 'saving':
          state.saving = action.data
        return state;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }