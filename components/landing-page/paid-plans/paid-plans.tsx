import styles from './paid-plans.module.scss';

export default function PaidPlans() {
  return (
    <div className={`${styles.section} ${styles.grade} ${styles.noPaddingTop}`}>
      <div id="precios" className={styles.declaracionPlansWrapper}>
        <div className={styles.sectionIntro}>
          <div className={styles.bigDivider}></div>
          <h2 className={styles.headingPlans}>Nuestros planes - Declaración de renta</h2>
          <div>tu declaración de renta en 2 días o 2 horas, CON ACOMPAÑAMIENTO POR CHAT O VIDEOLLAMADA</div>
        </div>

        <div className={styles.columns}>
          <div className={styles.wCol}>
            <h4 className={styles.headingUpBox}>Un contador certificado te atiende en vivo y hace todo por tí</h4>
            <div className={styles.pricingV1Card}>
              <h3 className={styles.headingBox}>Pro</h3>
              <div className={styles.smallDivider}></div>
            </div>

            <div className={styles.pricingTag}>
              <div>$</div>
              <div className={styles.declarationPrice}>169</div>
              <span className={styles.moveUpCents}>000</span>
            </div>

            <div className={styles.pricingFeatures}>
              <div className={styles.pricingListItem}>
                <div>Te asignamos un
                  <strong>contador</strong> Tributi Pro que
                  <strong>hará todo por ti</strong>
                </div>
              </div>

              <div className={styles.pricingListItem}>
                <div>Elaborada en
                  <strong>48 horas o menos</strong>
                </div>
              </div>

              <div className={styles.pricingListItem}>
                <div>Tu contador te asesora de forma personalizada en
                  <strong>reunión virtual</strong>
                </div>
              </div>

              <div className={styles.pricingListItem}>
                <div>Impuesto a pagar será el mínimo valor posible</div>
              </div>

              <div className={styles.pricingListItem}>
                <div>Garantía ante sanciones</div>
              </div>
            </div>
          </div>
        </div>

        <div></div>

        <div></div>
      </div>
    </div>
  )
}