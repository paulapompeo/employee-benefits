import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import * as S from './styles';

interface Company {
  name: string;
  trade: string;
}

const Dashboard: React.FC = () => {
  const [newCo, setNewCo] = useState('');
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    api.get('companies').then(response => {
      setCompanies(response.data);
      console.log(response.data);
    });
  }, []);

  // function handleAddCompanies(): void {
  //   setCompanies([...companies, `new ${Date.now()}`]);
  // }

  return (
    <>
      <S.Header />
      <S.Content>
        <S.Title>Empresas</S.Title>

        <S.Companies>
          {companies.map(company => (
            <a key={company.name} href="teste">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxillRIfXpKXCxZYyewPh_3vorbGIGPEgzMw&usqp=CAU"
                alt="Company Logo"
              />
              <div>
                <strong>{company.name}</strong>
                <p>{company.trade}</p>
              </div>

              <FiChevronRight size={32} />
            </a>
          ))}
        </S.Companies>

        <S.Form action="">
          <input
            value={newCo}
            onChange={e => setNewCo(e.target.value)}
            placeholder="Cadastrar uma nova empresa"
          />
          <button type="submit">Cadastrar</button>
        </S.Form>
      </S.Content>
    </>
  );
};

export default Dashboard;
