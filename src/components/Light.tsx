import React from 'react';

type LightProps = {
  color: string;
  isActive?: boolean;
  width?: number;
  height?: number;
};

const Light: React.FC<LightProps> = ({ color, isActive, width = 200, height = 200 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 200 200">
      <defs>
        <linearGradient id="Highlight">
          <stop stopColor='#fff' stopOpacity="0" offset="0%" />
          <stop stopColor="#fff" stopOpacity="1" offset="50%" />
          <stop stopColor='#fff' stopOpacity="0" offset="100%" />
        </linearGradient>
        <linearGradient id="Shadow">
          <stop stopColor='#000' stopOpacity="0.7" offset="0%" />
          <stop stopColor="#000" stopOpacity="1" offset="50%" />
          <stop stopColor='#000' stopOpacity="0.7" offset="100%" />
        </linearGradient>
      </defs>
      <circle
        cx="100"
        cy="100"
        r="90"
        x="10"
        y="10"
        fill={color}
        stroke={'#000000'}
        strokeWidth={5}
      />
      /* semi transparent circle */
      <circle
        cx="100"
        cy="100"
        r="90"
        x="10"
        y="10"
        opacity={0.6}
        fill={isActive ? "url(#Highlight)" : "url(#Shadow)"}
      />
    </svg>
  );
};

export default Light;
