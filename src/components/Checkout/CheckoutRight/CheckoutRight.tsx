import { Form, Formik } from 'formik';
import WalletPaySkeleton from './WalletPay/WalletPaySkeleton/WalletPaySkeleton';
import Separator from '@/components/Shared/Separator/Separator';
import SeparatorSkeleton from './SeparatorSkeleton';
import PaymentInformationSkeleton from './PaymentInformation/PaymentInformationSkeleton/PaymentInformationSkeleton';
import ShippingInformation from './ShippingInformation/ShippingInformation';
import PaymentInformation from './PaymentInformation/PaymentInformation';
import WalletPay from './WalletPay/WalletPay';
import { selectCheckoutMode, CHECKOUT_MODE_ENUM } from 'checkoutPagePreview/stepperSlice';
import { selectShipping, selectPhoneNumber } from 'checkoutPagePreview/customizationSlice';
import { useSelector } from 'react-redux';
import ContactInformation from './ContactInformation/ContactInformation';
import { withTranslation } from 'react-i18next';
import { WithTranslation } from 'next-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
loadTranslations(i18n);

function CheckoutRight({ t }: WithTranslation) {
  const checkoutMode = useSelector(selectCheckoutMode);
  const isShippingSelected = useSelector(selectShipping);
  const isPhoneNumberSelected = useSelector(selectPhoneNumber);
  const initialValues = {
    email: '',
    fullName: '',
    address: '',
    location: 'US',
    phoneNumber: '',
    shippingMehod: '',
    cardNumber: '',
    dueDate: '',
    cvc: ''
  };

  const onSubmit = () => {};

  return (
    <div className="h-screen w-full flex flex-col">
      <div>{checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION ? <WalletPaySkeleton /> : <WalletPay />}</div>
      {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION ? <SeparatorSkeleton /> : <Separator text={t('CHECKOUT_RIGHT.SEPARATOR')} />}
      <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleChange }) => (
            <Form>
              <div className="flex flex-col gap-[15px]">
                {(checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION && !isShippingSelected && !!isPhoneNumberSelected) ||
                (checkoutMode !== CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION && !isShippingSelected) ? (
                  <ContactInformation showPhoneNumber={!!isPhoneNumberSelected} handleChange={handleChange} />
                ) : (
                  <></>
                )}
                {!!isShippingSelected && <ShippingInformation handleChange={handleChange} showPhoneNumber={!!isPhoneNumberSelected} />}
                {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION ? <PaymentInformationSkeleton /> : <PaymentInformation handleChange={handleChange} />}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default withTranslation()(CheckoutRight);
