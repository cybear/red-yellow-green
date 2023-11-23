/*
This is the dashboard page.
It shows the current status and order of all equipments.
*/
import Link from "next/link";

const Dashboard: React.FC = () => {
  // Todo fetch from backend
  const equimentData = [
    'Brick Machine 1',
    'Brick Machine 2',
    'Brick Machine 3',
    'Bagging Machine 1',
    'Manual printer',
  ];
  return (
    <div>
      <h1>Dashboard</h1>
      {equimentData.map((equipmentId) => (
      <div key={equipmentId}>
        <h2><Link href={`/status/${equipmentId}`}>{equipmentId}</Link></h2>
        <p>Status: <span style={{color: 'green'}}>Working</span></p>
        <p>Order: <span style={{color: 'green'}}>Order 1</span></p>
      </div>
      ))}
    </div>
  );
};

export default Dashboard;
