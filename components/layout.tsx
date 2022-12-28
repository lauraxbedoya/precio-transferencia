import Link from 'next/link';
import { Toast } from 'primereact/toast';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../redux/store';
import PTButton from './button/main-button';
import PTInput from './input/pt-input';
import PTText from './text/pt-text';

interface Props {
  children: JSX.Element;
  onLogout: () => void;
}

function Layout({ children, onLogout }: Props) {
  const [values, setValues] = useState({});
  const { error } = useAppSelector((state) => state.session);
  const toast = useRef<Toast>(null);

  const handleInputChange = (e: any) => {
    setValues(
      {
        ...values,
        [e.target.name]: e.target.value,
      }
    )
  }

  // const handleDisplayError = () => {
  //   if (toast?.current?.show) {
  //     toast?.current?.show({ severity: 'success', summary: error, detail: 'Order submitted' });
  //   }
  // }

  // useEffect(handleDisplayError, [error]);

  return (
    <div>
      <PTButton
        onClick={onLogout}
        size="sm"
      >Cerrar Sesión
      </PTButton>

      <Toast ref={toast} />
      {children}
    </div>
  )
}

export default Layout;
