import PaidPlansComponent from './component/paid-plans-component';
import styles from './paid-plans.module.scss';

export default function PaidPlans() {
  return (
    <div className={`${styles.section} ${styles.grade} ${styles.noPaddingTop}`}>
      <div id="precios" className={styles.declaracionPlansWrapper}>
        <div className={styles.sectionIntro}>
          <div className={styles.bigDivider}></div>
          <h2 className={styles.headingPlans}>Nuestros planes - Declaración de renta</h2>
          <div className={`${styles.title} ${styles.caps} ${styles.price}`}>tu declaración de renta en 2 días o 2 horas, CON ACOMPAÑAMIENTO POR CHAT O VIDEOLLAMADA</div>
        </div>

        <div className={styles.wColumns}>
          <div className={`${styles.wCol} ${styles.wcol6}`}>
            <h4 className={styles.headingUpBox}>Un contador certificado te atiende en vivo y hace todo por tí</h4>
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

          <div className={`${styles.wCol} ${styles.wcol8}`}>
            <h4 className={styles.headingUpBox}>Hazlo con el soporte de nuestro chat en vivo</h4>
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