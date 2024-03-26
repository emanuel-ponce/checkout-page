import { useSelector } from 'react-redux';
import GeneralItemSkeleton from './GeneralItemSkeleton';
import { selectCoupons, selectShipping, selectTaxSupport } from 'checkoutPagePreview/customizationSlice';
import { selectCheckoutMode, CHECKOUT_MODE_ENUM } from 'checkoutPagePreview/stepperSlice';
import Subtotal from './Subtotal/Subtotal';
import PromotionalCode from './PromotionalCode/PromotionalCode';
import ShippingDetail from './ShippingDetail/ShippingDetail';
import SalesTaxes from './SalesTaxes/SalexTaxes';
import Total from './Total/Total';

function PriceSummary() {
  const checkoutMode = useSelector(selectCheckoutMode);
  const showCoupons = useSelector(selectCoupons);
  const showShipping = useSelector(selectShipping);
  const showTaxSupport = useSelector(selectTaxSupport);
  return (
    <div className="ml-[58px]">
      <div className="border-t-[1px] w-full self-end flex flex-col pt-3 gap-4">
        {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION ? <GeneralItemSkeleton /> : <Subtotal />}
        <>
          {(checkoutMode === CHECKOUT_MODE_ENUM.NONE || !!showCoupons) && <PromotionalCode />}
          {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION && !showCoupons && <GeneralItemSkeleton />}
        </>
        <>
          {(checkoutMode === CHECKOUT_MODE_ENUM.NONE || !!showShipping) && <ShippingDetail />}
          {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION && !showShipping && <GeneralItemSkeleton />}
        </>
        <>
          {(checkoutMode === CHECKOUT_MODE_ENUM.NONE || !!showTaxSupport) && <SalesTaxes />}
          {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION && !showTaxSupport && <GeneralItemSkeleton />}
        </>
      </div>
      <div className="border-t-[1px] w-full self-end flex flex-col pt-3 gap-4 mt-3">{checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION ? <GeneralItemSkeleton /> : <Total />}</div>
    </div>
  );
}

export default PriceSummary;
