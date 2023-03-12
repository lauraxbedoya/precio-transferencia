import styles from './pt-input.module.scss';
import { InputHTMLAttributes } from 'react';
import PTText from '../text/pt-text';

export interface PTInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function PTInput({
  label,
  ...props
}: PTInputProps) {

  return (
    <div className={`${styles.formColumn} ${styles.wCol} ${styles.wCol4}`}>
      <PTText asTag='h3' size='md' weight='700' className={styles.textHeader}>{label}</PTText>
      <input {...props} className={`${styles.formTextField} ${styles.wInput}`} />
    </div>
  )
}