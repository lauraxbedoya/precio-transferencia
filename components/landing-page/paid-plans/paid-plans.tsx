import LineDivider from '../../line-divider/line-divider';
import PTText from '../../text/pt-text';
import PaidPlansComponent from './component/paid-plans-component';
import styles from './paid-plans.module.scss';

export default function PaidPlans() {
  return (
    <div className={`${styles.section} ${styles.grade} ${styles.noPaddingTop}`}>
      <div className={styles.declaracionPlansWrapper}>
        <div className={styles.sectionIntro}>
          <LineDivider />
          <PTText size='xxl' weight='700' className={styles.headingPlans}>Nuestros planes - Declaración de renta</PTText>
          <PTText size='sm' weight='400' className={`${styles.title} ${styles.caps} ${styles.price}`}>Tu declaración de renta en 2 días o 2 horas, CON ACOMPAÑAMIENTO POR CHAT O VIDEOLLAMADA</PTText>
        </div>

        <div className={styles.wColumns}>
          <div className={`${styles.wCol} ${styles.wCol6}`}>
            <PTText className={styles.headingUpBox} size='sm' weight='700'>Un contador certificado te atiende en vivo y hace todo por tí</PTText>
            <div className={styles.estandarAndExpres}>
              <PaidPlansComponent
                isPro
                title="Pro"
                price="169."
                textContent="Te asignamos un contador Tributi Pro que hará todo por ti
                Elaborada en 48 horas o menos
                Tu contador te asesora de forma personalizada en reunión virtual
                Impuesto a pagar será el mínimo valor posible
                Garantía ante sanciones"
              />
            </div>
          </div>

          <div className={`${styles.wCol} ${styles.wCol8}`}>
            <PTText className={styles.headingUpBox} size='sm' weight='700'>Hazlo con el soporte de nuestro chat en vivo</PTText>
            <div className={styles.estandarAndExpres}>
              <PaidPlansComponent
                isPro={false}
                title="Estándar"
                price="119."
                textContent="Tú ingresas la información al app con nuestra ayuda
                Elaborada en 48 horas o menos
                Soporte por chat en vivo y correo con expertos tributarios
                Impuesto a pagar será el mínimo valor posible
                Garantía ante sanciones"
              />

              <PaidPlansComponent
                isPro={false}
                title="Exprés"
                price="299."
                textContent="Tú ingresas la información al app con nuestra ayuda
                Elaborada en 2 horas o menos
                Soporte por chat en vivo y correo con expertos tributarios
                Impuesto a pagar será el mínimo valor posible
                Garantía ante sanciones"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}