import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { useAppDispatch } from '@/redux/store';
import ReCAPTCHA from 'react-google-recaptcha';
import { api } from '@/helpers/api.helper';
import {
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';
import { signInGoogleUser, signInUser } from '@/redux/actions/session.action';
import { auth } from '@/utils/firebase';
import PTText from '@/components/text/pt-text';
import Image from 'next/image';
import logoCompany from '@/public/logo/LogoTPTrip.png';
import PTButton from '@/components/button/pt-button';
import Link from 'next/link';
import styles from './sign-up.module.scss';
import PTInput from '@/components/input/pt-input';
import { Toast } from 'primereact/toast';
import { AxiosError } from 'axios';
import Loading from '@/components/loading/loading';


export default function SignUp() {
  const toast = useRef<Toast>(null);
  const [values, setValues] = useState({
    email: '',
    name: '',
    lastName: '',
    password: '',
    confirmPassword: undefined,
  });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const recaptchaRef = React.createRef<ReCAPTCHA>();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async () => {
    if (
      !values.email ||
      !values.confirmPassword ||
      !values.password ||
      !values.name ||
      !values.lastName
    ) {
      toast?.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Todos los campos son requeridos',
      });
    } else {
      // const recaptchaValue = recaptchaRef.current?.getValue();
      // if (recaptchaValue) {
      if (values.password === values.confirmPassword) {
        try {
          const { confirmPassword, ...toBeSent } = values;
          setLoading(true);
          const resp = await api.post('/users', {
            ...toBeSent,
            createdFrom: 'sign_up',
          });
          setLoading(false);
          if (resp.data.id) {
            const { type } = await dispatch(signInUser(values));
            if (type === 'session/signInUser/fulfilled') {
              router.push('/');
              toast?.current?.show({
                severity: 'success',
                summary: 'Felicitaciones',
                detail: 'Cuenta creada exitosamente',
              });
            }
          }
        } catch (error: any) {
          for (const message of error.response.data.message) {
            toast?.current?.show({
              severity: 'error',
              summary: 'Error',
              detail: message,
            });
          }
          console.log(error);
        }
      } else {
        toast?.current?.show({
          severity: 'error',
          summary: 'Error',
          detail: 'Contraseñas deben coincidir.',
        });
      }
      // }
    }
  };

  const googleProvider = new GoogleAuthProvider();
  const handleSignUpGoogle = async () => {
    const result: UserCredential = await signInWithPopup(auth, googleProvider);
    const { type } = await dispatch(signInGoogleUser(result.user));
    if (type === 'session/signInGoogleUser/fulfilled') {
      router.push('/');
      toast?.current?.show({
        severity: 'success',
        summary: 'Felicitaciones',
        detail: 'Cuenta creada exitosamente con google.',
      });
    }
  };

  const handlerecaptcha = (value: any) => {
    console.log('Captcha value:', value);
  };

  return (
    <div className={styles.container}>
      <Loading isLoading={loading} />
      <Toast ref={toast} />
      <div className={styles.cardContent}>
        <div className={styles.containerClose}>
          <Image src={logoCompany} height={130} alt="logoCompany" />
          <Link href="/">
            <i className="pi pi-times"> Cerrar</i>
          </Link>
        </div>

        <div className={styles.containerHeader}>
          <PTText
            asTag="h2"
            size="lg"
            weight="600"
            className={styles.titleSignUp}
          >
            Regístrate
          </PTText>
          <div className={styles.subHeader}>
            <PTText
              asTag="h5"
              size="sm"
              weight="500"
              className={styles.countText}
            >
              ¿Ya tienes cuenta?
            </PTText>
            <Link href="/sign-in" className={styles.linkSignIn}>
              Inicia Sesión
            </Link>
          </div>
        </div>

        <div className={styles.containerForm}>
          <div className={styles.signUpWithForm}>
            <PTInput
              className={styles.inputs}
              name="name"
              type="lastName"
              value={values.name}
              onChange={handleInputChange}
              placeholder="Nombre"
              label="Nombre"
            />
            <PTInput
              className={styles.inputs}
              name="lastName"
              type="lastName"
              value={values.lastName}
              onChange={handleInputChange}
              placeholder="Apellido"
              label="Apellido"
            />
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
              placeholder="Contraseña"
              label="Contraseña"
            />
            <PTInput
              className={styles.inputs}
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleInputChange}
              placeholder="Escribe tú contraseña de nuevo"
              label="Escribe tú contraseña de nuevo"
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
              onClick={handleSignUpGoogle}
              className={styles.buttonSignUpWithApp}
            >
              <i style={{ padding: '5px' }} className="pi pi-google">
                {' '}
                Continuar con Google
              </i>
            </button>

            {/* <button
              onClick={handleSignUpGoogle}
              className={styles.buttonSignUpWithApp}
            >
              <i style={{ "padding": "5px" }} className="pi pi-facebook"> Continuar con Facebook</i>
            </button>

            <button
              onClick={handleSignUpGoogle}
              className={styles.buttonSignUpWithApp}
            >
              <i style={{ "padding": "5px" }} className="pi pi-apple"> Continuar con Apple</i>
            </button>

            <button
              onClick={handleSignUpGoogle}
              className={styles.buttonSignUpWithApp}
            >
              <i style={{ "padding": "5px" }} className="pi pi-at"> Continuar con Hotmail</i>
            </button> */}
          </div>
        </div>
        <PTButton
          size="lg"
          isMain={false}
          onClick={handleSignUp}
          className={styles.buttonSignUp}
        >
          Regístrate
        </PTButton>

        <PTText size="xxs" weight="500">
          * Al registrarte aceptas nuestros Términos y Condiciones y La Política
          de Privacidad y Tratamiento de Datos.
        </PTText>
      </div>
    </div>
  );
}
