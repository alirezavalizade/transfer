import styled from '@emotion/styled';
import {
  backgroundColor,
  shadow,
  borderRadius,
  minWidth,
  minHeight,
  padding,
  pt,
  pb,
  pl,
  pr,
  mt,
  mb,
  ml,
  mr
} from '@theme/css';

const Box = styled.div`
  ${p => (p.shadow ? shadow : null)};
  ${backgroundColor};
  ${minWidth};
  ${minHeight};
  ${borderRadius};
  ${padding};
  ${pt};
  ${pb};
  ${pl};
  ${pr};
  ${mt};
  ${mb};
  ${ml};
  ${mr};
`;

export default Box;
