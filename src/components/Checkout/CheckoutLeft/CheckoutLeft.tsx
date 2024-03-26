import FooterLeft from './FooterLeft/FooterLeft';
import Navbar from './Navbar/Navbar';
import PriceSection from './PriceSection/PriceSection';
import { selectDeviceSelected } from 'checkoutPagePreview/previewSlice';
import { DEVICES_OPTIONS_ENUM } from 'checkoutPagePreview/devicesOptionsEnum';
import { useSelector } from 'react-redux';

function CheckoutLeft() {
  const deviceSelected = useSelector(selectDeviceSelected);
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <PriceSection />
      {deviceSelected === DEVICES_OPTIONS_ENUM.DESKTOP && <FooterLeft />}
    </div>
  );
}

export default CheckoutLeft;
