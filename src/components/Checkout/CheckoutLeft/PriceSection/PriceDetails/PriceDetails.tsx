import PriceSummary from '../PriceSummary/PriceSummary';
import PriceItem from './PriceItem/PriceItem';

function PriceDetails() {
  return (
    <div className="flex flex-col gap-4 my-8">
      <PriceItem />
      <PriceItem />
      <PriceSummary />
    </div>
  );
}

export default PriceDetails;
