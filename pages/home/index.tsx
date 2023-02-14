import { useEffect } from "react";
import { useAppSelector } from "../../redux/store";

function Home() {
  const { user, error, loading } = useAppSelector((state) => state.session);
  useEffect(() => {
    console.log({ user });
  }, []);
  return (
    <>
      {user && <pre>{user.email}</pre>}
    </>)
}

export default Home;