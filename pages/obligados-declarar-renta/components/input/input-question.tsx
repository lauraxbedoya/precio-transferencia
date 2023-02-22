import PTText from '../../../../components/text/pt-text';
import styles from './input-question.module.scss';
import { InputHTMLAttributes } from 'react';

export interface InputQuestionProps extends InputHTMLAttributes<HTMLInputElement> {
  textHeader: string;
}

export default function InputQuestion({
  textHeader,
  ...props
}: InputQuestionProps) {

  return (
    <>
      <div className={`${styles.formColumn} ${styles.wCol} ${styles.wCol4}`}>
        <PTText size='md' weight='400' className={styles.textHeader}>{textHeader}</PTText>
        <input {...props} className={`${styles.formTextField} ${styles.wInput}`} />
      </div>
    </>
  )
}