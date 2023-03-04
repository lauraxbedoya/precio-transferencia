import PTButton from "../../../../components/button/pt-button";
import PTText from "../../../../components/text/pt-text";

export type ShouldDeclareMessages = 'Message1' | 'Message2'

export interface MessageProps {
  name: string;
  nit: string;
  message: ShouldDeclareMessages;
  onClick: () => any;
}

const messages = {
  Message1: (nit: string) => `De acuerdo con tus respuestas, la compañía identificada con NIT: ${nit} deberá cumplir con alguna de las obligaciones formales en materia de precios de trasnferencia para el año gravable 2022.`,
  Message2: (nit: string) => `De acuerdo con tus respuestas, la compañía identificada con NIT: ${nit} no está sujeta a cumplir con alguna de las obligaciones formales en materia de precios de transferencia para el año gravable 2022. Es importante tener en cuenta que, en caso de que la compañía forme parte de un grupo multinacional, existe la obligación no formal de notificar a la DIAN sobre el informe país por país.`
}

export default function ShouldDeclareResponseMessage({ name, nit, message, onClick }: MessageProps) {
  return (
    <div>
      <div>
        <PTText size='md' weight='700'>{name}</PTText>
      </div>
      <div>
        <PTText size='sm' weight='400'>{messages[message](nit)}</PTText>
      </div>
      <div>
        <PTButton size='md' isMain onClick={onClick}>¡Quiero más información!</PTButton>
      </div>
    </div>

  )
}