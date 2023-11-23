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
  const ordersHistory = [
    {
      orderId: 'Order 1',
    },
    {
      orderId: 'Order 2',
    },
  ];
  const scheduledOrders = [
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
        });
      }}>Add to queue</button>
      <hr />
      <div>
          <h2>Scheduled orders</h2>
          {scheduledOrders.map((order) => (
            <div key={order.orderId}>
              <p>Order: <span>{order.orderId}</span></p>
            </div>
          ))}
      </div>
    </>
  );
}

export default EquipmentOrders;
