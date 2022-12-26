import { useAppSelector } from "../../redux/store";

function Home() {
  const { user, error, loading } = useAppSelector((state) => state.session);

  return (<>
    <div>hooooooooooooome</div>

    {error && <h3>{error}</h3>}
    {user && <pre>{user.email}</pre>} </>);
}

export default Home;