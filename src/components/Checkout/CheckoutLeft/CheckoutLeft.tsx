import FooterLeft from './FooterLeft/FooterLeft';
import Navbar from './Navbar/Navbar';
import PriceSection from './PriceSection/PriceSection';

function CheckoutLeft() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <PriceSection />
      <FooterLeft />
    </div>
  );
}

export default CheckoutLeft;
