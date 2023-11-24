
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
  const router = useRouter();
  const redirectToDashboard = () => {
    router.push('/dashboard');
  };
  useEffect(redirectToDashboard, []);

  return (
    <div>
      <h1>Welcome to the Index page!</h1>
      <button onClick={redirectToDashboard}>Go to Dashboard</button>
    </div>
  );
};

export default Index;
