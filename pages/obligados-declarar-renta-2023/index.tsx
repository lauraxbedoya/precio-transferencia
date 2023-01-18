import Image from 'next/image';
import styles from './should-declare.module.scss';

import logo from '../../public/logopagina.png';
import clockImage from '../../public/clock-image.png';
import InputQuestion from './components/input/input-question';
import PTButton from '../../components/button/pt-button';
import { useState } from 'react';

export default function ObligadosDeclararRenta2023() {
  const [termsConditions, setTermsConditions] = useState(true);

  return (
    <div className={styles.overflow}>
      <div className={styles.wrapper}>
        <div className={styles.conditionWrapper}>
          <div className={styles.conditionsToPayTaxWrapper}>
            <div className={styles.conditionFormContent}>
              <div className={styles.logoHeader}>
                <Image src={logo} width={250} height={60} alt="logo" />
              </div>
              <Image src={clockImage} className={styles.clockImage} alt="clock" />
              <h1 className={styles.formHead}>¡Conoce si debes declarar renta en el 2023!</h1>
              <div className={styles.questionsDivider}></div>
              <div className={styles.questionFormContainer}>
                <div className={styles.questionBlock}>
                  {/* <ShouldDeclareForm /> */}
                </div>
                <div className={styles.questionsDivider}></div>
                <div className={styles.questionBlock}>
                  <div className={`${styles.columns11} ${styles.wRow}`}>
                    <InputQuestion textHeader='Nombre' placeholder='Ingresa tu nombre' />
                    <InputQuestion textHeader='Apellido' placeholder='Ingresa tu apellido' />
                    <InputQuestion textHeader='Correo Electrónico' placeholder='Ingresa tu email' />
                  </div>
                </div>
              </div>
              <div className={styles.questionsDivider}></div>
              <label className={`${styles.wCheckbox} ${styles.checkboxField}`}>
                <input type='checkbox' className={styles.wCheckboxInput} checked={termsConditions} />
                <span className={styles.checkboxLabel}>He leído la  política de privacidad  de Tributi y acepto el tratamiento de mis datos</span>
              </label>
              <div className={styles.submitButton}>
                <PTButton size='lg' isMain={false} style={{ color: 'white' }}>Conoce si declaras</PTButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.sectionInfo} ${styles.wfSection}`}></div>
    </div>
  )
}