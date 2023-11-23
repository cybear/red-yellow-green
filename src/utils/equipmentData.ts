export type Status = {
  color: 'red' | 'yellow' | 'green';
  text: 'Standing still' | 'Starting up' | 'Winding down' | 'Producing';
};

export type Order = {
  orderId: string;
};

export type Equipment = {
  id: string;
  currentColor: Status['color'];
  currentStatus: Status['text'];
  currentOrder: Order | null;
  queuedOrders: Order[];
  completedOrders: Order[];
};

const equimentNames = [
  'Brick Machine 1',
  'Brick Machine 2',
  'Brick Machine 3',
  'Bagging Machine 1',
  'Manual printer',
];

export const equipmentData: Array<Equipment> = equimentNames.map((name) => ({
  id: name,
  currentColor: 'red',
  currentStatus: 'Standing still',
  currentOrder: null,
  queuedOrders: [],
  completedOrders: [],
}));
