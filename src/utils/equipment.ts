export type Status = {
  color: 'red' | 'yellow' | 'green';
  text: 'Standing still' | 'Starting up' | 'Winding down' | 'Producing';
  timestamp: number;
};

export type Order = {
  orderId: string;
  timestamp: number;
};

export type Equipment = {
  equipmentId: string;
  statuses: Status[];
  orders: Order[];
};

const generateNewStatus = (oldStatus: Status): Status => {
  const getNewColor = (oldColor: Status['color']) => {
    switch (oldColor) {
      case 'green': return Math.random() < 0.5 ? 'yellow' : 'red';
      case 'yellow': return Math.random() < 0.5 ? 'green' : 'red';
      case 'red': return Math.random() < 0.5 ? 'green' : 'yellow';
      default: throw new Error('Invalid color');
    };
  };
  const getNewStatus = (oldColor: Status['color'], newColor: Status['color']) => {
    if (newColor === 'green') return 'Producing';
    if (newColor === 'red') return 'Standing still';
    if (newColor === 'yellow' && oldColor === 'green') return 'Winding down';
    if (newColor === 'yellow' && oldColor === 'red') return 'Starting up';
    throw new Error('Invalid color combo');
  };
  const color = getNewColor(oldStatus.color);
  const text = getNewStatus(oldStatus.color, color);
  const timestamp = oldStatus.timestamp + Math.random() * 1000 * 60 * 60;
  return {
    color,
    text,
    timestamp
  };
};

const randomOrder = (oldOrder: Order): Order => {
  const orderId = `Order ${~~(Math.random() * 10000)}`;
  const timestamp = oldOrder.timestamp;
  return {
    orderId,
    timestamp
  };
}

export const randomEquipment = (i: number) => {
  const amountOrders = 1 + ~~(Math.random() * 5);
  const orders = Array(amountOrders).fill(0).reduce((acc) => {
    const lastOrder = acc[acc.length - 1];
    const newOrder = randomOrder(lastOrder);
    return [...acc, newOrder];
  }, [{
    orderId: 'Order 0',
    timestamp: Date.now(),
  }]);

  const amountStatus = 1 + ~~(Math.random() * 5);
  const statuses: Equipment['statuses'] = Array(amountStatus).fill(0).reduce((acc) => {
    const lastStatus = acc[acc.length - 1];
    const newStatus = generateNewStatus(lastStatus)
    return [...acc, newStatus];
  }, [{
    color: 'red',
    text: 'Standing still',
    timestamp: Date.now(),
  }]);

  return ({
    equipmentId: i.toString(),
    statuses,
    orders,
  });
};

const equipmentList: Array<Equipment> = [];

for (let i = 0; i < 20; i++) {
  equipmentList.push(randomEquipment(i));
}
export default equipmentList;
