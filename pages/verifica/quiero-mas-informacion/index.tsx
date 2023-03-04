import { useRouter } from "next/router";
import PTText from "../../../components/text/pt-text";
import { decipher, secretKey } from "../../../utils/crypto";
import { ShouldDeclareMessages } from "../components/should-declare-response-message/should-declare-response-message";
import styles from './result.module.scss';

const resultMessages = {
  Message1: {
    plan: '¡Obtener el informe técnico de TPTRIP sobre las obligaciones de precios de transferencia de mi compañía!',
    planItems: [
      { text: 'Tú ingresas la información a nuestra plataforma con las indicaciones de PT PRO (si quieres conocer mayor detalle de la información que debes ingresar puedes consultar en nuestro Chat PT PRO).' },
      { text: 'Chat de ayuda con experto en precios de trasnferencia que resuelve tus dudas generales.' },
      { text: 'El tiempo de elaboración será a tu ritmo. Si decides detenerte en algún momento tu información quedará guardada y podrás retomar cuando quiras.' },
      {
        text: 'Una vez termines de ingresas y verificar la información requerida, PT PRO te entregará el informe técnico que contiene:',
        children: [
          'Las razones detalladas del por qué sí o no a tu compañía le aplica el régimen de precios de transferencia.',
          'Las obligaciones que debe cumplir, y una breve descripción de estas.',
          'Los plazos dentro de los cuales se deben presentar estas obligaciones',
          'En caso de que tu compañía solo deba realizar la notificación del informe país por país, PTPRO te indicará cómo hacerlo.'
        ]
      },
      { text: 'El informe técnico será elaborado a partir de la normativa colombiana vigente, lo cuál te dará certeza de las obligaciones que tú compañía debe presentar para dar cumplimiento al régimen de precios de trasnferencia.' },
    ],
    price: '259.000',
  },
  Message2: {
    plan: '¡Obtener el informe técnico de TPTRIP sobre las obligaciones de precios de trasnferencia de mi compañía!',
    planItems: [
      { text: 'Tú ingresas la información a nuestra plataforma con las indicaciones de PT PRO (si quieres conocer mayor detalle de la información que debes ingresar puedes consultar en nuestro Chat PT PRO).' },
      { text: 'Chat de ayuda con experto en precios de trasnferencia que resuelve tus dudas generales.' },
      { text: 'El tiempo de elaboración será a tu ritmo. Si decides detenerte en algún momento tu información quedará guardada y podrás retomar cuando quiras.' },
      {
        text: 'Una vez termines de ingresas y verificar la información requerida, PT PRO te entregará el informe técnico que contiene:',
        children: [
          'Las razones detalladas del por qué sí o no a tu compañía le aplica el régimen de precios de transferencia.',
          'Las obligaciones que debe cumplir, y una breve descripción de estas.',
          'Los plazos dentro de los cuales se deben presentar estas obligaciones',
          'En caso de que tu compañía solo deba realizar la notificación del informe país por país, PTPRO te indicará cómo hacerlo.'
        ]
      },
      { text: 'El informe técnico será elaborado a partir de la normativa colombiana vigente, lo cuál te dará certeza de las obligaciones que tú compañía debe presentar para dar cumplimiento al régimen de precios de trasnferencia.' }
    ],
    price: '189.000',
  },
}

export default function Result() {
  const { query } = useRouter();
  const { response } = query as { response: string };
  const myDecipher = decipher(secretKey);
  const resultMessage = myDecipher(response) as ShouldDeclareMessages;

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>

        <div className={styles.plan}>
          <PTText size="md" weight="600">{resultMessages[resultMessage].plan}</PTText>
        </div>

        <div className={styles.containerDivInfo}>
          <div className={styles.containerPrice}>
            <PTText size="md" weight="600">{resultMessages[resultMessage].price}</PTText>
          </div>
          <ul>
            {resultMessages[resultMessage].planItems.map((plan) => (
              <>
                <li key={plan.text}>
                  <PTText size='sm' weight='500'>{plan.text}</PTText>
                </li>
                <li><PTText size='sm' weight='500'>{plan.children}</PTText></li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}