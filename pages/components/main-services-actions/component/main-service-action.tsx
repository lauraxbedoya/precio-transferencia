import PTButton from '../../../../components/button/pt-button';
import PTText from '../../../../components/text/pt-text';
import styles from './main-service-action.module.scss';

export interface servicesActionProps {
  titleBox: string;
  textButton: string;
  onClick: () => any;
};

export default function ServicesActionComponent({
  titleBox,
  textButton,
  onClick
}: servicesActionProps) {
  return (
    <div className={`${styles.featureCard} ${styles.declaration} ${styles.container} ${styles.moveupFeatureIcon}`}>
      <PTText size='md' weight='500' className={`${styles.headingBox} ${styles.white}`}>{titleBox}</PTText>
      <PTButton
        size="lg"
        isMain={false}
        onClick={onClick}
        style={{ "marginBottom": "8px" }}
      >{textButton}
      </PTButton>
    </div>
  )
}