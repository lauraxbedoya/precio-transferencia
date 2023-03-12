import { useRouter } from 'next/router';
import { decipher, secretKey } from '@/utils/crypto';
import styles from './result.module.scss';
import PTButton from '@/components/common/button/pt-button';
import Image from 'next/image';
import imageConfigure from '@/public/goal.png';
import { ShouldDeclareMessages } from '@/components/verifica/should-declare-response-message/should-declare-response-message';
import PTText from '@/components/common/text/pt-text';
import dynamic from 'next/dynamic';

const resultMessages = {
  Message1: {
    plan: '¡Obtener el informe técnico de TPTRIP sobre las obligaciones de Precios de Transferencia de mi compañía!',
    planItems: [
      {
        text: 'Tú ingresas la información a nuestra plataforma con las indicaciones de PT-PRO (si quieres conocer mayor detalle de la información que debes ingresar puedes consultar en nuestro Chat PT-PRO).',
      },
      {
        text: 'Chat de ayuda con experto en Precios de Transferencia que resuelve tus dudas generales.',
      },
      {
        text: 'El tiempo de elaboración será a tu ritmo. Si decides detenerte en algún momento tu información quedará guardada y podrás retomar cuando quiras.',
      },
      {
        text: 'Una vez termines de ingresar y verificar la información requerida, PT-PRO te entregará el informe técnico que contiene:',
        children: [
          'Las razones detalladas del por qué sí o no a tu compañía le aplica el régimen de Precios de Transferencia.',
          'Las obligaciones que debe cumplir, y una breve descripción de estas.',
          'Los plazos dentro de los cuales se deben presentar estas obligaciones',
          'En caso de que tu compañía solo deba realizar la notificación del informe país por país, PTPRO te indicará cómo hacerlo.',
        ],
      },
      {
        text: 'El informe técnico será elaborado a partir de la normativa colombiana vigente, lo cuál te dará certeza de las obligaciones que tú compañía debe presentar para dar cumplimiento al régimen de Precios de Transferencia.',
      },
    ],
    price: '259.',
  },
  Message2: {
    plan: '¡Obtener el informe técnico de TPTRIP sobre las obligaciones de Precios de Transferencia de mi compañía!',
    planItems: [
      {
        text: 'Tú ingresas la información a nuestra plataforma con las indicaciones de PT-PRO (si quieres conocer mayor detalle de la información que debes ingresar puedes consultar en nuestro Chat PT-PRO).',
      },
      {
        text: 'Chat de ayuda con experto en Precios de Transferencia que resuelve tus dudas generales.',
      },
      {
        text: 'El tiempo de elaboración será a tu ritmo. Si decides detenerte en algún momento tu información quedará guardada y podrás retomar cuando quiras.',
      },
      {
        text: 'Una vez termines de ingresas y verificar la información requerida, PT-PRO te entregará el informe técnico que contiene:',
        children: [
          'Las razones detalladas del por qué sí o no a tu compañía le aplica el régimen de Precios de Transferencia.',
          'Las obligaciones que debe cumplir, y una breve descripción de estas.',
          'Los plazos dentro de los cuales se deben presentar estas obligaciones',
          'En caso de que tu compañía solo deba realizar la notificación del informe país por país, PTPRO te indicará cómo hacerlo.',
        ],
      },
      {
        text: 'El informe técnico será elaborado a partir de la normativa colombiana vigente, lo cuál te dará certeza de las obligaciones que tú compañía debe presentar para dar cumplimiento al régimen de Precios de Transferencia.',
      },
    ],
    price: '189.',
  },
};

const Result = () => {
  const { query } = useRouter();
  const { response } = query as { response: string };
  const myDecipher = decipher(secretKey);
  const resultMessage = myDecipher(response) as ShouldDeclareMessages;

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.pricingV1Badge}>
          <>
            <Image src={imageConfigure} alt="configure" height={32} />
            <PTText size="xxxs" weight="500">
              Recomendado
            </PTText>
          </>
        </div>
        <div className={styles.plan}>
          <PTText asTag="h1" size="xxl" weight="600">
            {resultMessages[resultMessage].plan}
          </PTText>
        </div>

        <div className={styles.containerDivInfo}>
          <div className={styles.containerPrice}>
            <div className={styles.pricingCurrency}>$</div>
            <PTText size="xxxl" weight="600">
              {resultMessages[resultMessage].price}
            </PTText>
            <span className={styles.moveUpCents}>000</span>
          </div>

          <ul className={styles.containerListItems}>
            {resultMessages[resultMessage].planItems.map((plan) => (
              <li key={plan.text} className="pt-list pro">
                <PTText size="md" weight="400">
                  {plan.text}
                </PTText>
                {plan.children && (
                  <ul>
                    {plan.children.map((child) => (
                      <li className="pt-list sublist pro" key={child}>
                        <PTText size="md" weight="400">
                          {child}
                        </PTText>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <PTButton size="lg" isMain>
          ¡Obtener!
        </PTButton>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Result), {
  ssr: false,
});
