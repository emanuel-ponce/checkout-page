import CardInformation, { CardInformationProps } from '@/components/Shared/Inputs/CardInformation/CardInformation';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from 'react-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
loadTranslations(i18n);
interface PaymentInformationProps extends WithTranslation {
  handleChange: (e: any) => any;
}

function PaymentInformation({ handleChange, t }: PaymentInformationProps) {
  const getCardInformationInputs = (handleChange: (e: any) => any): CardInformationProps['inputs'] => ({
    cardNumber: {
      inputName: 'carNumber',
      placeholder: '1234 1234 1234 1234',
      handleChange
    },
    cvc: {
      inputName: 'cvc',
      placeholder: t('PAYMENT_INFORMATION.CVC'),
      handleChange
    },
    dueDate: {
      inputName: 'dueDate',
      placeholder: t('PAYMENT_INFORMATION.DUE_DATE'),
      handleChange
    }
  });
  return (
    <>
      <h1 className="text-gray-800 text-base font-medium mt-2">{t('PAYMENT_INFORMATION.TITLE')}</h1>
      <CardInformation label={t('PAYMENT_INFORMATION.LABEL')} inputs={getCardInformationInputs(handleChange)} />
      <div className="mt-3">
        <button className="text-center w-full  text-slate-400 font-medium rounded-[4px] px-[2px] py-2 bg-blue-950">{t('PAYMENT_INFORMATION.PAY_BUTTON')}</button>
      </div>
    </>
  );
}

export default withTranslation()(PaymentInformation);
