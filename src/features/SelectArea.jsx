import React from 'react';
import { styled } from 'styled-components';

import Select from '../components/select/Select';

export default function SelectArea() {
  return (
    <>
      <Layout>
        <Select />
        <Select position='absolute' />
      </Layout>
    </>
  );
}

const Layout = styled.div`
  border: 5px solid grey;
  width: 100%;
  height: 150px;
  overflow: hidden;
  display: flex;
`;
