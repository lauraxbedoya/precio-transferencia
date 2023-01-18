import styles from './input-question.module.scss';

export interface inputQuestionProps {
  textHeader: string;
  placeholder: string;
}

export default function InputQuestion({ textHeader, placeholder }: inputQuestionProps) {
  return (
    <>
      <div className={`${styles.formColumn} ${styles.wCol} ${styles.wCol4}`}>
        <h3 className={styles.textHeader}>{textHeader}</h3>
        <input placeholder={placeholder} className={`${styles.formTextField} ${styles.wInput}`} />
      </div>
    </>
  )
}