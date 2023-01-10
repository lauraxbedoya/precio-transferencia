import Image, { StaticImageData } from 'next/image';
import PTText from '../../../text/pt-text';
import styles from './benefits-component.module.scss';

export interface benefitsProps {
  imagesIcon: StaticImageData;
  title: string;
  description: string;
}

export default function BenefitsComponent({ imagesIcon, title, description }: benefitsProps) {
  return (
    <div className={styles.feature}>
      <div className={styles.iconLeft}>
        <Image src={imagesIcon} className={styles.image} />
      </div>
      <div className={styles.featureInfoRight}>
        <PTText size='md' weight='700' className={styles.headingLeft} style={{ fontFamily: '20px' }}>{title}</PTText>
        <PTText size='xs' weight='400' className={styles.textGrey}>{description}</PTText>
      </div>
    </div>
  )
}