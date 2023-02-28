import { HTMLAttributes, ReactNode, useEffect, useState } from "react";
import styles from './text.module.scss';

export interface PTTextProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  children: string | ReactNode;
  weight: '400' | '500' | '600' | '700';
  size: 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | 'xxxs';
  asTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function PTText({
  children,
  weight = '400',
  size = 'md',
  asTag,
  ...props
}: PTTextProps) {

  const [customSizeClass, setCustomSizeClass] = useState('');
  const [customWeightClass, setCustomWeightClass] = useState('');

  const setSizeStyles = () => {
    let styleClass: string = '';
    switch (size) {
      case 'xxxl':
        styleClass = styles.textXxxl
        break;
      case 'xxl':
        styleClass = styles.textXxl
        break;
      case 'xl':
        styleClass = styles.textXl
        break;
      case 'md':
        styleClass = styles.textMd
        break;
      case 'lg':
        styleClass = styles.textLg
        break;
      case 'sm':
        styleClass = styles.textSm
        break;
      case 'xs':
        styleClass = styles.textXs
        break;
      case 'xxs':
        styleClass = styles.textXxs
        break;
      case 'xxxs':
        styleClass = styles.textXxxs
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

  const classes = `${styles.mainText} ${customWeightClass} ${customSizeClass} ${props.className}`;


  return (
    <>
      {asTag === 'h1' && <h1 className={classes}>{children}</h1>}
      {asTag === 'h2' && <h2 className={classes}>{children}</h2>}
      {asTag === 'h3' && <h3 className={classes}>{children}</h3>}
      {asTag === 'h4' && <h4 className={classes}>{children}</h4>}
      {asTag === 'h5' && <h5 className={classes}>{children}</h5>}
      {asTag === 'h6' && <h6 className={classes}>{children}</h6>}

      {!asTag &&
        <span
          {...props}
          className={classes}
        >{children}
        </span>
      }
    </>
  )
}