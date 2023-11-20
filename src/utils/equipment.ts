export type Status = 'red' | 'yellow' | 'green';
export type Order = string;
export type Equipment = {
  equipmentId: string;
  status: Status[];
  orders: Order[];
};

const randomStatus = (): Status => Math.random() < 1 / 3 ? 'red' : Math.random() < 2 / 3 ? 'yellow' : 'green';
const randomOrder = () => `Brick ${~~(Math.random() * 100)}`

export const randomEquipment = (i: number) => ({
  equipmentId: i.toString(),
  status: Array(1 + ~~(Math.random() * 5)).fill(0).map(randomStatus),
  orders: Array(1 + ~~(Math.random() * 5)).fill(0).map(randomOrder),
});

const equipmentList: Array<{
  equipmentId: string;
  status: Array<Status>;
  orders: Array<Order>;
}> = [];

for (let i = 0; i < 20; i++) {
  equipmentList.push(randomEquipment(i));
}
export default equipmentList;
