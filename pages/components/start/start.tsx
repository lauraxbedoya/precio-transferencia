import PTButton from '../../../components/button/pt-button';
import PTText from '../../../components/text/pt-text';
import styles from './start.module.scss';

export default function Start() {
  return (
    <div className={`${styles.bigMessage} ${styles.grade}`}>
      <div className={styles.wrapper}>
        <PTText size='md' weight='600' className={styles.bigMessageTextWhite}>¡Tu equipo de TP TRIP está listo!.</PTText>
        <div className={styles.ctaBotonEmpieza}>
          <PTButton size='xl' isMain={false}>¡Comencemos!</PTButton>
        </div>
      </div>
    </div>
  )
}