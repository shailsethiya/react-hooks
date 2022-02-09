import React, { useContext } from 'react';
import { userContext } from './App';

export const ComponentC = () => {
  const data = useContext(userContext);
  return (<h1>{data}</h1>);
};
