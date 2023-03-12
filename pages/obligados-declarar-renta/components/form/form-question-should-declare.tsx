import Image from 'next/image';
import { Question } from '@/interfaces/should-declare-question.interface';
import styles from './form-question.module.scss';
import iconQuestions from '@/public/form-should-declare/question-icon.png';
import { memo } from 'react';
import PTText from '@/components/common/text/pt-text';
import dynamic from 'next/dynamic';

export interface FormQuestionProps {
  question: Question;
  onAnswer: (questionId: number, answer: string) => void;
  answer: string | undefined;
}

const FormQuestionShouldDeclare = memo(
  ({ question, onAnswer }: FormQuestionProps) => {
    return (
      <div className={styles.questionBlock}>
        <PTText size="sm" weight="700" className={styles.mainQuestionTitle}>
          {question.question}
        </PTText>
        <div className={styles.answerBlock}>
          <div className={styles.answerIcon}>
            <Image src={iconQuestions} alt="iconQuestion" />
          </div>
          <div className={styles.answerSelector}>
            <PTText
              size="xs"
              weight="400"
              className={styles.questionDescription}
            >
              {question.description}
            </PTText>
            <label className={`${styles.radio} ${styles.wRadio}`}>
              <input
                type="radio"
                name={`shouldDeclareAnswer-${question.id}`}
                onChange={() => onAnswer(question.id, 'no')}
              />
              <PTText size="xs" weight="400" className={styles.wFormLabel}>
                No
              </PTText>
            </label>
            <label className={`${styles.radio} ${styles.wRadio}`}>
              <input
                type="radio"
                name={`shouldDeclareAnswer-${question.id}`}
                onChange={() => onAnswer(question.id, 'si')}
              />
              <PTText size="xs" weight="400" className={styles.wFormLabel}>
                Sí
              </PTText>
            </label>
          </div>
        </div>
      </div>
    );
  },
);

FormQuestionShouldDeclare.displayName = 'FormQuestionShouldDeclare';

export default dynamic(() => Promise.resolve(FormQuestionShouldDeclare), {
  ssr: false,
});
