import React from 'react';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <S.Header />
      <S.Content>
        <S.Title>Empresas</S.Title>

        <S.Form action="">
          <input placeholder="Cadastrar uma nova empresa" />
          <button type="submit">Cadastrar</button>
        </S.Form>

        <S.Companies>
          {/* <Link to={} /> */}
          <a href="teste">
            <img
              src="https://colorate.azurewebsites.net/SwatchColor/8D1558"
              alt="Company Logo"
            />
            <div>
              <strong>Nome Fantasia</strong>
              <p>Nome de Registro da Empresa</p>
            </div>
          </a>
        </S.Companies>
      </S.Content>
    </>
  );
};

export default Dashboard;
