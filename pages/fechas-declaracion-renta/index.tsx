import styles from './fechas-declaracion-renta.module.scss';
import FormDateDeclare from './components/form/form-date-declare';
import PTText from '@/components/text/pt-text';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import PTButton from '@/components/button/pt-button';
import { useAppSelector } from '@/redux/store';
import { User } from '@/interfaces/user.interface';
import { api } from '@/helpers/api.helper';
import StatementMaxDateResult from './statement-max-dates';
import { MaxDate } from '@/interfaces/statement-max-dates.interface';
import Image from 'next/image';
import logoCompany from '@/public/logo/logofull.png';
import calendar from '@/public/calendar.png';
import { Toast } from 'primereact/toast';
import Loading from '@/components/loading/loading';


export default function FechasDeclaracionRenta() {
  const toast = useRef<Toast>(null);
  const [termsConditions, setTermsConditions] = useState(true);
  const { user } = useAppSelector((state) => state.session);
  const [formUser, setFormUser] = useState<Partial<User> | null>(user);
  const [lastNitDigit, setLastNitDigit] = useState<number | undefined>();
  const [statemenMaxDate, setStatemenMaxDate] = useState<MaxDate>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormUser({
      name: user?.name,
      lastName: user?.lastName,
      email: user?.email,
    });
  }, [user]);

  useEffect(() => {
    console.log(formUser);
  }, [formUser]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'lastNitDigit') {
      if (+e.target.value >= 0 && +e.target.value < 10) {
        setLastNitDigit(+e.target.value);
      }
    } else {
      setFormUser({
        ...formUser,
        [e.target.name as keyof User]: e.target.value,
      } as User);
    }
  };

  const handleSubmission = async () => {
    if (
      !formUser?.name ||
      !formUser.lastName ||
      !formUser.email ||
      !lastNitDigit
    ) {
      toast?.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Todos los campos son requeridos',
      });
      return;
    }
    if (!termsConditions) {
      toast?.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Debes aceptar terminos y condiciones',
      });
      return;
    }
    setLoading(true);
    const resp = await api.post('fechas-declaracion-renta', {
      user: { ...formUser, createdFrom: 'date_declare' },
      lastNITDigit: lastNitDigit,
    });
    setLoading(false);
    setStatemenMaxDate(resp.data);
  };

  return (
    <div className={styles.container}>
      <Loading isLoading={loading} />
      <Toast ref={toast} />
      <div className={styles.subContainer}>
        <div className={styles.containerLogoAndTitle}>
          <Image src={logoCompany} height={100} alt="logoCompany" />
          <PTText asTag="h2" size="xl" weight="600" className={styles.title}>
            ¿Ya conoces las fechas para la declaración informativa de Precios de Transferencia en éste 2023?
          </PTText>
        </div>

        <div className={styles.questionsDivider}></div>

        <div className={styles.containerForm}>
          <div className={styles.divCalendarImage}>
            <Image src={calendar} height={200} alt="calendar" />
          </div>

          {statemenMaxDate === undefined && (
            <div className={styles.divForm}>
              <FormDateDeclare
                textHeader="Último número del NIT*"
                placeholder="Ingresa el último número del NIT"
                type="number"
                min={0}
                max={9}
                name="lastNitDigit"
                onChange={handleInputChange}
                value={lastNitDigit}
              />
              <FormDateDeclare
                textHeader="Nombre *"
                placeholder="Ingresa tu nombre"
                name="name"
                onChange={handleInputChange}
                value={formUser?.name}
              />
              <FormDateDeclare
                textHeader="Apellido *"
                placeholder="Ingresa tu apellido"
                name="lastName"
                onChange={handleInputChange}
                value={formUser?.lastName}
              />
              <FormDateDeclare
                textHeader="Correo electrónico *"
                placeholder="Ingresa tu email"
                name="email"
                onChange={handleInputChange}
                value={formUser?.email}
              />

              <label className={`${styles.wCheckbox} ${styles.checkboxField}`}>
                <input
                  type="checkbox"
                  className={styles.wCheckboxInput}
                  checked={termsConditions}
                />
                <PTText size="xs" weight="400" className={styles.checkboxLabel}>
                  He leído la política de privacidad de Tributi y acepto el
                  tratamiento de mis datos
                </PTText>
              </label>

              <PTButton
                size="lg"
                isMain={false}
                onClick={handleSubmission}
                className={styles.divButton}
              >
                ¿Cuándo declaro?
              </PTButton>
            </div>
          )}
          {statemenMaxDate !== undefined && formUser?.name !== undefined && (
            <StatementMaxDateResult
              maxDate={statemenMaxDate.expireDate}
              name={formUser.name}
            />
          )}
        </div>
      </div>
    </div>
  );
}
