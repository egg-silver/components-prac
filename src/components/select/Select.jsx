import React, { useState } from 'react';
import { styled } from 'styled-components';

const arr = ['리액트', '자바', '스프링', '노드'];

export default function Select({ position }) {
  const [choice, setChoice] = useState(arr[0]);
  const [open, setOpen] = useState(false);

  const handleBtn = () => {
    setOpen(!open);
  };

  const handleSelect = (item) => {
    console.log(item);
    setChoice(item);
    setOpen(false);
  };
  return (
    <>
      <Layout>
        <Box onClick={handleBtn}>
          {choice}
          <span class='material-symbols-outlined'>arrow_drop_down</span>
        </Box>

        {open && (
          <SelectLayout position={position}>
            {arr.map((item, index) => (
              <SelectItem key={index} onClick={() => handleSelect(item)}>
                {item}
              </SelectItem>
            ))}
          </SelectLayout>
        )}
      </Layout>
    </>
  );
}

const Box = styled.button`
  width: 250px;
  height: 50px;
  border: 1px solid #eee;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  align-items: center;
  font-size: 1rem;

  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  z-index: 999;
`;

const SelectItem = styled.div`
  height: 40px;
  border: 1px solid #eee;
  font-size: 1rem;
  line-height: 40px;
  background-color: white;
  cursor: pointer;
  padding: 0 10px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SelectLayout = styled.div`
  width: 250px;
  height: 160px;
  border-radius: 10px;
  border: 1px solid #eee;
  position: ${(props) => props.position};
  margin-top: ${(props) => (props.position === 'absolute' ? '55px' : '5px')};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  /* overflow-y: auto; //스크롤바 생김 */
`;
