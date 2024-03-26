import { useSelector } from 'react-redux';
import FooterLeft from './FooterLeft/FooterLeft';
import Navbar from './Navbar/Navbar';
import NavbarSkeleton from './Navbar/NavbarSkeleton/NavbarSkeleton';
import PriceSection from './PriceSection/PriceSection';
import { selectCheckoutMode, CHECKOUT_MODE_ENUM } from 'checkoutPagePreview/stepperSlice';

function CheckoutLeft() {
  const checkoutMode = useSelector(selectCheckoutMode);
  return (
    <div className="h-screen w-full flex flex-col">
      {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION ? <NavbarSkeleton /> : <Navbar />}
      <PriceSection />
      <div className="mt-auto">
        <FooterLeft />
      </div>
    </div>
  );
}

export default CheckoutLeft;
