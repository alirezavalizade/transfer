import React, { useMemo } from 'react';

import { Wrapper, Svg, Circle, Text } from './elements';

const Progress = ({
  size,
  fill,
  percent,
  trailColor,
  strokeColor,
  strokeWidth,
  spingDuration,
  showSuccess,
  successStrockColor
}) => {
  return useMemo(() => {
    const progress = percent < 100 ? percent : 100;
    const radius = size / 2;
    const circumference = size * Math.PI;
    const r = radius - strokeWidth * 2;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    const spinning = progress < 100 && progress > 0;
    const isFinished = progress === 100;
    const strockeColorWithSuccessState =
      showSuccess && isFinished ? successStrockColor : strokeColor;

    return (
      <Wrapper style={{ width: size, height: size }} j="center" align="center">
        <Svg width={size} height={size}>
          <Circle
            fill={fill}
            stroke={trailColor}
            strokeWidth={strokeWidth}
            r={r}
            cx={radius}
            cy={radius}
          />
          <Circle
            fill={fill}
            stroke={strockeColorWithSuccessState}
            strokeWidth={strokeWidth}
            style={{ strokeDashoffset }}
            strokeDasharray={circumference + ' ' + circumference}
            r={r}
            cx={radius}
            cy={radius}
            spinning={spinning}
            spingDuration={spingDuration}
          />
        </Svg>
        <Text>{progress}%</Text>
      </Wrapper>
    );
  }, [
    size,
    fill,
    percent,
    trailColor,
    strokeColor,
    strokeWidth,
    spingDuration,
    showSuccess,
    successStrockColor
  ]);
};

Progress.defaultProps = {
  size: 100,
  percent: 0,
  strokeWidth: 5,
  fill: 'transparent',
  strokeColor: '#409fff',
  trailColor: '#e6e6e6',
  spingDuration: 1,
  successStrockColor: '#52c41a',
  showSuccess: true
};

export default Progress;
