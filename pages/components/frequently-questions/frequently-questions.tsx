import PTButton from '@/components/button/pt-button';
import LineDivider from '@/components/line-divider/line-divider';
import PTText from '@/components/text/pt-text';
import FrequentlyQuestionsComponent from './component/frequently-question';
import styles from './frequently-questions.module.scss';

const questionsAndAnswers = [
  {
    question:
      '¿Qué pasa si se equivocan en la declaración? ¿Cómo funciona la garantía?',
    answer:
      'Las declaraciones se calculan en una plataforma especializada y actualizada con la legislación colombiana. Por esto, si ingresas información completa y veraz, Tributi te ofrece una garantía por errores en la elaboración de tu declaración. Esto quiere decir: 1) Tributi responde en caso de que la DIAN te imponga una sanción por errores en los cálculos de la declaración. 2) Ante cualquier eventualidad con tu declaración, te brindaremos asesoría personalizada para resolverla.',
  },
  {
    question:
      'Mi contador me ayuda a pagar menos impuestos, ¿ustedes hacen algo así?',
    answer:
      'Sí, En Tributi entendemos a cabalidad la legislación tributaria y nos encargamos de asignar todas las deducciones posibles de la manera óptima para que siempre obtengas el mínimo valor de impuesto a cargo legalmente posible. Lo único que debes hacer es responder las preguntas que te hacemos para la elaboración de tu declaración y listo, nosotros nos encargamos del resto. Recuerda que no es posible que un externo, usando la misma información que nos diste, te calcule de forma correcta un menor impuesto del que obtuviste en Tributi. La única manera de obtener un impuesto menor, sería cambiar tu información base. En Tributi podrás revisar que hayas incluido todas tus deducciones y beneficios, e incluir los que te apliquen y se te hayan olvidado (te ayudamos con una lista completa). Usa siempre información real para evitar sanciones.',
  },
  {
    question:
      'Yo tengo un caso o situación especial, ¿puedo preparar mi declaración de renta con Tributi?',
    answer:
      'En Tributi atendemos todo tipo de situaciones financieras para realizar la declaración de renta: No importa si eres empleado, independiente, recibes honorarios, eres rentista de capital, pensionado, miembro de las fuerzas públicas, recibes rentas extranjeras, tienes ahorros, inversiones, vivienda propia, o recibes ingresos por venta de bienes o herencias entre otros, ¡podemos realizar tu declaración de renta de manera correcta y optimizada!',
  },
  {
    question: '¿Qué me entregan al final del proceso de declaración de renta?',
    answer:
      'Tributi te entrega el formulario de tu declaración de renta completamente diligenciado y optimizado, listo para que lo presentes en cualquier banco, o a través de la plataforma MUISCA de la DIAN, en caso de que tengas firma electrónica. Adicionalmente, te entrega los anexos de tu declaración, para que los tengas como soporte y entiendas cómo se construyó línea por línea. Vas aa poder revisar tu declaración y realizar cambios si es necesario. Te explicamos cómo presentar tu declaración de renta, y en caso de que tengas problemas con el proceso, te brindamos ayuda a través de nuestro chat en vivo.',
  },
  {
    question: '¿Cuál explorador se recomienda para Tributi?',
    answer:
      'Tributi funciona bien en cualquier explorador. Sin embargo, hacemos las siguientes recomendaciones. 1. Desactivar funcionalidades como AdBlockers para la navegación en el sitio web y el app. 2. Algunas redes corporativas pueden bloquear elementos emergentes como el chat en vivo. Si este es tu caso, te recomendamos navegar en una red personal. 3. Debido a que el proceso en Tributi requiere la carga de diversos archivos y certificados, es probable que te resulte más sencillo realizarlo desde un desktop o laptop que desde un smartphone.',
  },
  {
    question: '¿Cómo funciona el programa de referidos?',
    answer:
      'Comparte tu código de referido y te cargaremos $30.000 que podrás descontar del precio a pagar por la preparación de tu declaración de renta, mientras tus amigos reciben 20% de descuento. Para hacer válido este beneficio tus amigos deben ingresar tu código a la hora de pagar por su declaración con Tributi. Consulta tu código ingresando a tu cuenta personal en Tributi.com.',
  },
];

export default function FrequentlyQuestions() {
  return (
    <div className={`${styles.section} ${styles.backgroundWhite}`}>
      <div className={styles.wrapper}>
        <div className={styles.sectionIntro}>
          <LineDivider />
          <PTText size="xl" weight="700" className={styles.sectionHeading}>
            Preguntas Frecuentes
          </PTText>
          <PTText
            size="sm"
            weight="400"
            className={`${styles.textDarkGrey} ${styles.noMargin}`}
          >
            ESTAS SON ALGUNAS DE LAS PREGUNTAS MÁS FRECUENTES. SI TIENES OTRAS
            DUDAS, NO DUDES EN PREGUNTARNOS POR EL CHAT EN VIVO.
          </PTText>
        </div>

        <div className={styles.miniFaq}>
          <div className={styles.faqTestimonial}>
            <div className={styles.dynItems}>
              {questionsAndAnswers.map((element) => (
                <FrequentlyQuestionsComponent
                  key={element.question}
                  question={element.question}
                  answer={element.answer}
                />
              ))}
            </div>
            <PTButton
              size="lg"
              isMain
              className={styles.button}
              style={{
                backgroundColor: 'var(--primary-color)',
                color: 'var(--ternary-color)',
              }}
            >
              Ver todas las preguntas frecuentes
            </PTButton>
          </div>
        </div>
      </div>
    </div>
  );
}
