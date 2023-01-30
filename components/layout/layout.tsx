import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import logo from '../../public/logopagina.png';
import Image from 'next/image';
import { Menubar } from 'primereact/menubar';
import PTButton from '../button/pt-button';

import styles from './layout.module.scss';
import useLoggedUser from '../../hooks/use-logged-user';
import menuItems from './menu-items';

interface Props {
  children: JSX.Element;
}

function Layout({ children }: Props) {
  const toast = useRef<Toast>(null);
  const [isLoading, handleLogout] = useLoggedUser();

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='layout-container'>
      <div className={`${styles.navigation}`}>
        <div className={styles.navImage}>
          <Image src={logo} width={110} height={50} alt="logo" />
        </div>
        <div className={styles.navContainer}>
          <Menubar className='nav-items' model={menuItems} />
          <PTButton
            isMain={true}
            onClick={handleLogout}
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