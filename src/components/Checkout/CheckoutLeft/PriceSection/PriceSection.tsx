import { useSelector } from 'react-redux';
import PriceDetails from './PriceDetails/PriceDetails';
import PriceHeader from './PriceHeader/PriceHeader';
import PriceHeaderSkeleton from './PriceHeader/PriceHeaderSkeleton/PriceHeaderSkeleton';
import { selectCheckoutMode, CHECKOUT_MODE_ENUM } from 'checkoutPagePreview/stepperSlice';

function PriceSection() {
  const checkoutMode = useSelector(selectCheckoutMode);
  return (
    <>
      {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION ? <PriceHeaderSkeleton /> : <PriceHeader />}
      <PriceDetails />
    </>
  );
}

export default PriceSection;
