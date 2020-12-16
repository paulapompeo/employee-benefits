import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <S.Header />
      <S.Content>
        <S.Title>Empresas</S.Title>

        <S.Companies>
          {/* <Link to={} /> */}
          <a href="teste">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxillRIfXpKXCxZYyewPh_3vorbGIGPEgzMw&usqp=CAU"
              alt="Company Logo"
            />
            <div>
              <strong>Nome Fantasia</strong>
              <p>Nome de Registro da Empresa</p>
            </div>

            <FiChevronRight size={32} />
          </a>

          <a href="teste">
            <img
              src="https://www.wikihow.com/images/7/7b/Company-Logo.png"
              alt="Company Logo"
            />
            <div>
              <strong>Nome Fantasia</strong>
              <p>Nome de Registro da Empresa</p>
            </div>

            <FiChevronRight size={32} />
          </a>
          <a href="teste">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0oyirkrTKbCvloGkzJJdNJ3ey-y66Xz34Q&usqp=CAU"
              alt="Company Logo"
            />
            <div>
              <strong>Nome Fantasia</strong>
              <p>Nome de Registro da Empresa</p>
            </div>

            <FiChevronRight size={32} />
          </a>
        </S.Companies>

        <S.Form action="">
          <input placeholder="Cadastrar uma nova empresa" />
          <button type="submit">Cadastrar</button>
        </S.Form>
      </S.Content>
    </>
  );
};

export default Dashboard;
