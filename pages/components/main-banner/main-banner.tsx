import PTButton from '@/components/button/pt-button';
import PTText from '@/components/text/pt-text';
import styles from './main-banner.module.scss';

export default function MainBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.containerVideoAndTitle}>
        <PTText asTag="h1" size="xxxl" weight="700" className={styles.heading}>
          Preparación de la declaración de Precios de Transferencia de manera
          confiable, ágil y sin complicaciones
        </PTText>
        <iframe
          width="620"
          height="315"
          className={styles.youtubevideo}
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>

      <div className={styles.containerTextBody}>
        <PTText size="lg" weight="400" className={styles.textBody}>
          Te ayudamos con todo el proceso de elaboración y presentación de la
          declaración de precios de transferencia de la mano de un experto - PT
          PRO - Tú eliges el nivel de acompañamiento que quieras.
        </PTText>
      </div>

      <div className={styles.containerButton}>
        <PTButton size="lg" isMain={false}>
          Elaborar la declaración de Precios de Transferencia
        </PTButton>
      </div>
    </div>
  );
}
