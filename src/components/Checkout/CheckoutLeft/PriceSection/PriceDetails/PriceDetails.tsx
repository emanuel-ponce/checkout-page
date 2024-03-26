import { useSelector } from 'react-redux';
import PriceSummary from '../PriceSummary/PriceSummary';
import PriceItem from './PriceItem/PriceItem';
import PriceItemSkeleton from './PriceItem/PriceItemSkeleton/PriceItemSkeleton';
import { selectCheckoutMode, CHECKOUT_MODE_ENUM } from 'checkoutPagePreview/stepperSlice';

function PriceDetails() {
  const checkoutMode = useSelector(selectCheckoutMode);
  return (
    <div className="flex flex-col gap-4 my-8">
      {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION ? (
        <PriceItemSkeleton />
      ) : (
        <>
          <PriceItem />
          <PriceItem />
        </>
      )}
      <PriceSummary />
    </div>
  );
}

export default PriceDetails;
