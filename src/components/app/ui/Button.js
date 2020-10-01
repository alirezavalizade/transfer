import styled from '@emotion/styled';
import { backgroundColor, borderRadius } from '@theme/css';

const Button = styled.button`
  border-radius: 0.25rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 250ms;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1.2;
  outline: none;
  height: 2.5rem;
  min-width: ${p => (p.block ? '100%' : '2.5rem')};
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #fff;
  border: none;
  cursor: pointer;
  ${backgroundColor};
  ${borderRadius};

  &:hover {
    background-color: ${p => p.hoverBg};
  }
`;

export default Button;
