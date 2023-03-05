import PTButton from '@/components/button/pt-button';
import PTText from '@/components/text/pt-text';
import styles from './statement-max-dates.module.scss';

export interface MaxDateProps {
  maxDate: string;
  name: string;
}

export default function StatementMaxDateResult({
  maxDate,
  name,
}: MaxDateProps) {
  return (
    <div className={styles.container}>
      <div className={styles.divName}>
        <PTText size="lg" weight="400">Hola {name}.</PTText>
      </div>
      <div className={styles.divTextMaxDate}>
        <PTText size="lg" weight="400">Tu fecha límite para declarar renta es el: </PTText>
      </div>
      <div className={styles.divMaxDate}>
        <PTText size="lg" weight="700">{maxDate}</PTText>
      </div>
      <div className={styles.DivRemember}>
        <PTText size="xs" weight="700">Recuerda que si ya pasó tu fecha límite, tu sanción por extemporaneidad
          aumenta con cada mes que dejes pasar sin presentar tu declaración</PTText>
      </div>
      <div className={styles.divButton}>
        <PTButton size="lg" isMain={false}>¡Elaborar mi declaración!</PTButton>
      </div>
    </div>
  );
}
