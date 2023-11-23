/*
This is the dashboard page.
It shows the current status and order of all equipments.
*/
import { Equipment } from "@/utils/equipmentData";
import Link from "next/link";
import { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Array<Equipment>>([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/equipments')
      .then(res => res.json())
      .then(data => 
      setData(data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {data.map(({ id, currentColor, currentStatus, currentOrder }) => (
      <div key={id}>
        <h2><Link href={`/status/${id}`}>{id}</Link></h2>
        <p>Status: <span style={{color: currentColor}}>{currentStatus}</span></p>
        <p>Order: <span style={{color: currentColor}}>{currentOrder?.orderId}</span></p>
      </div>
      ))}
    </div>
  );
};

export default Dashboard;
