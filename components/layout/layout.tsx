import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import logo from '../../public/logopagina.png';
import Image from 'next/image';
import { Menubar } from 'primereact/menubar';
import PTButton from '../button/pt-button';

import styles from './layout.module.scss';


interface Props {
  children: JSX.Element;
  onLogout: () => void;
}

const items = [
  {
    label: 'Declaración de renta',
    items: [
      { label: '¿Debo declarar renta en el 2022?' },
      { label: 'Fechas declaración de renta 2022' },
      { label: 'Guía paso a paso' },
    ]
  },
  {
    label: 'Finanzas personales',
    items: [
      {
        label: 'Cursos',
        items: [
          { label: 'Planeación financiera personal' },
          { label: 'Compra de vivienda' }
        ]
      },
      {
        label: 'Descargables',
        items: [
          { label: 'Simulador planeación tributaria' },
          { label: '¿Cuánto impuesto tendré que pagar?' }
        ]
      }
    ]
  },
  {
    label: 'Trabaja con nosotros',
    items: [
      { label: 'Vacantes abiertas' },
      { label: 'Como contador independiente' }
    ]
  },
  {
    label: 'Ayuda',
    items: [
      { label: 'Preguntas frecuentes' },
      { label: 'Base de conocimiento' }
    ]
  },
]

function Layout({ children, onLogout }: Props) {
  const toast = useRef<Toast>(null);


  // const { error } = useAppSelector((state) => state.session);

  // const handleDisplayError = () => {
  //   if (toast?.current?.show) {
  //     toast?.current?.show({ severity: 'success', summary: error, detail: 'Order submitted' });
  //   }
  // }

  // useEffect(handleDisplayError, [error]);


  return (
    <div className='layout-container'>
      <div className={`${styles.navigation}`}>
        <div className={styles.navImage}>
          <Image src={logo} width={110} height={50} />
        </div>
        <div className={styles.navContainer}>
          <Menubar className='nav-items' model={items} />
          <PTButton
            onClick={onLogout}
            size="sm"
          >Cerrar Sesión
          </PTButton>
        </div>

        <Toast ref={toast} />
      </div>
      {children}
    </div>
  )
}

export default Layout;
