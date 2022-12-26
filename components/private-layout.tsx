import Link from 'next/link';
import { Toast } from 'primereact/toast';
import { useEffect, useRef } from 'react';
import { useAppSelector } from '../redux/store';

interface Props {
  children: JSX.Element;
  onLogout: () => void;
}

function PrivateLayout({ children, onLogout }: Props) {
  const { error } = useAppSelector((state) => state.session);
  const toast = useRef<Toast>(null);

  const handleDisplayError = () => {
    if (toast?.current?.show) {
      toast?.current?.show({ severity: 'success', summary: error, detail: 'Order submitted' });
    }
  }

  useEffect(handleDisplayError, [error]);

  return (
    <div>
      <div>
        <div>
          <Link href="/">Instinct</Link>
        </div>
        <div>
          <Link href="/jobs_search">Search Jobs</Link>
          <button>Pricing</button>
          <button>For Employers</button>
          <button>About Near</button>
        </div>
        <div>
          <Link href="/signin">Sign in</Link>
          <Link href="/signup">Sign up</Link>
        </div>
      </div>
      <div>
        <button
          onClick={onLogout}
        >Logout</button>
        <Link href="/myAccount">My Account</Link>
      </div>
      <Toast ref={toast} />
      {children}
    </div>
  )
}

export default PrivateLayout;
