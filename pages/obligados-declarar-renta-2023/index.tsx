import Image from 'next/image';
import styles from './should-declare.module.scss';

import logo from '../../public/logopagina.png';
import clockImage from '../../public/clock-image.png';
import InputQuestion from './components/input/input-question';
import PTText from '../../components/text/pt-text';
import { useEffect, useState } from 'react';
import FormQuestionShouldDeclare from './components/form/form-question-should-declare';
import { api } from '../../helpers/api.helper';
import { Answer, Question } from '../../interfaces/should-declare-question.interface';
import PTButton from '../../components/button/pt-button';

export default function ObligadosDeclararRenta2023() {
  const [termsConditions, setTermsConditions] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionsToShow, setQuestionsToShow] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);


  const getAllQuestions = async () => {
    try {
      const questions = await api.get<Question[]>('should-declare');
      setQuestions(questions.data);
      setQuestionsToShow(questions.data.filter((question) => !question.parentQuestionId));
    } catch (error) {
      console.log(error)
    }
  }

  const handleAnswer = async (questionId: number, answer: string) => {
    // set new children to questions to show list
    const newQuestionsToShow = handleNewQuestionsToShow(questionId, answer);

    let newAnswers = [...answers];

    const answerIndex = newAnswers.findIndex((x) => x.questionId === questionId);

    if (answerIndex === -1) {
      newAnswers.push({ questionId, answer });
    } else {
      newAnswers[answerIndex].answer = answer;
    }

    const questionIds = newQuestionsToShow.map((question) => question.id);
    newAnswers = newAnswers.filter((answer) => questionIds.includes(answer.questionId));

    setAnswers(newAnswers)
  }

  const handleNewQuestionsToShow = (questionId: number, answer: string) => {
    // encontrar nuevas questions a agregar a questionsToShow que coinciden con answer
    const newChildrenQuestion = questions.filter((question) => question.parentQuestionId === questionId && question.showIfAnswer === answer);

    const finalQuestions = questionsToShow.filter((question) => {
      if (!question.parentQuestionId) {
        return true;
      }
      const ancestorQuestion = findAncestorWithQuestionId(question, questionId, questionsToShow);
      if (!ancestorQuestion || ancestorQuestion?.showIfAnswer === answer) {
        return true;
      }
      return false;
    })

    const questionWithChildren = [...finalQuestions, ...newChildrenQuestion];

    setQuestionsToShow(questionWithChildren);
    return questionWithChildren;
  }

  const findAncestorWithQuestionId = (question: Question | undefined, ansestorId: number, questionWithChildren: Question[]): Question | undefined => {
    if (!question?.parentQuestionId) return undefined;

    if (question.parentQuestionId === ansestorId) {
      return question;
    }

    const newParentQuestion = questionWithChildren.find((qu) => qu.id === question.parentQuestionId);

    return findAncestorWithQuestionId(newParentQuestion, ansestorId, questionWithChildren);
  }

  useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <div className={styles.overflow}>
      <div className={styles.wrapper}>
        <div className={styles.conditionWrapper}>
          <div className={styles.conditionsToPayTaxWrapper}>
            <div className={styles.conditionFormContent}>
              <div className={styles.logoHeader}>
                <Image src={logo} width={250} height={60} alt="logo" />
              </div>
              <Image src={clockImage} className={styles.clockImage} alt="clock" />
              <PTText size='md' weight='700' className={styles.formHead}>¡Conoce si debes declarar renta en el 2023!</PTText>
              <div className={styles.questionsDivider}></div>
              <div className={styles.questionFormContainer}>
                {questionsToShow.map((question: Question) => (
                  <FormQuestionShouldDeclare
                    key={question.id}
                    question={question}
                    onAnswer={handleAnswer}
                    answer={answers.find((answer) => answer.questionId === question.id)?.answer}
                  />
                ))}
                <div className={styles.questionsDivider}></div>
                <div className={styles.questionBlock}>
                  <div className={`${styles.columns11} ${styles.wRow}`}>
                    <InputQuestion textHeader='Nombre' placeholder='Ingresa tu nombre' />
                    <InputQuestion textHeader='Apellido' placeholder='Ingresa tu apellido' />
                    <InputQuestion textHeader='Correo Electrónico' placeholder='Ingresa tu email' />
                  </div>
                </div>
              </div>
              <div className={styles.questionsDivider}></div>
              <label className={`${styles.wCheckbox} ${styles.checkboxField}`}>
                <input type='checkbox' className={styles.wCheckboxInput} checked={termsConditions} />
                <PTText size='xs' weight='400' className={styles.checkboxLabel}>He leído la  política de privacidad  de Tributi y acepto el tratamiento de mis datos</PTText>
              </label>
              <div className={styles.submitButton}>
                <PTButton size='lg' isMain={false} style={{ color: 'white' }}>Conoce si declaras</PTButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.sectionInfo} ${styles.wfSection}`}></div>
    </div>
  )
}