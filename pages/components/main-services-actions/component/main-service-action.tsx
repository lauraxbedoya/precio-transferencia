import PTButton from '../../../../components/button/pt-button';
import PTText from '../../../../components/text/pt-text';
import styles from './main-service-action.module.scss';

export interface servicesActionProps {
  titleBox: string;
  textButton: string;
  // onClick: () => any;
};

export default function ServicesActionComponent({
  titleBox,
  textButton,
  // onClick
}: servicesActionProps) {
  return (
    <div className={`${styles.featureCard} ${styles.declaration} ${styles.container} ${styles.moveupFeatureIcon}`}>
      <PTText size='md' weight='400' className={`${styles.headingBox} ${styles.white}`}>{titleBox}</PTText>
      <PTButton
        size="md"
        isMain={false}
        // onClick={onClick}
        style={{ "marginBottom": "10px" }}
      >{textButton}
      </PTButton>
    </div>
  )
}