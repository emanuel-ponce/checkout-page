import { Form, Formik } from 'formik';
import WalletPaySkeleton from './WalletPay/WalletPaySkeleton/WalletPaySkeleton';
import Separator from '@/components/Shared/Separator/Separator';
import SeparatorSkeleton from './SeparatorSkeleton';
import ShippingInformationSkeleton from './ShippingInformation/ShippingInformationSkeleton/ShippingInformationSkeleton';
import PaymentInformationSkeleton from './PaymentInformation/PaymentInformationSkeleton/PaymentInformationSkeleton';
import ShippingInformation from './ShippingInformation/ShippingInformation';
import PaymentInformation from './PaymentInformation/PaymentInformation';
import WalletPay from './WalletPay/WalletPay';
import { selectCheckoutMode, CHECKOUT_MODE_ENUM } from 'checkoutPagePreview/stepperSlice';
import { useSelector } from 'react-redux';

export default function CheckoutRight() {
  const checkoutMode = useSelector(selectCheckoutMode);
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
      {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION ? <SeparatorSkeleton /> : <Separator text="Or pay another way" />}
      <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleChange }) => (
            <Form>
              <div className="flex flex-col gap-[15px]">
                {true ? <ShippingInformationSkeleton /> : <ShippingInformation handleChange={handleChange} />}
                {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION ? <PaymentInformationSkeleton /> : <PaymentInformation handleChange={handleChange} />}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
