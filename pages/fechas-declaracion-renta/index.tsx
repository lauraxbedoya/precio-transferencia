import styles from './fechas-declaracion-renta.module.scss';
import FormDateDeclare from "./components/form/form-date-declare";
import PTText from '../../components/text/pt-text';
import { ChangeEvent, useEffect, useState } from 'react';
import PTButton from '../../components/button/pt-button';
import { useAppSelector } from '../../redux/store';
import { User } from '../../interfaces/user.interface';
import { api } from '../../helpers/api.helper';

export default function FechasDeclaracionRenta() {
  const [termsConditions, setTermsConditions] = useState(true);
  const { user } = useAppSelector((state) => state.session);
  const [formUser, setFormUser] = useState<Partial<User> | null>(user);
  const [nit, setNit] = useState(undefined);

  useEffect(() => {
    setFormUser({ name: user?.name, lastName: user?.lastName, email: user?.email });
  }, [user])

  useEffect(() => {
    console.log(formUser);
  }, [formUser])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormUser(
      {
        ...formUser,
        [e.target.name as keyof (User)]: e.target.value,
      } as User
    )
  }

  //si usuario existe o no
  //crear el registro de la base de datos con esa info con el nit y lo demas
  //enviar email al admin
  //con sultar en la tabla de statment la fecha de expiracion
  //retornar esto anterior

  const handleSubmission = async () => {
    if (!formUser?.name || !formUser.lastName || !formUser.email || !nit) {
      alert('Todos los campos son obligatorios')
    } else {
      const resp = await api.post('fechas-declaracion-renta', { user: formUser, nit })
    }
  }

  return (
    <div className={styles.formRightBlock}>
      <div className={styles.wForm}>
        <div className={styles.form2}>
          <FormDateDeclare
            textHeader='Último número del NIT*'
            // textDescription='Si eres extranjero, ingresa los dos últimos
            // dígitos de tu RUT'
            placeholder='Ingresa el último número del NIT'
            type="number"
            name="nit"
            onChange={handleInputChange}
            value={nit}
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
      </div>
    </div>
  )
}