import PTButton from '@/components/button/pt-button';
import PTText from '@/components/text/pt-text';
import styles from './start.module.scss';

export default function Start() {
  return (
    <div className={`${styles.bigMessage} ${styles.grade}`}>
      <div className={styles.wrapper}>
        <PTText
          asTag="h3"
          size="xl"
          weight="600"
          className={styles.bigMessageTextWhite}
        >
          ¡Tu equipo de TPTRIP está listo!.
        </PTText>
        <div className={styles.ctaBotonEmpieza}>
          <PTButton size="xl" isMain={false}>
            ¡Comencemos!
          </PTButton>
        </div>
      </div>
    </div>
  );
}
