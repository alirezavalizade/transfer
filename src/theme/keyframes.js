import { keyframes } from '@emotion/core';

export const rotate = keyframes`
  0% {
      transform: rotate(-90deg);
  }
  99% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(-90deg);
  }
`;
