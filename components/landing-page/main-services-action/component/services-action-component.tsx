import PTButton from '../../../button/pt-button';
import PTText from '../../../text/pt-text';
import styles from './services-action-component.module.scss';

export interface servicesActionProps {
  titleBox: string;
  textBox: string;
  textButton: string;
  onClick: () => any;
};

export default function ServicesActionComponent({ titleBox, textBox, textButton, onClick }: servicesActionProps) {
  return (
    <div className={`${styles.featureCard} ${styles.left} ${styles.declaration} ${styles.darkPurple}`}>
      <div className={styles.moveupFeatureIcon}>
        <PTText size='md' weight='400' className={`${styles.headingBox} ${styles.white}`}>{titleBox}</PTText>
        <PTText size='xxs' weight='400' className={`${styles.textGrey} ${styles.white} ${styles.centerAlign}`}>{textBox}</PTText>
        <PTButton size="md" isMain={false} onClick={onClick}>{textButton}</PTButton>
      </div>
    </div>
  )
}