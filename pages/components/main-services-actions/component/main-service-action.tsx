import PTButton from '@/components/button/pt-button';
import PTText from '@/components/text/pt-text';
import styles from './main-service-action.module.scss';

export interface servicesActionProps {
  titleBox: string;
  textButton: string;
  onClick: () => any;
}

export default function ServicesActionComponent({
  titleBox,
  textButton,
  onClick,
}: servicesActionProps) {
  return (
    <div
      className={styles.containerCards}
    >
      <PTText
        size="md"
        weight="500"
        className={styles.headingBox}
      >
        {titleBox}
      </PTText>

      <PTButton
        size="xl"
        isMain={false}
        onClick={onClick}
        className={styles.button}
      >
        {textButton}
      </PTButton>
    </div>
  );
}
