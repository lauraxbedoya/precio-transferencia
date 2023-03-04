import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { signInGoogleUser, signInUser } from "../../redux/actions/session.action";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import ReCAPTCHA from "react-google-recaptcha";
import styles from './sign-in.module.scss';
import Image from "next/image";
import logoCompany from '../../public/logo/LogoTPTrip.png';
import Link from "next/link";
import PTText from "../../components/text/pt-text";
import PTInput from "../../components/input/pt-input";
import PTButton from "../../components/button/pt-button";


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
      // const recaptchaValue = recaptchaRef.current?.getValue();
      // if (recaptchaValue) {
      const { type } = await dispatch(signInUser(values));
      if (type === "session/signInUser/fulfilled") {
        router.push('/');
        alert("Logado correctamente");
      }
      // }
      // else {
      //   alert('falta no soy un robot')
      // }
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
    <div className={styles.container}>
      <div className={styles.cardContent}>
        <div className={styles.containerClose}>
          <Image src={logoCompany} height={130} alt="logoCompany" />
          <Link href="/">
            <i className="pi pi-times"> Cerrar</i>
          </Link>
        </div>

        <div className={styles.containerHeader}>
          <PTText asTag="h2" size="lg" weight="600" className={styles.titleSignUp}>Ingresar</PTText>
          <div className={styles.subHeader}>
            <PTText asTag="h5" size="sm" weight="500" className={styles.countText}>¿Aún no tienes una cuenta?</PTText>
            <Link href="/sign-up" className={styles.linkSignIn}>Regístrate</Link>
          </div>
        </div>

        <div className={styles.containerForm}>
          <div className={styles.signUpWithForm}>
            <PTInput
              className={styles.inputs}
              name="email"
              type="email"
              value={values.email}
              onChange={handleInputChange}
              placeholder="Email"
              label="Email"
            />
            <PTInput
              className={styles.inputs}
              name="password"
              type="password"
              value={values.password}
              onChange={handleInputChange}
              placeholder="Password"
              label="Password"
            />
            {/* <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lcj9H8kAAAAAO1EXHjGueHubA1yVhvxYpW1gs2t"
              onChange={handlerecaptcha}
              className={styles.recaptcha}
            /> */}
          </div>

          <div className={styles.signUpWithApps}>
            <button
              onClick={handleSignInGoogle}
              className={styles.buttonSignUpWithApp}
            >
              <i style={{ "padding": "5px" }} className="pi pi-google"> Ingresar con Google</i>
            </button>

            {/* <button
              onClick={handleSignInGoogle}
              className={styles.buttonSignUpWithApp}
            >
              <i style={{ "padding": "5px" }} className="pi pi-facebook"> Ingresar con Facebook</i>
            </button>

            <button
              onClick={handleSignInGoogle}
              className={styles.buttonSignUpWithApp}
            >
              <i style={{ "padding": "5px" }} className="pi pi-apple"> Ingresar con Apple</i>
            </button>

            <button
              onClick={handleSignInGoogle}
              className={styles.buttonSignUpWithApp}
            >
              <i style={{ "padding": "5px" }} className="pi pi-at"> Ingresar con Hotmail</i>
            </button> */}
          </div>
        </div>
        <PTButton
          size="lg"
          isMain={false}
          onClick={handleSignIn}
          className={styles.buttonSignIn}
        >Ingresar
        </PTButton>

        {user && <pre>{user.email}</pre>}
      </div>
    </div>
  )
}