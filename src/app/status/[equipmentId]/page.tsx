'use client'
import Light from "@/components/Light";
import { useParams } from "next/navigation";
import React from "react";

const statusColors = ['red', 'yellow', 'green'];

const Status: React.FC = () => {
  const [activeColor, setActiveColor] = React.useState('red');
  const equipmentId = useParams()?.equipmentId;

  return (
    <div>
      {statusColors
        .map((color) =>
          <div key={color} onClick={() => setActiveColor(color)}>
            <Light
              color={color}
              isActive={color === activeColor}
            />
          </div>
        )}
        <p>Client ID: {equipmentId}</p>
    </div>
  );
};

export default Status;
