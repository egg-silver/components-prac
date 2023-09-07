import React from 'react';
import styled from 'styled-components';

export default function BasicInput({ label, value, onChange, type }) {
  return (
    <>
      <InputLayout>
        <Label>{label}</Label>
        
        <Input value={value} onChange={onChange} type={type} />
      </InputLayout>
    </>
  );
}

const Input = styled.input`
  border: 1px solid grey;
  width: 12rem;
  height: 2.5rem;
  border-radius: 1rem;
`;

const Label = styled.label`
  font-size: ${(props) => props.theme.medium};
  margin-right: 0.3rem;
`;

const InputLayout = styled.div`
  display: flex;
  margin: 1rem;
  align-items: center;
`;


const info = styled.div`
  
`