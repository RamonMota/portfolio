import { createContext, useContext, useReducer, ReactNode } from 'react';

type IIdContext = {
  id: { idName: string };
  setId: (newId: string) => void;
};

const IdContext = createContext<IIdContext>({
  id: { idName: '' },
  setId: () => { },
});

const SET_SHARED_STRING = '';

const reducer = (id: { idName: string }, action: {
  type: string;
  payload: string
}) => {
  switch (action.type) {
    case SET_SHARED_STRING:
      return { ...id, idName: action.payload };
    default:
      return id;
  }
};

export const IdProvider = ({ children }: {
  children: ReactNode
}) => {
  const [id, dispatch] = useReducer(reducer, { idName: '' });

  const setId = (newId: string) => {
    dispatch({ type: SET_SHARED_STRING, payload: newId });
  };

  return (
    <IdContext.Provider value={{ id, setId }}>
      {children}
    </IdContext.Provider>
  );
};

export const useIdContext = () => {
  return useContext(IdContext);
};
