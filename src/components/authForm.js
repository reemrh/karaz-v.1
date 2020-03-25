import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0 0;
  padding: 0 0;
  display: flex;

`;
const Div = styled.div`
  width: 50%;
  background-color:#EFE4E4;
  display: flex;
  flex-direction: column;
  padding:0px 0px;
  margin 0px;

`;
const TopDiv = styled.div`
  width: 100%;
  display: flex;
  justify-contnent:space-between;

  `;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding:10rem 2rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Button = styled.button`
  background: linear-gradient(to bottom, #6371c7, #5563c1);
  border-color: #3f4eae;
  border-radius: 3px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Logo = styled.img`
  width: 20%;
`;

const Error = styled.div`
  background-color: red;
`;

export { Form, Input, Button, Logo, Card, Error,Div,TopDiv};