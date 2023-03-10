import CompanyValue from './component/company-value';
import styles from './company-value.module.scss';
import globalImage from '@/public/global.png';
import marranitoImg from '@/public/ping-savings.png';
import moneyImage from '@/public/savings.jpeg';
import PTText from '../common/text/pt-text';

const companyValues = [
  {
    image: globalImage,
    title: 'Seguro',
    items: [
      'Garantizamos que tu declaración de Precios de Transferencianferencia cumpla con los requisitos exigidos por la ley Colombiana.',
      'La información que proporcionas está protegida con los más altos estándares de seguridad y está sujeta a una política de seguridad rigurosa (Consultar TERMINOS Y CONDICIONES).',
    ],
  },
  {
    image: marranitoImg,
    title: 'Sin obstáculos',
    items: [
      'Siempre tendrás a tú disposición acompañamiento personalizado cuando lo requieras.',
      'No requieres de filtros, ni aprobación de propuesta, ni demoras administrativas para acceder a nuestros servicios, con solo dar un par de clicks lo podrás hacer.',
      'PT-PRO lo hace por ti, por lo cual no requieres conocimientos de Precios de Transferencia, nuestro sistema integral te guiará de forma intuitiva durante todo el proceso.',
    ],
  },
  {
    image: moneyImage,
    title: 'Precios justos',
    items: ['Los precios más competitivos del mercado.'],
  },
];

export default function CompanyValues() {
  return (
    <div className={`${styles.componentDeclaration} ${styles.section}`}>
      <div className={styles.sectionIntro}>
        <PTText asTag="h2" size="xxxl" weight="700" className={styles.heading}>
          TPTRIP tu mejor opción para preparar la declaración de precios de
          transferencia
        </PTText>
      </div>
      <div className={styles.column4}>
        {companyValues.map((companyValue) => (
          <CompanyValue companyValue={companyValue} key={companyValue.title} />
        ))}
      </div>
    </div>
  );
}
