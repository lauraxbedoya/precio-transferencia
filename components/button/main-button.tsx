import { useEffect, useState } from 'react';
import { Button, ButtonProps } from 'primereact/button';
import styles from './mainButton.module.scss';


export interface PTButtonProps extends ButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary';
}

export default function PTButton({
  children,
  color = 'primary',
  size = 'md',
  ...props
}: PTButtonProps) {

  const [customClass, setCustomClass] = useState('');

  const setStyles = () => {
    let styleClass: string = '';
    switch (size) {
      case 'sm':
        styleClass = styles.buttonSm
        break;
      case 'md':
        styleClass = styles.buttonMd
        break;
      case 'lg':
        styleClass = styles.buttonLg
        break;
      case 'xl':
        styleClass = styles.buttonXl
      default:
        break
    }
    setCustomClass(styleClass);
  }

  useEffect(setStyles, [size]);

  return (
    <Button
      {...props}
      className={`${styles.mainButton} p-button-rounded ${customClass}`}
    >{children}
    </Button>
  )
}