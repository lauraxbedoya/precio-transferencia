import LineDivider from '../../../components/line-divider/line-divider';
import PTText from '../../../components/text/pt-text';
import Plan from './component/plan';
import styles from './plans.module.scss';

const paidPlans = [
  {
    planItems: [
      'Tú ingresas la información a nuestra plataforma con las indicaciones de PT PRO (chat PRO).',
      'Chat de ayuda con experto en precios de trasnferencia que resuelve tus dudas generales.',
      'El tiempo de elaboración será a tu ritmo. Si decides detenerte en algún momento tu información quedará guardada y podrás retomar cuando quiras.',
      'Una vez termines de ingresas y verificar la información requerida, PT PRO te entregará la declaración de precios de trasnferencia.',
      'Te garantizamos el cumplimiento de lo establecido en la ley Colombiana de precios de transferencia, en específico el artículo 260-9 del Estatuto Tributario.'
    ],
    plan: 'Plan PT Pro',
    price: '379.',
    isPro: true,
    button: '¡Adquiere tu plan PT PRO!',
  },
  {
    planItems: [
      'Todo lo que incluye el plan PT PRO.',
      'Cuando termines el proceso podrás agendar una reunión virtual de hasta dos horas con un consultor experto en precios de trasnferencia para revisar tu información.'
    ],
    plan: 'Plan Convencional',
    price: '589.',
    isPro: false,
    button: '¡Adquiere tu plan Convencional!',
  },
  {
    planItems: [
      'Todo lo que incluye el plan Convencional.',
      'Durante todo el proceso, tendrás a tu disposición un consultor experto en precios de transferencia que te asesorará de forma personalizada en reunión virtual de hasta cuatro horas.'
    ],
    plan: 'Plan Élite Diamante',
    price: '899.',
    isPro: false,
    button: '¡Adquiere tu plan Élite Diamante!',
  }
];

const keyDataItems = [
  'Podrás agendar la reunión con el consultor experto en precios de trasnferencia en bloques de mínimo una hora. Ten en cuenta que el espacio agendado será lo que se te descontará de tu tiempo disponible, sin importar si la reunión toma menos tiempo. Por lo cuál te recomendamos tener toda la información disponible y precisa para poder aprovechar al máximo la sesión programada. Ten presente que podrás cancelar o reprogramar la reunión con el consultor hasta dos horas antes del inicio de esta para que no se te descuente el tiempo.',
  'Si requieren más tiempo con el consultor experto en precios de trasnferencia, siempre podrás adquirir más horas por un valor de $117.000/hora.',
  'Ten en cuenta que en estas horas solo se resolverán temas relacionados con el diligenciamiento de la declaración de precios de transferencia.',
];

export default function Plans() {
  return (
    <div className={`${styles.section} ${styles.grade} ${styles.noPaddingTop}`}>
      <div className={styles.declaracionPlansWrapper}>
        <div className={styles.sectionIntro}>
          <LineDivider />
          <PTText size='xxl' weight='700' className={styles.headingPlans}>Planes PT-Trip para la elaboración de la declaración de Precios de Transferencia</PTText>
          <PTText size='sm' weight='400' className={`${styles.title} ${styles.caps} ${styles.price}`}>De la mano de PR-PRO, prepara la declaración de precios de trasnferencia de manera segura y sin obstaculos.</PTText>
        </div>

        <div className={styles.wColumns}>
          <div className={`${styles.wCol} ${styles.wCol6} ${styles.wCol8}`}>
            <div className={styles.estandarAndExpres}>
              {paidPlans.map(paidPlan =>
                <Plan
                  key={paidPlan.plan}
                  paidPlan={paidPlan}
                />
              )}
            </div>
          </div>
        </div>

        <PTText size='md' weight='700' className={styles.important}>Importante...</PTText>

        <div className={styles.containerTextEnd}>
          {keyDataItems.map(item => (
            <PTText size='xs' weight='400' className={styles.itemsSpan} key={item}>{item}</PTText>
          ))}
        </div>
      </div>
    </div>
  )
}