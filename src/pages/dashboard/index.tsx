/*
This is the dashboard page.
It shows the current status and order of all equipments.
*/
import Light from "@/components/Light";
import { Equipment } from "@/utils/equipmentData";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Array<Equipment>>([]);
  const timerIdRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    const fetcher = () => fetch('http://localhost:3000/api/equipments')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(() => {console.error('Failed to fetch')});
    timerIdRef.current = setInterval(fetcher, 1000);
    return () => {
      timerIdRef.current && clearInterval(timerIdRef.current);
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {data.map(({ id, currentColor, currentStatus, currentOrder }) => (
      <div key={id}>
        <h2><Light color={currentColor} isActive width={20} height={20} /> <Link href={`/status/${id}`}>{id}</Link></h2>
        <p><Link href={`/status/${id}`}>Status</Link>: {currentStatus}</p>
        <p><Link href={`/orders/${id}`}>Order</Link>: <span style={{color: currentColor}}>{currentOrder?.orderId}</span></p>
      </div>
      ))}
    </div>
  );
};

export default Dashboard;
