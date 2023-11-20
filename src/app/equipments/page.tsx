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
        const lastOrder = equipment.orders[equipment.orders.length - 1];
        return (
          <Link key={equipment.equipmentId} href={`/equipments/${equipment.equipmentId}`} style={{border: '1px solid black', margin: 10, padding: 10 }}>
            <h3>Equipment {equipment.equipmentId}</h3>
            <Light color={lastStatus} isActive />
            <br/>
            Job: {lastOrder}
            <br /><br />
          </Link>
        )
      })}
    </div>
  </div>;
};

export default Equipments;
