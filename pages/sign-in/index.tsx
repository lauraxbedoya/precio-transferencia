import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { signInGoogleUser, signInUser } from "../../redux/actions/session.action";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import ReCAPTCHA from "react-google-recaptcha";

export default function SignIn() {
  const [values, setValues] = useState({ email: 'sasha.maria@gmail.com', password: 'sasha' });
  const [isUserLogged, setIsUserLogged] = useState(true);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const { user, error, loading } = useAppSelector((state) => state.session);
  const [gUser, gLoading] = useAuthState(auth);
  const recaptchaRef = React.createRef<ReCAPTCHA>();


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
      const recaptchaValue = recaptchaRef.current?.getValue();
      if (recaptchaValue) {
        const { type } = await dispatch(signInUser(values));
        if (type === "session/signInUser/fulfilled") {
          router.push('/');
          alert("Logado correctamente");
        }
      } else {
        alert('falta no soy un robot')
      }
    }
  }

  const googleProvider = new GoogleAuthProvider();
  const handleSignInGoogle = async () => {
    try {
      const result: UserCredential = await signInWithPopup(auth, googleProvider);
      const { type } = await dispatch(signInGoogleUser(result.user));
      if (type === "session/signInGoogleUser/fulfilled") {
        router.push('/');
        alert("Logado correctamente con google");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(checkIsUserLogged, [router.pathname])

  useEffect(() => {
    if (!gLoading && !loading && user) {
      router.push('/');
      setIsRedirecting(true);
    }
  }, [user, router, gLoading]);

  if (loading || gLoading || isRedirecting) {
    return <h1>Loading...</h1>
  }

  const handlerecaptcha = (value: any) => { console.log("Captcha value:", value); }

  return (
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
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6Lcj9H8kAAAAAO1EXHjGueHubA1yVhvxYpW1gs2t"
        onChange={handlerecaptcha}
      />
      <div>
        <button
          onClick={handleSignIn}
        >Sign In
        </button>
        <button
          onClick={handleSignInGoogle}
        >
          <i className="pi-google">Sign In with Google</i>
        </button>
      </div>

      {user && <pre>{user.email}</pre>}
    </div>
  )
}