import PTButton from '../../../button/pt-button';
import styles from './services-action-component.module.scss';

export interface servicesActionProps {
  titleBox: string;
  textBox: string;
  textButton: string;
};

export default function ServicesActionComponent({ titleBox, textBox, textButton }: servicesActionProps) {
  return (
    <>
      <div className={`${styles.featureCard} ${styles.left} ${styles.declaration} ${styles.darkPurple}`}>
        <div className={styles.moveupFeatureIcon}>
          <h3 className={`${styles.headingBox} ${styles.white}`}>{titleBox}</h3>
          <p className={`${styles.textGrey} ${styles.white} ${styles.centerAlign}`}>{textBox}</p>
          <PTButton size="md" isMain={false}>{textButton}</PTButton>
        </div>
      </div>
    </>
  )
}