import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import ReCAPTCHA from "react-google-recaptcha";
import { api } from "../../helpers/api.helper";
import { GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';
import { signInGoogleUser, signInUser } from "../../redux/actions/session.action";
import { auth } from "../../utils/firebase";
import PTText from "../../components/text/pt-text";
import Image from "next/image";
import logoCompany from '../../public/logo/LogoTPTrip.png';
import PTButton from "../../components/button/pt-button";
import Link from "next/link";
import styles from './sign-up.module.scss';
import PTInput from "../../components/input/pt-input";


export default function SignUp() {
  const [values, setValues] = useState({
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const recaptchaRef = React.createRef<ReCAPTCHA>();


  const handleInputChange = (e: any) => {
    setValues(
      {
        ...values,
        [e.target.name]: e.target.value,
      }
    )
  }

  const handleSignUp = async () => {
    if (!values.email || !values.confirmEmail || !values.confirmPassword || !values.password) {
      alert('todos los campos son requeridos')
    } else {
      const recaptchaValue = recaptchaRef.current?.getValue();
      if (recaptchaValue) {
        if (values.email === values.confirmEmail && values.password === values.confirmPassword) {
          try {
            const resp = await api.post('/users', { ...values, createdFrom: 'sign_up' });
            setValues(resp.data);
            const { type } = await dispatch(signInUser(values));
            if (type === "session/signInUser/fulfilled") {
              alert("Cuenta creada exitosamente");
              router.push('/');
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          alert('falta no soy un robot')
        }
      }
    };
  }

  const googleProvider = new GoogleAuthProvider();
  const handleSignUpGoogle = async () => {
    const result: UserCredential = await signInWithPopup(auth, googleProvider);
    const { type } = await dispatch(signInGoogleUser(result.user));
    if (type === "session/signInGoogleUser/fulfilled") {
      router.push('/');
      alert("Cuenta creada exitosamente con google");
    }
  }

  const handlerecaptcha = (value: any) => { console.log("Captcha value:", value); }

  return (
    <div className={styles.container}>
      <div className={styles.cardContent}>
        <div className={styles.containerClose}>
          <Image src={logoCompany} height={130} alt="logoCompany" />
          <Link href="/">
            <i className="pi pi-times">Cerrar</i>
          </Link>
        </div>

        <div className={styles.containerHeader}>
          <PTText asTag="h2" size="lg" weight="600" className={styles.titleSignUp}>Regístrate</PTText>
          <div className={styles.subHeader}>
            <PTText asTag="h5" size="sm" weight="500" className={styles.countText}>¿Ya tienes cuenta?</PTText>
            <Link href="/sign-in" className={styles.linkSignIn}>Inicia Sesión</Link>
          </div>
        </div>

        <div className={styles.containerForm}>
          <div className={styles.signUpWithForm}>
            <PTInput
              size="md"
              className={styles.inputs}
              name="email"
              type="email"
              value={values.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <PTInput
              size="md"
              className={styles.inputs}
              name="confirmEmail"
              type="email"
              value={values.confirmEmail}
              onChange={handleInputChange}
              placeholder="Ingresa tú email de nuevo"
            />
            <PTInput
              size="md"
              className={styles.inputs}
              name="password"
              type="password"
              value={values.password}
              onChange={handleInputChange}
              placeholder="Contraseña"
            />
            <PTInput
              size="md"
              className={styles.inputs}
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleInputChange}
              placeholder="Escribe tú contraseña de nuevo"
            />
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lcj9H8kAAAAAO1EXHjGueHubA1yVhvxYpW1gs2t"
              onChange={handlerecaptcha}
              className={styles.recaptcha}
            />
            <PTButton
              size="lg"
              isMain={false}
              onClick={handleSignUp}
              className={styles.buttonSignUp}
            >Regístrate
            </PTButton>
          </div>

          <div className={styles.signUpWithApps}>
            <button
              onClick={handleSignUpGoogle}
              className={styles.buttonSignUpWithApp}
            >
              <i className="pi pi-google"> Continuar con Google</i>
            </button>

            <button
              onClick={handleSignUpGoogle}
              className={styles.buttonSignUpWithApp}
            >
              <i className="pi pi-facebook"> Continuar con Facebook</i>
            </button>

            <button
              onClick={handleSignUpGoogle}
              className={styles.buttonSignUpWithApp}
            >
              <i className="pi pi-apple"> Continuar con Apple</i>
            </button>

            <button
              onClick={handleSignUpGoogle}
              className={styles.buttonSignUpWithApp}
            >
              <i className="pi pi-at"> Continuar con Hotmail</i>
            </button>
          </div>
        </div>

        <PTText size="xxs" weight="500">* Al registrarte aceptas nuestros Términos y Condiciones y La Política de Privacidad y Tratamiento de Datos.</PTText>
      </div>
    </div>
  )
}