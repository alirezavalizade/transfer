import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { rotate } from '@theme/keyframes';
import { relative, centerAbsolute } from '@theme/css';

import { Box } from '@ui';

// STATES
const spinning = p => css`
  animation: ${rotate} ${p.spingDuration}s infinite;
`;

export const Wrapper = styled(Box)`
  ${relative};
`;

export const Svg = styled.svg``;

export const Circle = styled.circle`
  transition: all 0.4s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  ${p => (p.spinning ? spinning : null)};
`;

export const Text = styled.p`
  font-size: 30px;
  color: #565656;
  ${centerAbsolute};
`;
