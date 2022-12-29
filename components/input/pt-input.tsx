import { InputText, InputTextProps } from 'primereact/inputtext';
import { useEffect, useState } from 'react';
import styles from './input.module.scss';

export interface PTInputProps extends Omit<InputTextProps, 'size'> {
  size?: 'xl' | 'md' | 'sm';
}

export default function PTInput({
  size = 'md',
  ...props
}: PTInputProps) {

  const [customClass, setCustomClass] = useState('');

  const setStyles = () => {
    let styleClass: string = '';
    switch (size) {
      case 'xl':
        styleClass = styles.inputXl
        break;
      case 'md':
        styleClass = styles.inputMd
        break;
      case 'sm':
        styleClass = styles.inputSm
      default:
        break
    }
    setCustomClass(styleClass);
  }

  useEffect(setStyles, [size]);

  return (
    <InputText
      {...props}
      className={`${styles.mainStyleInput} p-float-label ${customClass}`}
    />
  )
}