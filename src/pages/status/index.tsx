import React from 'react';
import Light from '../../components/Light';

const statusColors = ['red', 'yellow', 'green'];

const Status: React.FC = () => {
  const [activeColor, setActiveColor] = React.useState('red');
  return (
    <div>
      {statusColors
        .map((color) =>
          <div key={color}>
            <Light
              color={color}
              isActive={color === activeColor}
              onClick={() => setActiveColor(color)}
            />
          </div>
        )}
    </div>
  );
};

export default Status;
