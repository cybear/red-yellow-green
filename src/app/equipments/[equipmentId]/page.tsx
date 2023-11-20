"use server"
import Light from '@/components/Light';
import { Equipment } from '@/utils/equipment';
import { NextPage } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

interface Props {
  params: {
    equipmentId: string;
  }
}

async function getData(equipmentId: string): Promise<Equipment> {
  const url = `http://localhost:3000/equipments/api/${equipmentId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const Equipment = ({ equipment }: { equipment: Equipment }) => {
  const reversedStatus = equipment.status.reverse();
  const [currentStatus, ...historicalStatus] = reversedStatus;
  return (<><h1>Equipment {equipment.equipmentId}</h1>
    <br /><br />
    <h2>Current Status</h2>
    
    <Light color={currentStatus} isActive />
    <br /><br />
    <h2>Historical Status</h2>
    {historicalStatus.map((status, index) => (
      <Light key={index} color={status} width={100} />
    ))}</>)
};


const EquipmentPage: NextPage<Props> = async ({ params }) => {
  const equipment = await getData(params.equipmentId);
  return (
    <div>
      <Link href="/equipments">&lt; Back</Link>
      <br /><br />
      <Suspense fallback={<p>Loading</p>}>
        <Equipment equipment={equipment} />
      </Suspense>
    </div>
  );
};

export default EquipmentPage;
