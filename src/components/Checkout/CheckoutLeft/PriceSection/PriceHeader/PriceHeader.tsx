import { selectCheckoutMode, CHECKOUT_MODE_ENUM } from 'checkoutPagePreview/stepperSlice';
import { useSelector } from 'react-redux';
import PriceHeaderSkeleton from './PriceHeaderSkeleton/PriceHeaderSkeleton';
import { withTranslation } from 'react-i18next';
import { WithTranslation } from 'next-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
import { selectDeviceSelected } from 'checkoutPagePreview/previewSlice';
import { DEVICES_OPTIONS_ENUM } from 'checkoutPagePreview/devicesOptionsEnum';
import { selectCoupons } from 'checkoutPagePreview/customizationSlice';
import PromotionalCode from '../PriceSummary/PromotionalCode/PromotionalCode';
loadTranslations(i18n);

function PriceHeader({ t }: WithTranslation) {
  const checkoutMode = useSelector(selectCheckoutMode);
  const deviceSelected = useSelector(selectDeviceSelected);
  const showCoupons = useSelector(selectCoupons);
  return (
    <div className={`flex flex-col mb-4 mt-8 ${deviceSelected === DEVICES_OPTIONS_ENUM.MOBILE && 'text-center'}`}>
      {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION ? <PriceHeaderSkeleton /> : <span className="text-gray-500/90 font-medium text-base">{t('PRICE_HEADER.PAY', { brand: 'Powdur' })}</span>}
      <h1 className="text-4xl font-semibold">$133.23</h1>
      {(checkoutMode === CHECKOUT_MODE_ENUM.NONE || !!showCoupons) && deviceSelected === DEVICES_OPTIONS_ENUM.MOBILE && (
        <div className="mt-4">
          <PromotionalCode filled={true} />
        </div>
      )}
    </div>
  );
}

export default withTranslation()(PriceHeader);
