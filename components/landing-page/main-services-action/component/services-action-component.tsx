import PTButton from '../../../button/pt-button';
import PTText from '../../../text/pt-text';
import styles from './services-action-component.module.scss';

export interface servicesActionProps {
  titleBox: string;
  textBox: string;
  textButton: string;
};

export default function ServicesActionComponent({ titleBox, textBox, textButton }: servicesActionProps) {
  return (
    <div className={`${styles.featureCard} ${styles.left} ${styles.declaration} ${styles.darkPurple}`}>
      <div className={styles.moveupFeatureIcon}>
        <PTText size='md' weight='400' className={`${styles.headingBox} ${styles.white}`}>{titleBox}</PTText>
        <PTText size='xxs' weight='400' className={`${styles.textGrey} ${styles.white} ${styles.centerAlign}`}>{textBox}</PTText>
        <PTButton size="md" isMain={false}>{textButton}</PTButton>
      </div>
    </div>
  )
}