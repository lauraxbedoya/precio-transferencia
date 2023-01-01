import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { signInUser } from "../../redux/actions/session.action";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export default function SignIn() {
  const [values, setValues] = useState({ email: 'aleydapenax@gmail.com', password: 'aleyda' });
  const [isUserLogged, setIsUserLogged] = useState(true);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user, error, loading } = useAppSelector((state) => state.session);

  const checkIsUserLogged = () => {
    const token = localStorage.getItem('tkn');
    setIsUserLogged(Boolean(token));
    if (token) { router.push(`/home`); }
  }

  const handleInputChange = (e: any) => {
    setValues(
      {
        ...values,
        [e.target.name]: e.target.value,
      }
    )
  }

  const handleSignIn = async () => {
    if (!values.email || !values.password) {
      alert("Todos los campos son requeridos")
    } else {
      const { type } = await dispatch(signInUser(values));
      if (type === "session/signInUser/fulfilled") {
        router.push('/home');
        alert("Logado correctamente");
      }
    }
  }

  useEffect(checkIsUserLogged, [router.pathname])


  if (loading) {
    <h1>Loading...</h1>
  }

  return !isUserLogged && (
    <div >
      <h1>Sign in</h1>
      <input
        name="email"
        type="email"
        value={values.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <div>
        <button
          onClick={handleSignIn}
        >Sign In</button>
      </div>

      {error && <h3>{error}</h3>}
      {user && <pre>{user.email}</pre>}
    </div>
  )
}