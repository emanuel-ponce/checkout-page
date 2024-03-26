import AdressInput, { AdressInputProps } from '@/components/Shared/Inputs/AddressInput/AdressInput';
import CardSelectInput from '@/components/Shared/Inputs/CardSelectorInput/CardSelectInput';
import TextInput from '@/components/Shared/Inputs/TextInput/TextInput';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from 'react-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
loadTranslations(i18n);
interface ShippingInformationProps extends WithTranslation {
  handleChange: (e: any) => any;
  showPhoneNumber: boolean;
}

function ShippingInformation({ handleChange, showPhoneNumber, t }: ShippingInformationProps) {
  const getShippingAddressProps = (handleChange: (e: any) => any): AdressInputProps['inputs'] => ({
    fullName: {
      inputName: 'fullName',
      placeholder: t('SHIPPING_INFORMATION.FULL_NAME'),
      handleChange
    },
    address: {
      inputName: 'address',
      placeholder: t('SHIPPING_INFORMATION.ADDRESS'),
      handleChange
    },
    location: {
      inputName: 'location',
      options: [
        {
          label: 'United States',
          value: 'US'
        },
        {
          label: 'Argentina',
          value: 'AR'
        }
      ],
      handleChange
    },
    ...(showPhoneNumber && {
      phoneNumber: {
        inputName: 'phoneNumber',
        placeholder: '(201) 555-0123',
        handleChange
      }
    })
  });

  const getShippingMethodsOptions = [
    {
      value: 'freeShipping',
      hint: t('SHIPPING_INFORMATION.SHIPPING_METHODS.FREE.SUBTITLE'),
      labelLeft: t('SHIPPING_INFORMATION.SHIPPING_METHODS.FREE.TITLE'),
      labelRight: t('SHIPPING_INFORMATION.SHIPPING_METHODS.FREE.FREE')
    },
    {
      value: 'nextDay',
      hint: t('SHIPPING_INFORMATION.SHIPPING_METHODS.NEXT_DAY.SUBTITLE'),
      labelLeft: t('SHIPPING_INFORMATION.SHIPPING_METHODS.NEXT_DAY.TITLE'),
      labelRight: '$15.00'
    }
  ];

  return (
    <>
      <h1 className="text-gray-800 text-base font-medium mt-1">{t('SHIPPING_INFORMATION.TITLE')}</h1>
      <TextInput inputName="email" label={t('SHIPPING_INFORMATION.EMAIL')} placeholder="" handleChange={handleChange} />
      <AdressInput inputs={getShippingAddressProps(handleChange)} label={t('SHIPPING_INFORMATION.SHIPPING_INFORMATION_LABEL')} />
      <div>
        <CardSelectInput inputName="shippingMehod" label={t('SHIPPING_INFORMATION.SHIPPING_METHOD_LABEL')} handleChange={handleChange} options={getShippingMethodsOptions} />
      </div>
    </>
  );
}

export default withTranslation()(ShippingInformation);
