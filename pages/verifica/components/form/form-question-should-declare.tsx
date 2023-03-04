import Image from 'next/image';
import { Question } from '../../../../interfaces/should-declare-question.interface';
import styles from './form-question.module.scss';
import iconQuestions from '../../../../public/form-should-declare/question-icon.png';
import PTText from '../../../../components/text/pt-text';
import { memo } from 'react';

export interface FormQuestionProps {
  question: Question;
  onAnswer: (questionId: number, answer: string) => void;
  answer: string | undefined;
}

const FormQuestionShouldDeclare = memo(({ question, onAnswer }: FormQuestionProps) => {
  return (
    <div className={styles.questionBlock}>
      <div className={styles.logoAndQuestion}>
        <div className={styles.answerIcon}>
          <Image src={iconQuestions} alt="iconQuestion" />
        </div>
        <div className={styles.questionAndDescription}>
          <PTText size='xs' weight='500' className={styles.mainQuestionTitle}>{question.question}</PTText>
          <PTText size='xs' weight='400' className={styles.questionDescription}>{question.description}</PTText>
        </div>
      </div>

      <div className={styles.answerSelector}>
        <label className={`${styles.radio} ${styles.wRadio}`}>
          <input type="radio" name={`shouldDeclareAnswer-${question.id}`} onChange={() => onAnswer(question.id, 'no')} />
          <PTText size='xs' weight='400' className={styles.wFormLabel}>No</PTText>
        </label>
        <label className={`${styles.radio} ${styles.wRadio}`}>
          <input type="radio" name={`shouldDeclareAnswer-${question.id}`} onChange={() => onAnswer(question.id, 'si')} />
          <PTText size='xs' weight='400' className={styles.wFormLabel}>Sí</PTText>
        </label>
      </div>
    </div>
  );
})

FormQuestionShouldDeclare.displayName = 'FormQuestionShouldDeclare';

export default FormQuestionShouldDeclare;