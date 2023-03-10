import Image from 'next/image';
import iconAutomation from '@/public/automatizacion.png';
import styles from './professional-accompaniment.module.scss';
import PTText from '../common/text/pt-text';

export default function ProfessionalAccompaniment() {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <Image src={iconAutomation} height={200} alt="automation" />
      </div>

      <div className={styles.containerInfo}>
        <div className={styles.textBlock}>
          <PTText asTag="h2" size="xxxl" weight="700">
            Nuestra oferta de valor
          </PTText>
        </div>
        <div className={styles.textBlock}>
          <PTText size="md" weight="500">
            ¡PT-PRO! es un sistema integral que te ofrece la combinación ideal
            entre la automatización y el acompañamiento de un experto.
          </PTText>
        </div>
      </div>
    </div>
  );
}
