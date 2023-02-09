import PTButton from "../../components/button/pt-button";
import PTText from "../../components/text/pt-text";

export interface MaxDateProps {
  maxDate: string;
  name: string;
}

export default function StatementMaxDateResult({ maxDate, name }: MaxDateProps) {
  return (
    <div>
      <div>
        <PTText size="md" weight="400">Hola</PTText>
        <PTText size="md" weight="400">{name}</PTText>
        <PTText size="md" weight="400">Tu fecha límite para declarar renta es el:</PTText>
      </div>
      <PTText size="md" weight="700">{maxDate}</PTText>
      <PTText size="xxxs" weight="700">Recuerda que si ya pasó tu fecha límite, tu sanción por extemporaneidad aumenta con cada mes que dejes pasar sin presentar tu declaración</PTText>
      <div>
        <PTButton size="md" isMain={false}>Elaborar mi declaración</PTButton>
      </div>
    </div>
  )
} 