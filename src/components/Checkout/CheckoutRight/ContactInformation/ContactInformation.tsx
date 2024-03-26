import TextInput from '@/components/Shared/Inputs/TextInput/TextInput';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from 'react-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
loadTranslations(i18n);

interface ContactInformationProps extends WithTranslation {
  handleChange: (e: any) => any;
  showPhoneNumber: boolean;
}

function ContactInformation({ handleChange, showPhoneNumber, t }: ContactInformationProps) {
  return (
    <>
      <h1 className="text-gray-800 text-base font-medium mt-1">{t('CONTACT_INFORMATION.TITLE')}</h1>
      <div>
        <TextInput className={`${showPhoneNumber && 'rounded-b-none mb-0'}`} inputName="email" placeholder={t('CONTACT_INFORMATION.EMAIL_PLACEHOLDER')} handleChange={handleChange} />
        {showPhoneNumber && <TextInput className="rounded-t-none mt-0" inputName="phoneNumber" placeholder="(201) 555-0123" handleChange={handleChange} />}
      </div>
    </>
  );
}

export default withTranslation()(ContactInformation);
