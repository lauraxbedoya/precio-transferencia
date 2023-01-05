import DeclarationComponent from './component/declaration-component';

import styles from './declaration.module.scss';
import PTText from '../../text/pt-text';

import calculadoraImg from '../../../public/calculadora-home.png';
import marranitoImg from '../../../public/marranito-home.png';
import seguroImg from '../../../public/seguro-home.png';
import asesoriaImg from '../../../public/asesoria-home.png';

const howToDoDeclaration = [
  { img: calculadoraImg, title: 'Fácil', description: 'No necesitas saber contabilidad para obtener tu declaración hasta en 2 horas' },
  { img: marranitoImg, title: 'Ahorras dinero', description: 'Pagas un precio justo por tu declaración y el mínimo impuesto legalmente posible' },
  { img: seguroImg, title: '100% Seguro', description: 'Protegemos tu información personal y te damos garantía ante sanciones' },
  { img: asesoriaImg, title: 'Asesoría', description: 'Ayudas, tutoriales y soporte ilimitado con expertos en todo tu proceso' },
];

export default function Declaration() {
  return (
    <div className={`${styles.componentDeclaration} ${styles.section}`}>
      <div className={styles.sectionIntro}>
        <PTText size='xl' weight='700' className={styles.heading}>¿Cómo es elaborar tu declaración de renta con Tributi?</PTText>
      </div>
      <div className={styles.column4}>
        {howToDoDeclaration.map(element =>
          <DeclarationComponent
            key={element.title}
            img={element.img}
            title={element.title}
            description={element.description}
          />
        )}
      </div>
    </div>
  )
}