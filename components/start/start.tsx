import PTButton from '@/components/common/button/pt-button';
import Image from 'next/image';
import styles from './start.module.scss';
import spaceIcon from '@/public/spacecraft.png';
import PTText from '../common/text/pt-text';

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
