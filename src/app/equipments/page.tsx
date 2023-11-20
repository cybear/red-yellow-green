import Light from '@/components/Light';
import Link from 'next/link';
import React from 'react';

const equipmentList: Array<{
  equipmentId: string;
  status: Array<'red' | 'yellow' | 'green'>;
}> = [];

const randomStatus = () => Math.random() < 1 / 3 ? 'red' : Math.random() < 2 / 3 ? 'yellow' : 'green';

for (let i = 0; i < 20; i++) {
  equipmentList.push({
    equipmentId: i.toString(),
    status: [randomStatus()]
  });
}

const Equipments = () => {
  return <div>
    <h1>Equipments</h1>
    <div style={{ display: 'flex', flexFlow: 'wrap' }}>
      {equipmentList.map((equipment) => {
        const lastStatus = equipment.status[equipment.status.length - 1];
        return (
          <Link key={equipment.equipmentId} href={`/equipments/${equipment.equipmentId}`}>
            <Light color={lastStatus} isActive />
            <h3 style={{ textAlign: 'center' }}>{equipment.equipmentId}</h3>
            <br /><br />
          </Link>
        )
      })}
    </div>
  </div>;
};

export default Equipments;
