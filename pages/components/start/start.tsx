import PTButton from '@/components/button/pt-button';
import PTText from '@/components/text/pt-text';
import Image from 'next/image';
import styles from './start.module.scss';
import spaceIcon from '@/public/spacecraft.png';

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
          ¡Tu equipo de TPTRIP está listo!
        </PTText>
        <div className={styles.ctaBotonEmpieza}>
          <PTButton size="xxl" isMain={false}>
            ¡Comencemos!
          </PTButton>
        </div>
        <Image src={spaceIcon} height={100} alt="start" />
      </div>
    </div>
  );
}
