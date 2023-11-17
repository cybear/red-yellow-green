import React from 'react';

type LightProps = {
  color: string;
  isActive?: boolean;
  onClick: () => void;
};

const Light: React.FC<LightProps> = ({ color, isActive, onClick }) => {
  return (
    <svg width="200" height="200" onClick={onClick}>
      <circle
        cx="100"
        cy="100"
        r="90"
        x="10"
        y="10"
        fill={isActive ? color : '#000000'}
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
        opacity={0.3}
        fill={color}
        stroke={'#000000'}
        strokeWidth={5}
      />
    </svg>
  );
};

export default Light;
