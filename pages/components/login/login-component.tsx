// import Image from 'next/image';
// import styles from './login-component.module.scss';
// import logoCompany from '../../../public/logo/LogoTPTrip.png';
// import Link from 'next/link';
// import PTText from '../../../components/text/pt-text';
// import PTInput from '../../../components/input/pt-input';

// export interface LoginProps {
//   titleHeader: string;
//   textAlreadyAccount: string;
//   signInOrSignUp: string;
// }

// export default function LoginComponent({ titleHeader, textAlreadyAccount, signInOrSignUp }: LoginProps) {
//   return(
//     <div className={styles.container}>
//       <div className={styles.cardContent}>
//         <div className={styles.containerClose}>
//           <Image src={logoCompany} height={130} alt="logoCompany" />
//           <Link href="/">
//             <i className="pi pi-times">Cerrar</i>
//           </Link>
//         </div>

//         <div className={styles.containerHeader}>
//           <PTText asTag="h2" size="lg" weight="600" className={styles.titleSignUp}>{titleHeader}</PTText>
//           <div className={styles.subHeader}>
//             <PTText asTag="h5" size="sm" weight="500" className={styles.countText}>{textAlreadyAccount}</PTText>
//             <Link href="/sign-up" className={styles.linkSignIn}>{signInOrSignUp}</Link>
//           </div>
//         </div>

//         <div className={styles.containerForm}>
//           <div className={styles.signUpWithForm}>
//             <PTInput
//               size="md"
//               className={styles.inputs}
//               name="email"
//               type="email"
//               value={values.email}
//               onChange={handleInputChange}
//               placeholder="Email"
//             />
//             <PTInput
//               size="md"
//               className={styles.inputs}
//               name="password"
//               type="password"
//               value={values.password}
//               onChange={handleInputChange}
//               placeholder="Password"
//             />
//             <ReCAPTCHA
//               ref={recaptchaRef}
//               sitekey="6Lcj9H8kAAAAAO1EXHjGueHubA1yVhvxYpW1gs2t"
//               onChange={handlerecaptcha}
//               className={styles.recaptcha}
//             />
//             <PTButton
//               size="lg"
//               isMain={false}
//               onClick={handleSignIn}
//               className={styles.buttonSignUp}
//             >Ingresar
//             </PTButton>
//           </div>

//           <div className={styles.signUpWithApps}>
//             <button
//               onClick={handleSignInGoogle}
//               className={styles.buttonSignUpWithApp}
//             >
//               <i className="pi pi-google"> Ingresar con Google</i>
//             </button>

//             <button
//               onClick={handleSignInGoogle}
//               className={styles.buttonSignUpWithApp}
//             >
//               <i className="pi pi-facebook"> Ingresar con Facebook</i>
//             </button>

//             <button
//               onClick={handleSignInGoogle}
//               className={styles.buttonSignUpWithApp}
//             >
//               <i className="pi pi-apple"> Ingresar con Apple</i>
//             </button>

//             <button
//               onClick={handleSignInGoogle}
//               className={styles.buttonSignUpWithApp}
//             >
//               <i className="pi pi-at"> Ingresar con Hotmail</i>
//             </button>
//           </div>
//         </div>

//         {user && <pre>{user.email}</pre>}
//       </div>
//     </div>
//   )
// }