import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import logo from '../../public/logopagina.png';
import Image from 'next/image';
import { Menubar } from 'primereact/menubar';
import PTButton from '../button/pt-button';

import styles from './layout.module.scss';
import useLoggedUser from '../../hooks/use-logged-user';
import menuItems from './menu-items';
import { useAppSelector } from '../../redux/store';
import Link from 'next/link';

interface Props {
  children: JSX.Element;
}

function Layout({ children }: Props) {
  const toast = useRef<Toast>(null);
  const [isLoading, handleLogout] = useLoggedUser();
  const { user } = useAppSelector((state) => state.session);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='layout-container'>
      <div className={`${styles.navigation}`}>
        <div className={styles.navImage}>
          <Link href='/'>
            <Image src={logo} width={110} height={50} alt="logo" />
          </Link>
        </div>
        <div className={styles.navContainer}>
          <Menubar className='nav-items' model={menuItems} />
          <PTButton
            isMain={true}
            onClick={handleLogout}
            size="sm"
          >{user ? 'Cerrar Sesión' : 'Iniciar Sesión'}
          </PTButton>
        </div>

        <Toast ref={toast} />
      </div>
      {children}
    </div>
  )
}

export default Layout;