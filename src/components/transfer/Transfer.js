import React from 'react';

import { useMachine } from '@xstate/react';
import { transferMachine } from '@state/machines/transfer';

import { Box, Flex, Progress, Button } from '@ui';

import { transformByState, labels, titles } from './helpers';

const Transfer = () => {
  const [state, send] = useMachine(transferMachine);
  const { percent } = state.context;

  console.log(state);

  const label = transformByState(state.value, labels);
  const title = transformByState(state.value, titles);

  return (
    <Flex
      minH="40vw"
      minW="30vw"
      bg="white"
      radius="10px"
      padding="30px"
      shadow
      align="center"
      j="space-between"
      dir="column"
    >
      <Box minW="100%">
        <Flex align="center" dir="column">
          <Progress size={200} percent={percent} />
          <Box as="h1" mt="1.5rem">
            {title}
          </Box>
        </Flex>
      </Box>
      <Box minW="100%">
        <Button
          onClick={() => send('TRANSFER')}
          radius="500px"
          bg="#409fff"
          hoverBg="#0073e5"
          block
        >
          {label}
        </Button>
      </Box>
    </Flex>
  );
};

export default Transfer;
