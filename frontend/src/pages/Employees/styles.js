import styled from 'styled-components';

export const Header = styled.div`
  background: rgb(252,50,140);
  background: linear-gradient(90deg, rgba(252,50,140,1) 0%, rgba(252,105,101,1) 85%);
  height: 320px;
`;

export const Content = styled.div`
  max-width: 960px;
  margin: -156px auto;
  padding: 40px 20px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
    &:hover {
      color: #666;
    }
    svg {
      margin-right: 4px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
`;
