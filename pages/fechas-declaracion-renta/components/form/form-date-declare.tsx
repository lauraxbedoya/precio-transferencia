import { InputHTMLAttributes } from 'react';
import PTInput from '../../../../components/input/pt-input';
import PTText from '../../../../components/text/pt-text';
import styles from './form-date-declare.module.scss';

// export interface DateDeclareProps {
//   title: string;
//   description?: string;
//   placeholder: string;
//   value: string;
// }

export interface DateDeclareProps extends InputHTMLAttributes<HTMLInputElement> {
  textHeader: string;
  textDescription?: string;
}

export default function FormDateDeclare({ textHeader, textDescription, ...props }: DateDeclareProps) {
  return (
    <div>
      <p>{textDescription}</p>
      <PTInput {...props} label={textHeader} />
    </div>
  )
}