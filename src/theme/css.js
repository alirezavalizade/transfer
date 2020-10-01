import { css } from '@emotion/core';

// STYLES
export const backgroundColor = p => css`
  background-color: ${p.bg};
`;

export const borderRadius = p => css`
  border-radius: ${p.radius};
`;

export const shadow = css`
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1), 0 10px 30px 0 rgba(0, 0, 0, 0.2);
`;

// POSITIONS
export const relative = css`
  position: relative;
`;

// POSITIONS HELPERS
export const centerAbsolute = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

// SPACE
export const mt = p => css`
  margin-top: ${p.mt};
`;

export const mb = p => css`
  margin-bottom: ${p.mb};
`;

export const ml = p => css`
  margin-left: ${p.ml};
`;

export const mr = p => css`
  margin-right: ${p.mr};
`;

export const pt = p => css`
  padding-top: ${p.pt};
`;

export const pb = p => css`
  padding-bottom: ${p.pb};
`;

export const pl = p => css`
  padding-left: ${p.pl};
`;

export const pr = p => css`
  padding-right: ${p.pr};
`;

export const padding = p => css`
  padding: ${p.padding};
`;

// FLEX
export const align = p => css`
  align-items: ${p.align};
`;

export const flex = p => css`
  flex: ${p.f};
`;

export const grow = p => css`
  flex-grow: ${p.grow};
`;

export const justifyContent = p => css`
  justify-content: ${p.j};
`;

export const dir = p => css`
  flex-direction: ${p.dir};
`;

// SIZES
export const minWidth = p => css`
  min-width: ${p.minW};
`;

export const minHeight = p => css`
  min-height: ${p.minH};
`;
