import Image from 'next/image';
import styles from './benefits.module.scss';
import Benefit from './component/benefit';
import curvesBackground from '../../../public/curves-image.png';

import declaracionIcon from '../../../public/benefits/rayito.png';
import garantiaIcon from '../../../public/benefits/garantizado.png';
import seguroIcon from '../../../public/benefits/seguro.png';
import ActualizacionIcon from '../../../public/benefits/actualizado.png';
import facilIcon from '../../../public/benefits/facil.png';
import soporteIcon from '../../../public/benefits/soporte.png';
import personasIcon from '../../../public/benefits/personas.png';
import impuestosIcon from '../../../public/benefits/optimizar.png';
import precioIcon from '../../../public/benefits/precios.png';
import PTText from '../../../components/text/pt-text';
import LineDivider from '../../../components/line-divider/line-divider';

const beneficiosDeclaracionRenta = [
  { id: 1, img: declaracionIcon, title: 'Rápido', description: 'Si te cogió el día, elaboramos tu declaración de renta hasta en 2 horas a partir de que cargues tus documentos. No vuelvas a pagar sanciones por presentar tu declaración tarde.' },
  { id: 2, img: garantiaIcon, title: 'Garantizado', description: 'Estamos tan seguros de entregarte una declaración de renta correcta que, si llegaras a recibir una sanción por parte de la DIAN, nosotros asumimos todos los costos y riesgos. (Lee nuestros términos y condiciones)' },
  { id: 3, img: seguroIcon, title: 'Seguro', description: 'Tu información se encripta con los estándares de seguridad más altos, y está cubierta por una política de privacidad estricta que podrás consultar en los términos y condiciones.' },
  { id: 4, img: ActualizacionIcon, title: 'Actualizado', description: 'Nuestra plataforma tributaria se actualiza constantemente con la legislación colombiana. Tu declaración de renta se ajustará a todos los requisitos legales vigentes.' },
  { id: 5, img: facilIcon, title: 'Fácil', description: 'No necesitas conocimientos previos. Responde unas preguntas sencillas, con ello te indicamos que documentos necesitas y paso a paso cómo conseguirlos, los subes y listo!' },
  { id: 6, img: soporteIcon, title: 'Con soporte', description: 'Si necesitas  soporte al elaborar tu declaración de renta, o después de presentarla; nuestro equipo tributario especializado solucionará todas las inquietudes.' },
  { id: 7, img: personasIcon, title: 'Para todos', description: 'Tenemos cobertura total para las personas naturales en Colombia (100% de los casos), Si tienes una situación especial, también puedes elaborar tu declaración con Tributi.' },
  { id: 8, img: impuestosIcon, title: 'Impuesto optimizado', description: 'Aplicamos todas las deducciones contempladas en la ley para minimizar el valor de tu impuesto de renta a pagar, sin importar tu situación.' },
  { id: 9, img: precioIcon, title: 'Precios transparentes', description: 'Creemos que tu declaración no debería ser más cara si tienes más ingresos o un mayor patrimonio. Tributi ofrece precios transparentes para todos.' },
]

export default function Benefits() {
  return (
    <>
      <Image className={styles.dividerCurves} src={curvesBackground} alt="curvesImage" />
      <div className={`${styles.section} ${styles.grade} ${styles.noPaddingTop}`}>
        <div className={`${styles.wrapper} ${styles.conoceMas}`}>
          <div className={styles.promesaDeServicio}>
            <LineDivider />
            <PTText size='xl' weight='700' className={styles.heading}>Más beneficios de elaborar tu declaración de renta con Tributi</PTText>
            <PTText size='sm' weight='400' className={styles.noMargin}>CON TRIBUTI, TU DECLARACIÓN DE RENTA ESTÁ EN LAS MEJORES MANOS.</PTText>
            <div className={styles.features}>
              {beneficiosDeclaracionRenta.map(element =>
                <Benefit
                  key={element.id}
                  imagesIcon={element.img}
                  title={element.title}
                  description={element.description}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}