import FooterLeft from './FooterLeft/FooterLeft';
import Navbar from './Navbar/Navbar';
import PriceSection from './PriceSection/PriceSection';

function CheckoutLeft() {
  return (
    <div className="h-screen w-full flex flex-col">
      <Navbar />
      <PriceSection />
      <div className="mt-auto">
        <FooterLeft />
      </div>
    </div>
  );
}

export default CheckoutLeft;
