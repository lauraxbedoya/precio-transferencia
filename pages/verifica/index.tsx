import Image from 'next/image';
import styles from './should-declare.module.scss';
import logoCompany from '../../public//logo/logo.png';
import PTText from '../../components/text/pt-text';
import { ChangeEvent, useEffect, useState } from 'react';
import FormQuestionShouldDeclare from './components/form/form-question-should-declare';
import { api } from '../../helpers/api.helper';
import { Answer, Question } from '../../interfaces/should-declare-question.interface';
import PTButton from '../../components/button/pt-button';
import { useAppSelector } from '../../redux/store';
import { User } from '../../interfaces/user.interface';
import PTInput from '../../components/input/pt-input';
import Router from 'next/router';
import UserInfoShouldDeclare from './components/user-info';
import ShouldDeclareResponseMessage, { ShouldDeclareMessages } from './components/should-declare-response-message/should-declare-response-message';
import { cipher, secretKey } from '../../utils/crypto';

function ObligadosDeclararRenta2023() {
  const [termsConditions, setTermsConditions] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionsToShow, setQuestionsToShow] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const { user } = useAppSelector((state) => state.session);
  const [formUser, setFormUser] = useState<Partial<User> | null>(user);
  const [nit, setNit] = useState<string>('');
  const [shouldDeclareResponse, setShouldDeclareResponse] = useState<ShouldDeclareMessages>();

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

  const handleSubmitShouldDeclare = async () => {
    // const answer = answers.find((ans) => ans.answer);
    if (answers.length < 4) {
      alert('Todas las respuestas son requeridas.')
    } else {
      if (!formUser?.name || !formUser.lastName || !formUser?.email || !nit) {
        alert('Todos los campos son requeridos.')
      } else {
        try {
          const resp = await api.post<ShouldDeclareMessages>('should-declare/create-submission', { user: { ...formUser, createdFrom: 'should_declare' }, nit, answers });
          if (resp.data) {
            setShouldDeclareResponse(resp.data);
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
  // MESSAGE1 http://localhost:8080/verifica/quiero-mas-informacion?response=1830262634323067
  // MESSAGE2 http://localhost:8080/verifica/quiero-mas-informacion?response=1830262634323064
  const handleGetMoreInformation = () => {
    const myCipher = cipher(secretKey);
    const response = myCipher(shouldDeclareResponse);
    Router.push({
      pathname: '/verifica/quiero-mas-informacion',
      query: {
        response
      }
    });
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'nit') {
      setNit(e.target.value)
    } else {
      setFormUser(
        {
          ...formUser,
          [e.target.name]: e.target.value,
        }
      );
    }
  }

  useEffect(() => {
    getAllQuestions();
  }, []);

  useEffect(() => {
    setFormUser({ name: user?.name, lastName: user?.lastName, email: user?.email });
  }, [user])

  useEffect(() => {
    console.log(formUser);
  }, [formUser])


  return (
    <div className={styles.overflow}>
      <div className={styles.conditionsToPayTaxWrapper}>
        <div className={styles.conditionFormContent}>
          <div className={styles.logoHeader}>
            <Image src={logoCompany} height={50} alt="logoCompany" />
            <PTText size='md' weight='700' className={styles.formHead}>¡Averigua si tu compañía está sujeta al régimen de precios de transferencia para el año fiscal 2022!</PTText>
          </div>
          <div className={styles.questionsDivider}></div>

          {!shouldDeclareResponse ?
            <>
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
              </div>


              <UserInfoShouldDeclare
                onChange={handleInputChange}
                name={formUser?.name}
                lastName={formUser?.lastName}
                email={formUser?.email}
                nit={nit}
                termsConditions={termsConditions}
                onHandleSubmitShouldDeclare={handleSubmitShouldDeclare}
              />
            </> :
            <>
              {shouldDeclareResponse &&
                <ShouldDeclareResponseMessage
                  name={formUser?.name || ''}
                  nit={nit}
                  message={shouldDeclareResponse}
                  onClick={handleGetMoreInformation}
                />
              }
            </>
          }
        </div>
      </div>

      <div className={`${styles.sectionInfo} ${styles.wfSection}`}></div>
    </div>
  )
}

export default ObligadosDeclararRenta2023;