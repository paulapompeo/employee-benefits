import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const Employees: React.FC = () => {
  const { params } = useRouteMatch();

  return (
    <>
      <h1>Employees: </h1>
      <h1>{params}</h1>
    </>
  );
};

export default Employees;
