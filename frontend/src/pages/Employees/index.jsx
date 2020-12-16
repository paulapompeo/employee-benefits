import React, {useState, useEffect} from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Table } from 'antd';

import * as S from './styles.js';
import 'antd/dist/antd.css';
import api from '../../services/api.js';

const Employees = () => {
  const { params } = useRouteMatch();
  console.log(params)
  console.log(params.company)

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get(`/employees`).then((response) => {
      setEmployees(response.data);
      console.log(response.data);
    });
  }, []);

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      lastname: 'Pompeo',
      cpf: 3232432,
      email: 'mikepompeo@gmail.com',
    },
    {
      key: '2',
      name: 'John',
      lastname: 'Doe',
      cpf: 3232432,
      email: 'mikepompeo@gmail.com',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Sobrenome',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
      key: 'cpf',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return (
    <>
      <S.Header />
      <S.Content>
          <S.Title>{params.company}</S.Title>
        <Table dataSource={dataSource} columns={columns} />
      </S.Content>
    </>
  )
};

export default Employees;
