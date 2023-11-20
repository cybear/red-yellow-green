export type Status = 'red' | 'yellow' | 'green';
export type Equipment = {
  equipmentId: string;
  status: Status[];
};

const randomStatus = (): Status => Math.random() < 1 / 3 ? 'red' : Math.random() < 2 / 3 ? 'yellow' : 'green';

export const randomEquipment = (i: number) => ({
  equipmentId: i.toString(),
  status: Array(1 + ~~(Math.random() * 5)).fill(0).map(randomStatus),
});

const equipmentList: Array<{
  equipmentId: string;
  status: Array<Status>;
}> = [];

for (let i = 0; i < 20; i++) {
  equipmentList.push(randomEquipment(i));
}
export default equipmentList;
