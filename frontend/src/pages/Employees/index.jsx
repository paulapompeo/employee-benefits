import React, {useState, useEffect} from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Table } from 'antd';

import * as S from './styles.js';
import 'antd/dist/antd.css';

import api from '../../services/api.js';

const Employees = () => {
  const [company, setCompany] = useState([])
  const [employee, setEmployee] = useState([])

  const { params } = useRouteMatch();

  useEffect(() => {
    api.get(`/companies/${params.company}`).then((response) => {
      setCompany(response.data)
      console.log(response.data)
    });
    
    api.get(`/companies/${params.company}/employees`).then((response) => {
      setEmployee(response.data)
      console.log(response.data[0])
    });

    // const [company, employee] = await Promise.all([
    //   api.get(`/companies/${params.company}`),
    //   api.get(`/companies/${params.company}/employees`)
    // ])


    // async function loadData() {
    //   const company = await api.get(`/companies/${params.company}`);
    //   const employee = await api.get(`/companies/${params.company}/employees`);
    //   console.log(employee)
    // }
  }, [params.company, params.employee]);

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
          <S.Title>{company.name}</S.Title>


          {company.address}

          {/* {employee.name} */}

          {/* ta certo, mas se da reload diz 'cannot read property map of undefined' */}
          {employee.map(employee => (
            <p key={employee.name}>
              {employee.name}
            </p>
          ))}

        <Table dataSource={dataSource} columns={columns} />
      </S.Content>
    </>
  )
};

export default Employees;
