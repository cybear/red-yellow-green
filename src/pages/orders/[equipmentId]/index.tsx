/*
This is the orders page.

- It shows the orders for a specific equipment.
- It shows which orders are queued and which are being worked on.
- It shows which statuses a specific order has went through.
- You can add a new order to the queue.

Restrictions: Only to be available to Supervisors.
*/
import { Equipment } from '@/utils/equipmentData';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const EquipmentOrders: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<Equipment>();
  const equipmentId = router.query.equipmentId;
  useEffect(() => {
    equipmentId && fetch(`http://localhost:3000/api/${equipmentId}/equipment`)
      .then(res => res.json())
      .then((equipmentsData: Equipment) => {
        setData(equipmentsData)
      }).catch(() => {console.error('Failed to fetch')});
  }, [equipmentId]);

  return (
    <>
      <h1>Equipment Orders for {router.query.equipmentId}</h1>
      {data?.currentOrder && (
        <>
          <h2>Current order</h2>
          <div>
            {data.currentOrder.orderId}
          </div>
        </>
      )}
      <h2>Add a new order</h2>
      <input type="text" id="orderId" name="orderId" placeholder='Order ID' />
      <button onClick={() => {
        fetch(`http://localhost:3000/api/${router.query.equipmentId}/order`, {
          method: 'POST',
          body: JSON.stringify({
            orderId: (document.getElementById('orderId') as HTMLInputElement)?.value,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(res => res.json())
        .then((data) => setData(data))
        .catch(() => {console.error('Failed to fetch')});
      }}>Add to queue</button>
      <hr />
      <div>
        <h2>Scheduled orders</h2>
        {data?.queuedOrders.map((order => (
          <div key={order.orderId}>
            {order.orderId}
          </div>
        )))}
        <h2>Completed orders</h2>
        {data?.completedOrders.map((order => (
          <div key={order.orderId}>
            {order.orderId}
          </div>
        )))}
      </div>
    </>
  );
}

export default EquipmentOrders;
