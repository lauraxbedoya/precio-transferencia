import PTButton from '@/components/common/button/pt-button';
import PTInput from '@/components/common/input/pt-input';
import PTText from '@/components/common/text/pt-text';
import styles from './should-declare.module.scss';

export interface UserInfoProps {
  onChange: (e: any) => void;
  name: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  nit: string;
  termsConditions: boolean;
  onHandleSubmitShouldDeclare: () => any;
}

function UserInfoShouldDeclare({
  onChange,
  name,
  lastName,
  email,
  nit,
  termsConditions,
  onHandleSubmitShouldDeclare,
}: UserInfoProps) {
  return (
    <>
      <div className={styles.formBlock}>
        <div className={styles.personalInformation}>
          <div>
            <PTText asTag="h3" size="sm" weight="700">
              Información Personal
            </PTText>
          </div>
          <div className={styles.personalForm}>
            <PTInput
              value={name}
              name="name"
              onChange={onChange}
              label="Nombre *"
              placeholder="Ingresa tu nombre"
            />
            <PTInput
              value={lastName}
              name="lastName"
              onChange={onChange}
              label="Apellido *"
              placeholder="Ingresa tu apellido"
            />
            <PTInput
              value={email}
              name="email"
              onChange={onChange}
              label="Correo Electrónico *"
              placeholder="Ingresa tu email"
            />
          </div>
        </div>

        <div className={styles.companyInformation}>
          <div>
            <PTText asTag="h3" size="sm" weight="700">
              Información de tu Empresa
            </PTText>
          </div>
          <div className={styles.companyForm}>
            <PTInput
              value={nit}
              name="nit"
              type="number"
              onChange={onChange}
              label="NIT *"
              placeholder="Ingresa el NIT sin el dígito de verificación"
              maxLength={9}
              minLength={9}
            />
          </div>
        </div>
      </div>

      <div className={styles.questionsDivider}></div>
      <label className={`${styles.wCheckbox} ${styles.checkboxField}`}>
        <input
          type="checkbox"
          className={styles.wCheckboxInput}
          checked={termsConditions}
        />
        <PTText size="xxs" weight="400" className={styles.checkboxLabel}>
          He leído la política de privacidad y acepto el tratamiento de mis
          datos
        </PTText>
      </label>
      <div className={styles.submitButton}>
        <PTButton
          size="lg"
          isMain={false}
          style={{ marginTop: '16px' }}
          onClick={onHandleSubmitShouldDeclare}
        >
          ¡Verifica!
        </PTButton>
      </div>
    </>
  );
}

export default UserInfoShouldDeclare;
