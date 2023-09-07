import React, { useState } from 'react';
import styled from 'styled-components';
// import Button from '../components/button/Button';

export default function ButtonArea() {
  const [click, setClick] = useState(false);
  const handleBtn = () => {
    setClick(!click);
    setTimeout(() => setClick(false), 150);
  };

  return (
    <>
      <Layout>
        <Button
          color='white'
          width='200px'
          height='50px'
          border='3px solid skyblue'
          fontWeight='bold'
        >
          <Text>
            Large Primary Button
            <span class='material-symbols-outlined'>chevron_right</span>
          </Text>
        </Button>

        <Button
          color='skyblue'
          width='200px'
          height='50px'
          onClick={handleBtn}
          click={click}
        >
          Medium
        </Button>

        <Button color='skyblue' width='200px' height='50px'>
          Small
        </Button>
      </Layout>

      {/* ------------------------------------------------- */}
      <Layout>
        <Button
          color='white'
          width='200px'
          height='50px'
          border='3px solid pink'
          fontWeight='bold'
        >
          <Text>
            Large Primary Button
            <span class='material-symbols-outlined'>notifications</span>
          </Text>
        </Button>

        <Button color='pink' width='200px' height='50px' fontColor='white'>
          Medium
        </Button>

        <Button color='pink' width='200px' height='50px' fontColor='white'>
          Small
        </Button>
      </Layout>
    </>
  );
}

const Layout = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
`;

const Button = styled.button`
  border: none;
  border-radius: 1rem;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontColor};
  line-height: ${(props) => props.height};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    filter: brightness(80%);
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
`;
