import { css } from '@emotion/core';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300&display=swap');

  html,
  body,
  #root {
    height: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Sansita Swashed', cursive;
  }

  p {
    margin: 0;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }
`;
