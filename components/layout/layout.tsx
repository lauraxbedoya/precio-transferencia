import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import logo from '@/public/logo/logofull.png';
import Image from 'next/image';
import { Menubar } from 'primereact/menubar';
import PTButton from '../button/pt-button';

import styles from './layout.module.scss';
import useLoggedUser from '@/hooks/use-logged-user';
import menuItems from './menu-items';
import { useAppSelector } from '@/redux/store';
import Link from 'next/link';

interface Props {
  children: JSX.Element;
}

function Layout({ children }: Props) {
  const toast = useRef<Toast>(null);
  const [isLoading, handleLogout] = useLoggedUser();
  const { user } = useAppSelector((state) => state.session);

  return (
    <div className="layout-container">
      <div className={`${styles.navigation}`}>
        <div className={styles.navImage}>
          <Link href="/">
            <Image src={logo} height={70} alt="logo" />
            {user && <span style={{ fontSize: '12px' }}>{user.email}</span>}
          </Link>
        </div>
        <div className={styles.navContainer}>
          <Menubar className="nav-items" model={menuItems} />
          {!user ? (
            <Link href="/sign-in">
              <PTButton isMain={true} size="md">
                Ingresar o Registrarse
              </PTButton>
            </Link>
          ) : (
            <PTButton isMain={true} onClick={handleLogout} size="md">
              Cerrar Sesión
            </PTButton>
          )}
        </div>

        <Toast ref={toast} />
      </div>
      {children}
    </div>
  );
}

export default Layout;
