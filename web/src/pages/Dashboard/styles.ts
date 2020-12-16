import styled from 'styled-components';
import { shade } from 'polished';

import shape from '../../assets/shape.svg';

export const Header = styled.div`
  background: url(${shape}) no-repeat;
  background-size: cover;
  height: 156px;
`;

export const Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #2b3939;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 900px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 240px;
    height: 70px;
    background: #2b3939;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.3, '#2b3939')};
    }
  }
`;

export const Companies = styled.div``;
