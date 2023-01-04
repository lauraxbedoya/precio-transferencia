import PTButton from '../../button/pt-button';
import PTText from '../../text/pt-text';
import styles from './main-banner.module.scss';

export default function MainBanner() {
  return (
    <div className={`${styles.container} ${styles.section}`}>
      <div className={styles.servicesTextBox}>
        <div className={styles.wrapper}>
          <PTText size='xxxl' weight='700' className={styles.heading}>Tu declaración de renta 2023, segura y garantizada</PTText>
          <PTText size='sm' weight='400' className={styles.textBody}>Elabora tu declaración de renta de persona natural de forma fácil y ahorrando dinero. Con ayuda a través de chat o con un contador personal certificado.</PTText>
        </div>
        <div className={styles.containerButton}>
          <PTButton size="md" isMain={false}>Elaborar mi declaración de renta</PTButton>
        </div>
      </div>
    </div>
  )
}