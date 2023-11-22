/*
This is the orders page.

- It shows the orders for a specific equipment.
- It shows which orders are queued and which are being worked on.
- It shows which statuses a specific order has went through.
- You can add a new order to the queue.

Restrictions: Only to be available to Supervisors.
*/
import { useRouter } from 'next/router';

const EquipmentOrders: React.FC = () => {
  const orders = [
    {
      orderId: 'Order 1',
      status: 'green',
    },
    {
      orderId: 'Order 2',
      status: 'green',
    },
    {
      orderId: 'Order 3',
    },
    {
      orderId: 'Order 4',
    },

  ];
  const router = useRouter();
  return (
    <>
      <h1>Equipment Orders for {router.query.equipmentId}</h1>
      {orders.map((order) => (
        <div key={order.orderId}>
          <h2>{order.orderId}</h2>
          <p>Status: {
            order.status
              ? <span style={{ backgroundColor: order.status }}>{order.status}</span>
              : 'Queued'
          }</p>
          <p>Order: <span>{order.orderId}</span></p>
        </div>
      ))}
    </>
  );
}


export default EquipmentOrders;
