import styles from './fechas-declaracion-renta.module.scss';
import FormDateDeclare from "./components/form/form-date-declare";
import PTText from '../../components/text/pt-text';
import { ChangeEvent, useEffect, useState } from 'react';
import PTButton from '../../components/button/pt-button';
import { useAppSelector } from '../../redux/store';
import { User } from '../../interfaces/user.interface';
import { api } from '../../helpers/api.helper';
import StatementMaxDateResult from './statement-max-dates';
import { MaxDate } from '../../interfaces/statement-max-dates.interface';

export default function FechasDeclaracionRenta() {
  const [termsConditions, setTermsConditions] = useState(true);
  const { user } = useAppSelector((state) => state.session);
  const [formUser, setFormUser] = useState<Partial<User> | null>(user);
  const [lastNitDigit, setLastNitDigit] = useState<number | undefined>();
  const [statemenMaxDate, setStatemenMaxDate] = useState<MaxDate>();

  useEffect(() => {
    setFormUser({ name: user?.name, lastName: user?.lastName, email: user?.email });
  }, [user])

  useEffect(() => {
    console.log(formUser);
  }, [formUser])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'lastNitDigit') {
      if (+e.target.value >= 0 && +e.target.value < 10) {
        setLastNitDigit(+e.target.value)
      }
    } else {
      setFormUser(
        {
          ...formUser,
          [e.target.name as keyof (User)]: e.target.value,
        } as User
      )
    }
  }

  const handleSubmission = async () => {
    if (!formUser?.name || !formUser.lastName || !formUser.email || !lastNitDigit) {
      alert('Todos los campos son requeridos')
    } else {
      const resp = await api.post('fechas-declaracion-renta', { user: { ...formUser, createdFrom: 'date_declare' }, lastNITDigit: lastNitDigit });
      setStatemenMaxDate(resp.data)
    }
  }

  return (
    <div className={styles.formRightBlock}>
      <div className={styles.wForm}>
        {statemenMaxDate === undefined &&
          <div className={styles.form2}>
            <FormDateDeclare
              textHeader='Último número del NIT*'
              // textDescription='Si eres extranjero, ingresa los dos últimos
              // dígitos de tu RUT'
              placeholder='Ingresa el último número del NIT'
              type="number"
              min={0}
              max={9}
              name="lastNitDigit"
              onChange={handleInputChange}
              value={lastNitDigit}
            />
            <FormDateDeclare
              textHeader='Nombre *'
              placeholder='Ingresa tu nombre'
              name="name"
              onChange={handleInputChange}
              value={formUser?.name}
            />
            <FormDateDeclare
              textHeader='Apellido *'
              placeholder='Ingresa tu apellido'
              name="lastName"
              onChange={handleInputChange}
              value={formUser?.lastName}
            />
            <FormDateDeclare
              textHeader='Correo electrónico *'
              placeholder='Ingresa tu email'
              name="email"
              onChange={handleInputChange}
              value={formUser?.email}
            />

            <label className={`${styles.wCheckbox} ${styles.checkboxField}`}>
              <input type='checkbox' className={styles.wCheckboxInput} checked={termsConditions} />
              <PTText size='xs' weight='400' className={styles.checkboxLabel}>He leído la  política de privacidad  de Tributi y acepto el tratamiento de mis datos</PTText>
            </label>

            <PTButton size='md' isMain={false} onClick={handleSubmission}>¿Cuándo declaro?</PTButton>
          </div>
        }
        {statemenMaxDate !== undefined && formUser?.name !== undefined &&
          <StatementMaxDateResult
            maxDate={statemenMaxDate.expireDate}
            name={formUser.name}
          />
        }
      </div>
    </div>
  )
}