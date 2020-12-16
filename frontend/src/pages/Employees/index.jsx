import React, {useState, useEffect} from 'react';
import { Table } from 'antd';

import * as S from './styles.js';
import 'antd/dist/antd.css';
import api from '../../services/api.js';

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get('employees').then((response) => {
      setEmployees(response.data);
      console.log(response.data);
    });
  }, []);

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <>
      <S.Header />
      <S.Content>
          <S.Title>Empresa da Livia</S.Title>
        <Table dataSource={dataSource} columns={columns} />
      </S.Content>
    </>
  )
};

export default Employees;
