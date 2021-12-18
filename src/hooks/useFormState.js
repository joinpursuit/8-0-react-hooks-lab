import { useState } from 'react';

export const useFormState = (initialState) => {
  const [state, setState] = useState(initialState);

  const updateState = (value) => {
    setState(value);
  };

  const reset = () => setState('');
  return [state, updateState, reset];
};
