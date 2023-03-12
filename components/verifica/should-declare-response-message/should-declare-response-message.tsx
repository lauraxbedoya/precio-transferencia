import PTButton from '@/components/common/button/pt-button';
import PTText from '@/components/common/text/pt-text';
import styles from './should-declare-response-message.module.scss';

export type ShouldDeclareMessages = 'Message1' | 'Message2';

export interface MessageProps {
  name: string;
  nit: string;
  message: ShouldDeclareMessages;
  onClick: () => any;
}

const messages = {
  Message1: (nit: string) =>
    `De acuerdo con tus respuestas, la compañía identificada con NIT: ${nit} deberá cumplir con alguna de las obligaciones formales en materia de Precios de Transferencia para el año gravable 2022.`,
  Message2: (nit: string) =>
    `De acuerdo con tus respuestas, la compañía identificada con NIT: ${nit} no está sujeta a cumplir con alguna de las obligaciones formales en materia de Precios de Transferencia para el año gravable 2022. Es importante tener en cuenta que, en caso de que la compañía forme parte de un grupo multinacional, existe la obligación no formal de notificar a la DIAN sobre el informe país por país.`,
};

export default function ShouldDeclareResponseMessage({
  name,
  nit,
  message,
  onClick,
}: MessageProps) {
  return (
    <div className={styles.container}>
      <PTText size="xl" weight="400">
        {name}
      </PTText>
      <PTText size="md" weight="400">
        {messages[message](nit)}
      </PTText>
      <div className={styles.containerButton}>
        <PTButton size="lg" isMain onClick={onClick}>
          ¡Quiero más información!
        </PTButton>
      </div>
    </div>
  );
}
