import PTButton from '../../../button/pt-button';
import styles from './paid-plans-component.module.scss';

export interface PaidPlansProps {
  title: string;
  price: string;
  textContent: string;
  isPro: boolean;
}

export default function PaidPlansComponent({ title, price, textContent, isPro }: PaidPlansProps) {
  return (
    <div className={styles.pricingV1Card} style={!isPro ? { backgroundColor: 'var(--white-color)' } : { backgroundColor: '' }}>
      <div className={styles.pricingV1Badge} style={!isPro ? { backgroundColor: 'var(--white-color)' } : { backgroundColor: '#7d00ff' }}></div>
      <h3 className={styles.headingBox}>{title}</h3>
      <div className={styles.smallDivider} style={isPro ? { background: 'var(--white-color)' } : { background: 'var(--primary-color)' }}></div>

      <div className={styles.pricingTag}>
        <div className={styles.pricingCurrency}>$</div>
        <div className={styles.declarationPrice}>{price}</div>
        <span className={styles.moveUpCents}>000</span>
      </div>

      <div className={styles.pricingFeatures}>
        <div className={styles.pricingListItem}>
          <div>{textContent}</div>
        </div>
      </div>

      <PTButton isMain>¡Obtener declaración Pro!</PTButton>
    </div>
  )
}