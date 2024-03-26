import { selectCheckoutMode, CHECKOUT_MODE_ENUM } from 'checkoutPagePreview/stepperSlice';
import { useSelector } from 'react-redux';
import PriceHeaderSkeleton from './PriceHeaderSkeleton/PriceHeaderSkeleton';
import { withTranslation } from 'react-i18next';
import { WithTranslation } from 'next-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
loadTranslations(i18n);

function PriceHeader({ t }: WithTranslation) {
  const checkoutMode = useSelector(selectCheckoutMode);
  return (
    <div className="flex flex-col mb-4 mt-8">
      {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION ? <PriceHeaderSkeleton /> : <span className="text-gray-500/90 font-medium text-base">{t('PRICE_HEADER.PAY', { brand: 'Powdur' })}</span>}
      <h1 className="text-4xl font-semibold">$133.23</h1>
    </div>
  );
}

export default withTranslation()(PriceHeader);
