import React from 'react';
import { Global } from '@emotion/core';

import { Layout } from '@components/layout';
import { Transfer } from '@components/transfer';
import { Flex } from '@ui';

import { globalStyles } from '@theme';

const App = () => {
  return (
    <Layout as="main" dir="column" bg="#f3f3f3">
      <Global styles={globalStyles} />
      <Flex padding="2rem">Header</Flex>
      <Flex j="flex-start" align="center" pl="5rem" f="1">
        <Transfer percent={10} />
      </Flex>
    </Layout>
  );
};

export default App;
