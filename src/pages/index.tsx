import CheckoutLeft from '@/components/Checkout/CheckoutLeft/CheckoutLeft';
import CheckoutRight from '@/components/Checkout/CheckoutRight/CheckoutRight';
import CheckoutLayout from '@/layouts/CheckoutLayout';
import { useUtilsTranslate } from '@/shared/i18n/i18n.config';
import { selectLocationSelected } from 'checkoutPagePreview/previewSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Checkout() {
  const { changeLanguage } = useUtilsTranslate();
  const location = useSelector(selectLocationSelected);
  useEffect(() => {
    changeLanguage((location as string).toLowerCase());
  }, [location]);
  return (
    <CheckoutLayout>
      <CheckoutLeft />
      <CheckoutRight />
    </CheckoutLayout>
  );
}
