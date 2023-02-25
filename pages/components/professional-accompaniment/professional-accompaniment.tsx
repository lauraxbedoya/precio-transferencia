import Image from "next/image";
import PTButton from "../../../components/button/pt-button";
import PTText from "../../../components/text/pt-text";
import iconAutomation from '../../../public/automatizacion.png';
import styles from './professional-accompaniment.module.scss';

export default function ProfessionalAccompaniment() {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <Image src={iconAutomation} height={145} alt='automation' />
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.containerTitle}>
          <PTText size="xl" weight="600">Nuestra oferta de valor...</PTText>
        </div>
        <div>
          <PTText size="sm" weight="400">¡PT PRO! es un sistema integral que te ofrece la combinación ideal entre la automatización y el acompañamiento de un experto.</PTText>
        </div>
      </div>
    </div>
  )
}