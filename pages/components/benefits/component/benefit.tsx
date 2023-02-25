import Image, { StaticImageData } from 'next/image';
import PTText from '../../../../components/text/pt-text';
import styles from './benefit.module.scss';

export interface benefitsProps {
  imagesIcon: StaticImageData;
  title: string;
  description: string;
}

export default function Benefit({ imagesIcon, title, description }: benefitsProps) {
  return (
    <div className={styles.feature}>
      <div className={styles.iconLeft}>
        <Image src={imagesIcon} className={styles.image} alt="iconBenefitsImages" />
      </div>
      <div className={styles.featureInfoRight}>
        <PTText size='md' weight='700' className={styles.headingLeft} style={{ fontFamily: '20px' }}>{title}</PTText>
        <PTText size='xs' weight='400' className={styles.textGrey}>{description}</PTText>
      </div>
    </div>
  )
}