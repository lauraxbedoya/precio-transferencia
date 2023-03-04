import { useEffect } from 'react';
import { useAppSelector } from '@/redux/store';

function Home() {
  const { user } = useAppSelector((state) => state.session);

  return <>{user && <pre>{user.email}</pre>}</>;
}

export default Home;
