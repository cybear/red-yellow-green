import Light from '@/components/Light';
import equipmentList from '@/utils/equipment';
import Link from 'next/link';
import React from 'react';

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
