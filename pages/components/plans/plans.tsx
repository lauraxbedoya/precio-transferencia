import LineDivider from '@/components/line-divider/line-divider';
import PTText from '@/components/text/pt-text';
import Plan from './component/plan';
import styles from './plans.module.scss';

const paidPlans = [
  {
    planItems: [
      'Tú ingresas la información a nuestra plataforma con las indicaciones de PT-PRO (Chat PT-PRO).',
      'Chat de ayuda con experto en Precios de Transferencia que resuelve tus dudas generales.',
      'El tiempo de elaboración será a tu ritmo. Si decides detenerte en algún momento tu información quedará guardada y podrás retomar cuando quiras.',
      'Una vez termines de ingresas y verificar la información requerida, PT-PRO te entregará la declaración de Precios de Transferencia.',
      'Te garantizamos el cumplimiento de lo establecido en la ley Colombiana de Precios de Transferencia, en específico el artículo 260-9 del Estatuto Tributario.',
    ],
    plan: 'Plan PT-PRO',
    price: '379.',
    isPro: true,
    button: '¡Adquiere tu plan PT-PRO!',
  },
  {
    planItems: [
      'Todo lo que incluye el plan PT-PRO.',
      'Cuando termines el proceso podrás agendar una reunión virtual de hasta dos horas con un consultor experto en Precios de Transferencia para revisar tu información.',
    ],
    plan: 'Plan Convencional',
    price: '589.',
    isPro: false,
    button: '¡Adquiere tu plan Convencional!',
  },
  {
    planItems: [
      'Todo lo que incluye el plan Convencional.',
      'Durante todo el proceso, tendrás a tu disposición consultor experto en Precios de Transferencia que te asesorará de forma personalizada en reunión virtual de hasta cuatro horas.',
    ],
    plan: 'Plan Élite Diamante',
    price: '899.',
    isPro: false,
    button: '¡Adquiere tu plan Élite Diamante!',
  },
];

const keyDataItems = [
  'Podrás agendar la reunión con el consultor experto en Precios de Transferencia en bloques de mínimo una hora. Ten en cuenta que el espacio agendado será lo que se te descontará de tu tiempo disponible, sin importar si la reunión toma menos tiempo, por ejemplo; si programas una reunión de una hora pero solo te gastas 20 minutos, se te descontará la hora completa. Te recomendamos tener toda la información disponible y precisa para poder aprovechar al máximo la sesión programada. Ten presente que podrás cancelar o reprogramar la reunión con el consultor hasta dos horas antes del inicio de esta para que no se te descuente el tiempo.',
  'Si requieres más tiempo con el consultor experto en Precios de Transferencia, siempre podrás adquirir más horas por un valor de $117.000/hora.',
  'Ten en cuenta que en estas horas solo se resolverán temas relacionados con el diligenciamiento de la declaración de Precios de Transferencia. Por ejemplo, no se resolverán dudas sobre planeaciones de Precios de Transferencia, fiscalizaciones, o temas especializados o de mayor complejidad.',
];

export default function Plans() {
  return (
    <div className={`${styles.section} ${styles.grade} ${styles.noPaddingTop}`}>
      <div className={styles.declaracionPlansWrapper}>
        <div className={styles.sectionIntro}>
          <LineDivider />
          <PTText
            asTag="h1"
            size="xxxl"
            weight="700"
            className={styles.headingPlans}
          >
            Planes TPTRIP para la elaboración de la declaración de Precios de
            Transferencia
          </PTText>
          <PTText
            size="sm"
            weight="500"
            className={`${styles.title} ${styles.caps} ${styles.price}`}
          >
            De la mano de PR-PRO, prepara la declaración de Precios de
            Transferencia de manera segura y sin obstáculos.
          </PTText>
        </div>

        <div className={styles.wColumns}>
          <div className={`${styles.wCol} ${styles.wCol6} ${styles.wCol8}`}>
            <div className={styles.estandarAndExpres}>
              {paidPlans.map((paidPlan) => (
                <Plan key={paidPlan.plan} paidPlan={paidPlan} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.containerTextImportant}>
          <div className={styles.divImportant}>
            <PTText asTag='h3' size="xl" weight="700" className={styles.important}>
              Importante...
            </PTText>
          </div>

          <div className={styles.containerTextEnd}>
            <ul style={{ "padding": "0px 43px" }}>
              {keyDataItems.map((item) => (
                <li key={item} className='pt-list pro'>
                  <PTText
                    size="sm"
                    weight="400"
                    className={styles.itemsSpan}
                    key={item}
                  >{item}
                  </PTText>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
