import { defaultUserState } from '../data/defaultUser';
import { ContextProviderValues } from '../types';
import { createContext, useContext, useReducer } from 'react';

import { reducer } from './reducer';

const initialState = defaultUserState;

const Context = createContext<ContextProviderValues>({
  dispatch: () => null,
  state: initialState,
});

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ dispatch, state }}>{children}</Context.Provider>
  );
};

export const useUserContext = () => useContext(Context);
