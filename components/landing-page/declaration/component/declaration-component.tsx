import Image, { StaticImageData } from 'next/image';
import PTText from '../../../text/pt-text';
import styles from './declaration-component.module.scss';

export interface DeclarationProps {
  img: StaticImageData;
  title: string;
  description: string;
}

export default function DeclarationComponent({ img, title, description }: DeclarationProps) {
  return (
    <div className={`${styles.column5} ${styles.wCol} ${styles.col3}`}>
      <div className={styles.divBlock}>
        <Image src={img} className={styles.images} />
      </div>
      <PTText size='md' weight='700' className={styles.headingBox}>{title}</PTText>
      <div className={styles.wCol}>
        <PTText size='sm' weight='400' className={styles.textBox}>{description}</PTText>
      </div>
    </div>
  )
}