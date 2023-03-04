import Image, { StaticImageData } from 'next/image';
import PTText from '../../../../components/text/pt-text';
import styles from './company-value.module.scss';

export interface CompanyValueProps {
  companyValue: {
    image: StaticImageData;
    title: string;
    items: string[];
  }
}

export default function CompanyValue({ companyValue }: CompanyValueProps) {
  return (
    <div className={`${styles.column5} ${styles.wCol} ${styles.col3}`}>
      <div className={styles.divBlock}>
        <Image src={companyValue.image} className={styles.images} width={160} height={160} alt="images" />
      </div>
      <PTText asTag='h3' size='lg' weight='700' className={styles.headingBox}>{companyValue.title}</PTText>
      <ul className={styles.wCol}>
        {companyValue.items.map((item) => (
          <li key={item}>
            <PTText size='md' weight='400' className={styles.textBox}>{item}</PTText>
          </li>
        ))}
      </ul>
    </div>
  )
}