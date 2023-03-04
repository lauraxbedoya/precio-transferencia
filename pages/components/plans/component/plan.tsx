import PTButton from '../../../../components/button/pt-button';
import PTText from '../../../../components/text/pt-text';
import styles from './plan.module.scss';

export interface PaidPlansProps {
  paidPlan: {
    planItems: string[];
    plan?: string;
    price: string;
    isPro: boolean;
    button: string;
  }
}

export default function Plan({ paidPlan }: PaidPlansProps) {
  return (
    <div className={styles.pricingV1Card} style={!paidPlan.isPro ? { backgroundColor: 'var(--white-color)' } : { backgroundColor: '' }}>
      <div className={styles.pricingV1Badge} style={!paidPlan.isPro ? { backgroundColor: 'var(--white-color)' } : { backgroundColor: '#7d00ff' }}></div>
      <div className={styles.upper}>
        <PTText asTag='h1' size='xl' weight='700' className={styles.headingBox}>{paidPlan.plan}</PTText>
        <div className={styles.smallDivider} style={paidPlan.isPro ? { background: 'var(--white-color)' } : { background: 'var(--primary-color)' }}></div>

        <div className={styles.pricingFeatures}>
          <div className={styles.pricingListItem}>
            <ul>
              {paidPlan.planItems.map((plan) => (
                <li key={plan} className={!paidPlan.isPro ? styles.planListItem : styles.planListItemPro}>
                  <PTText size='sm' weight='500'>{plan}</PTText>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.pricingTag}>
          <div className={styles.pricingCurrency}>$</div>
          <div className={styles.declarationPrice}>{paidPlan.price}</div>
          <span className={styles.moveUpCents}>000</span>
        </div>

        <PTButton isMain>{paidPlan.button}</PTButton>
      </div>
    </div>
  )
}