import PTButton from '../../button/pt-button';
import PTText from '../../text/pt-text';
import styles from './start-here.module.scss';

export default function StartHereComponent() {
  return (
    <div className={`${styles.bigMessage} ${styles.grade}`}>
      <div className={styles.wrapper}>
        <PTText size='md' weight='600' className={styles.bigMessageTextWhite}>Prepara tu declaración de renta este año con Tributi.</PTText>
        <div className={styles.ctaBotonEmpieza}>
          <PTButton size='xl' isMain={false}>Empieza aquí</PTButton>
        </div>
        <PTText size='md' weight='600' className={styles.bigMessageTextWhite}>Hasta en 2 horas, ahorrando dinero y con garantía</PTText>
      </div>
    </div>
  )
}