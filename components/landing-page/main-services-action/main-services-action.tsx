import styles from './services-action.module.scss';
import curvesBackground from '../../../public/finanzas-personales-impuestos-banner.png';
import Image from 'next/image';
import PTButton from '../../button/pt-button';

export default function MainServicesAction() {
  return (
    <>
      <Image src={curvesBackground} className={styles.imageCurves} />
      <div className={`${styles.sectionHome} ${styles.grade}`}>
        <h2 className={styles.heading}>¿Ya sabes si te toca y cuándo tienes que declarar renta?</h2>
        <div className={styles.featureCards}>
          <div className={`${styles.featureCard} ${styles.left} ${styles.declaration} ${styles.darkPurple}`}>
            <div className={styles.moveupFeatureIcon}>
              <h3 className={`${styles.headingBox} ${styles.white}`}>Averigua si estás obligado a declarar en 2023</h3>
              <p className={`${styles.textGrey} ${styles.white} ${styles.centerAlign}`}>Contesta estas preguntas y te ayudamos a determinar si estás obligado a presentar tu declaración ante la DIAN de acuerdo los topes vigentes en 2022 </p>
              <PTButton size="md" isMain={false}>¿Debo declarar renta en 2023?</PTButton>
            </div>
          </div>

          <div className={`${styles.featureCard} ${styles.left} ${styles.declaration} ${styles.darkPurple}`}>
            <div className={styles.moveupFeatureIcon}>
              <h3 className={`${styles.headingBox} ${styles.white}`}>¿Hasta cuándo tienes plazo para declarar renta?</h3>
              <p className={`${styles.textGrey} ${styles.white} ${styles.centerAlign}`}>Si tienes que declarar renta, te decimos tu fecha límite para hacerlo en 2022 de acuerdo al número de tu cédula.
                <p>¡Evita sanciones!</p>
              </p>
              <PTButton size="md" isMain={false} className="buttonMint">Fechas para declarar renta en 2023</PTButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}