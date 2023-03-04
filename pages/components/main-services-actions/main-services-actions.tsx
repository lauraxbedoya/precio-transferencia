import styles from './main-services-actions.module.scss';
import ServicesActionComponent from './component/main-service-action';
import PTText from '../../../components/text/pt-text';
import { useRouter } from 'next/router';
import LineDivider from '../../../components/line-divider/line-divider';

export default function MainServicesAction() {

  const router = useRouter();

  const handleShouldDeclare = () => {
    router.push('/verifica');
  };

  const handleDateDeclare = () => {
    router.push('/fechas-declaracion-renta');
  };

  return (
    <div className={styles.sectionHome}>
      <PTText asTag='h2' size='xxxl' weight='700' className={styles.heading}>¿Cuándo y qué debo presentar en materia de Precios de Transferencia?</PTText>

      <div className={styles.featureCards}>
        <ServicesActionComponent
          titleBox="Verifica si tu compañia está sujeta al régimen de precios de transferencia"
          textButton="¡Verifica!"
          onClick={handleShouldDeclare}
        />

        <ServicesActionComponent
          titleBox="Revisa los plazos en los cuales se deben presentar las obligaciones de precios de transferencia de tu compañia"
          textButton="¡Revisa!"
          onClick={handleDateDeclare}
        />
      </div>
      <LineDivider />
    </div>
  )
}