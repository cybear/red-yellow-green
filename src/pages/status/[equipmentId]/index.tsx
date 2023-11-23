/*
This is an equipment page.
It is shown on a screen by each equipment.
It shows the status of the specific equipment.
Workers can change the status.
Status states:
- If it's red (off), it can be changed to yellow (warming up) or green (working).
- If it's yellow, it can be changed to green (working) or red (off).
- If it's green, it can be changed to yellow (cooling down) or red (off).

Orders:
When the status changes to green, it means the equipment has started working on a new order.
When the status changes from green to yellow, we can assume that the work is completed.

*/
'use client'
import Light from "@/components/Light";
import { useRouter } from "next/router";
import React from "react";

const statusColors = ['red', 'yellow', 'green'];

const Status: React.FC = () => {
  const [activeColor, setActiveColor] = React.useState('red');
  const [status, setStatus] = React.useState('off'); // ['off', 'warming up', 'working', 'cooling down'
  const router = useRouter();
  const equipmentId = router.query.equipmentId;
  const updateColor = (color: string) => fetch(`/api/${equipmentId}/status`, {
    method: 'PUT',
    body: color,
  }).then((res => res.json())).then((data) => {
    setActiveColor(color);
    setStatus(data.status);
  });
  return (
    <div>
      {statusColors
        .map((color) =>
          <div key={color} onClick={() => updateColor(color)}>
            <Light
              color={color}
              isActive={color === activeColor}
            />
          </div>
        )}
        <p>Client ID: {equipmentId}</p>
        <p>Status: {status}</p>
    </div>
  );
};

export default Status;
