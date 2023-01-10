import styles from './main-services-action.module.scss';
import curvesBackground from '../../../public/curves-image.png';
import Image from 'next/image';
import ServicesActionComponent from './component/services-action-component';
import PTText from '../../text/pt-text';

export default function MainServicesAction() {
  return (
    <>
      <Image src={curvesBackground} className={styles.imageCurves} />
      <div className={`${styles.sectionHome} ${styles.grade}`}>
        <PTText size='xl' weight='700' className={styles.heading}>¿Ya sabes si te toca y cuándo tienes que declarar renta?</PTText>

        <div className={styles.featureCards}>
          <ServicesActionComponent
            titleBox="Averigua si estás obligado a declarar en 2023"
            textBox="Contesta estas preguntas y te ayudamos a determinar si estás obligado a presentar tu declaración ante la DIAN de acuerdo los topes vigentes en 2022"
            textButton="¿Debo declarar renta en 2023?"
          />

          <ServicesActionComponent
            titleBox="¿Hasta cuándo tienes plazo para declarar renta?"
            textBox="Si tienes que declarar renta, te decimos tu fecha límite para hacerlo en 2022 de acuerdo al número de tu cédula.
            ¡Evita sanciones!"
            textButton="Fechas para declarar renta en el 2023"
          />
        </div>

      </div>
    </>
  )
}