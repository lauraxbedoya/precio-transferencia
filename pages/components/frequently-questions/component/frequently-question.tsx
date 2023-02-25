import Image from 'next/image';
import PTText from '../../../../components/text/pt-text';
import styles from './frequently-question.module.scss';
import questionIcon from '../../../../public/question-icon.png';

export interface QuestionProps {
  question: string;
  answer: string;
}

export default function FrequentlyQuestionsComponent({ question, answer }: QuestionProps) {
  return (
    <div className={`${styles.wCol} ${styles.wCol6}`}>
      <div className={styles.faqQuestion}>
        <div className={styles.faqHeading}>
          <Image src={questionIcon} alt="questionIcon" />
          <PTText size='md' weight='700' className={styles.questionHeading}>{question}</PTText>
        </div>
        <PTText size='xs' weight='400' className={styles.textGrey}>{answer}</PTText>
      </div>
    </div>
  )
}