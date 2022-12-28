import { HTMLAttributes, useEffect, useState } from "react";
import styles from './text.module.css';

export interface PTTextProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  children: string;
  weight: '400' | '500' | '600' | '700';
  size: 'xxl' | 'xl' | 'md' | 'sm' | 'xs' | 'xxs';
}

export default function PTText({
  children,
  weight = '400',
  size = 'md',
  ...props
}: PTTextProps) {

  const [customSizeClass, setCustomSizeClass] = useState('');
  const [customWeightClass, setCustomWeightClass] = useState('');

  const setSizeStyles = () => {
    let styleClass: string = '';
    switch (size) {
      case 'xxl':
        styleClass = styles.textXxl
        break;
      case 'xl':
        styleClass = styles.textXl
      case 'md':
        styleClass = styles.textMd
        break;
      case 'sm':
        styleClass = styles.textSm
        break;
      case 'xs':
        styleClass = styles.textXs
        break;
      case 'xxs':
        styleClass = styles.textXxs
      default:
        break
    }
    setCustomSizeClass(styleClass);
  }

  const setWeightStyles = () => {
    let styleClass: string = '';
    switch (weight) {
      case '400':
        styleClass = styles.textW400
        break;
      case '500':
        styleClass = styles.textW500
        break;
      case '600':
        styleClass = styles.textW600
        break;
      case '700':
        styleClass = styles.textW700
      default:
        break
    }
    setCustomWeightClass(styleClass);
  }

  useEffect(setWeightStyles, [weight]);
  useEffect(setSizeStyles, [size]);

  return (
    <span
      {...props}
      className={`${styles.mainText} ${customWeightClass} ${customSizeClass}`}
    >{children}
    </span>
  )
}