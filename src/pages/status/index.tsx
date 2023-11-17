import React from 'react';
import Light from '../../components/Light';

const Status: React.FC = () => {
  const [activeColor, setActiveColor] = React.useState('red');
  return (
    <div>
      {['red', 'yellow', 'green']
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
