import React, { useState } from 'react';
import BasicInput from '../components/input/Input';
import { styled } from 'styled-components';

export default function InputArea() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const basicInput = (e) => {
    setName(e.target.value);
  };

  const priceInput = (e) => {
    // 숫자 이외의 문자 제거 후 숫자로 변환
    const formattedPrice = Number(e.target.value.replace(/[^0-9]/g, ''));
    setPrice(formattedPrice);

    const inputText = e.target.value;
    if (/[^0-9]/.test(inputText)) {
      // 숫자 이외의 문자가 포함된 경우
      setErrorMessage('숫자만 입력해주세요.');
    } else {
      setErrorMessage('');
      const formattedPrice = Number(inputText);
      setPrice(formattedPrice);
    }
  };

  const handleInput = () => {
    alert(`name:${name}, price:${price}`);
  };

  return (
    <>
      <InputBox>
        <BasicInput label={'이름'} value={name} onChange={basicInput} />
        <BasicInput
          type={'text'} // 타입을 text로 변경
          label={'가격'}
          value={price.toLocaleString('ko-KR')}
          onChange={priceInput}
        />
        <Button onClick={handleInput}>확인</Button>
        {/* {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>} */}
      </InputBox>
    </>
  );
}

const InputBox = styled.div`
  display: flex;
  align-items: center;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
`;

const Button = styled.button`
  width: 70px;
  height: 30px;
  background-color: skyblue;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 800;
`;
