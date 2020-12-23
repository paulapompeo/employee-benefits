import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  background: rgb(252,50,140);
  background: linear-gradient(90deg, rgba(252,50,140,1) 0%, rgba(252,105,101,1) 85%);
  height: 320px;
`;

export const Content = styled.div`
  max-width: 960px;
  margin: -156px auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #FEECF3;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 960px;

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

export const Companies = styled.div`
  margin-top: 80px;
  max-width: 960px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.16);

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin-left: 24px;
      flex: 1;
      display: flex;
      flex-direction: column; 

      strong {
        font-size: 20px;
        color: #2b3939;
      }

      p {
        font-size: 12px;
        color: #4B4F57;
        margin-top: 8px;
      }

      span {
        font-size: 12px;
        color: #4B4F57;
      }

        ul {
          list-style-type: none;
          display: flex;
        }

        li {
          color: #FFF;
          text-decoration: none;
          background: rgba(252,105,101,1);
          padding: 8px;
          border-radius: 5px;
          font-size: 12px;

          & + li {
            margin-left: 8px;
          }
        }
      }
    }

    svg {
      margin-left: auto;
      color: #2b3939;
    }
  }
`;
