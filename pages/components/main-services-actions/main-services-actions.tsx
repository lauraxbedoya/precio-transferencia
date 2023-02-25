import styles from './main-services-actions.module.scss';
import ServicesActionComponent from './component/main-service-action';
import PTText from '../../../components/text/pt-text';
import { useRouter } from 'next/router';
import LineDivider from '../../../components/line-divider/line-divider';

export default function MainServicesAction() {

  const router = useRouter();

  const handleShouldDeclare = () => {
    router.push('/obligados-declarar-renta-2023');
  };

  const handleDateDeclare = () => {
    router.push('/fechas-declaracion-renta');
  };

  return (
    <div className={styles.sectionHome}>
      <PTText size='xl' weight='700' className={styles.heading}>¿Cuándo y qué debo presentar en materia de precios de transferencia?</PTText>

      <div className={styles.featureCards}>
        <ServicesActionComponent
          titleBox="Verifica si tu entidad está sujeta al régimen de precios de transferencia"
          textButton="¡Verifica!"
        // onClick={handleShouldDeclare}
        />

        <ServicesActionComponent
          titleBox="Revisa los plazos en los cuales de deben presentar las obligaciones de precios de transferencia de tu entidad"
          textButton="¡Revisa!"
        // onClick={handleDateDeclare}
        />
      </div>
      <LineDivider />
    </div>
  )
}