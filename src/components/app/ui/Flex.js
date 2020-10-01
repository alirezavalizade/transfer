import styled from '@emotion/styled';
import { align, flex, grow, justifyContent, dir } from '../../../theme/css';

import Box from './Box';

const Flex = styled(Box)`
  display: flex;
  ${flex};
  ${grow};
  ${justifyContent};
  ${align};
  ${dir};
`;

export default Flex;
