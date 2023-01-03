import PTButton from '../../button/pt-button';
import styles from './main-banner.module.scss';

export default function MainBanner() {
  return (
    <div className={`${styles.container} ${styles.section}`}>
      <div className={styles.servicesTextBox}>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>Tu declaración de renta 2023, segura y garantizada</h1>
          <p className={styles.textBody}>Elabora tu declaración de renta de persona natural de forma fácil y ahorrando dinero. Con ayuda a través de chat o con un contador personal certificado.</p>
        </div>
        <div className={styles.containerButton}>
          <PTButton size="md" isMain={false}>Elaborar mi declaración de renta</PTButton>
        </div>
      </div>
    </div>
  )
}