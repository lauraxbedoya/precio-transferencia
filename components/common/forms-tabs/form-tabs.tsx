import { useState } from "react";

export interface FormTabsProps {
  onAnswerSubmit: any;
  pregunta: string;
}

export default function FormTabs({ pregunta, onAnswerSubmit }: FormTabsProps) {

  const [answer, setAnswer] = useState();

  const handleSubmit = () => {
    if (!answer) {
      return false;
    } else {
      return true
    }
  }

  const handleInputChange = (e: any) => {
    setAnswer(e.target.value)
  }

  return (
    <div>
      <div>
        <p>{pregunta}</p>
        <input placeholder="respuesta" name="answer" onChange={handleInputChange} value={answer} />
      </div>
      <button onClick={() => onAnswerSubmit(handleSubmit())}>Guardar</button>
    </div>
  )
}
