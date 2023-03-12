import { ProgressSpinner } from 'primereact/progressspinner';
import PTText from '../text/pt-text';
import styles from './loading.module.scss';

export interface LoadingProps {
  text?: string;
  isLoading: boolean;
}

export default function Loading({ text, isLoading }: LoadingProps) {
  return (
    <>
      {isLoading ?
        <div className={styles.container}>
          <div className={styles.subcontainer}>
            <ProgressSpinner />
            <PTText size='sm' weight='600'>{text}</PTText>
          </div>
        </div> : null
      }
    </>
  )
}