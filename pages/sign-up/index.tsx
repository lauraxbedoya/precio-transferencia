import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import ReCAPTCHA from "react-google-recaptcha";
import { api } from "../../helpers/api.helper";
import { GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';
import { signInGoogleUser, signInUser } from "../../redux/actions/session.action";
import { auth } from "../../utils/firebase";


export default function SignUp() {
  const [values, setValues] = useState({
    name: 'paula',
    lastName: 'paula',
    email: 'paula@gmailc.com',
    password: 'paula',
    phoneNumber: '56457567',
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
    if (!values.email || !values.name || !values.lastName || !values.password) {
      alert('todos los campos son requeridos')
    } else {
      const recaptchaValue = recaptchaRef.current?.getValue();
      if (recaptchaValue) {
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
    <div>
      <h1>Registrarse</h1>
      <input
        name="name"
        type="text"
        value={values.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        name="lastName"
        type="text"
        value={values.lastName}
        onChange={handleInputChange}
        placeholder="Last name"
      />
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
      <input
        name="phoneNumber"
        type="text"
        value={values.phoneNumber}
        onChange={handleInputChange}
        placeholder="Phone number"
      />
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6Lcj9H8kAAAAAO1EXHjGueHubA1yVhvxYpW1gs2t"
        onChange={handlerecaptcha}
      />
      <div>
        <button
          onClick={handleSignUp}
        >Sign Up
        </button>
        <button
          onClick={handleSignUpGoogle}
        >
          <i className="pi-google">Sign In with Google</i>
        </button>
      </div>
    </div>
  )
}