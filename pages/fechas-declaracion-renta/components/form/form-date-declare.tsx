import { InputHTMLAttributes } from 'react';
import PTInput from '@/components/input/pt-input';

export interface DateDeclareProps
  extends InputHTMLAttributes<HTMLInputElement> {
  textHeader: string;
  textDescription?: string;
}

export default function FormDateDeclare({
  textHeader,
  textDescription,
  ...props
}: DateDeclareProps) {
  return (
    <div>
      <p>{textDescription}</p>
      <PTInput {...props} label={textHeader} />
    </div>
  );
}
