import { useSelector } from 'react-redux';
import PriceSummary from '../PriceSummary/PriceSummary';
import PriceItem, { PriceItemProps } from './PriceItem/PriceItem';
import PriceItemSkeleton from './PriceItem/PriceItemSkeleton/PriceItemSkeleton';
import { selectCheckoutMode, CHECKOUT_MODE_ENUM } from 'checkoutPagePreview/stepperSlice';

function PriceDetails() {
  const checkoutMode = useSelector(selectCheckoutMode);
  const priceItems: PriceItemProps[] = [
    {
      title: 'The Pure Set',
      imgSrc: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quantity: 1,
      price: 65
    },
    {
      title: 'Smart watch',
      imgSrc: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2599&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      quantity: 2,
      price: 64
    }
  ];
  return (
    <div className="flex flex-col gap-4 my-8">
      {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION ? (
        <PriceItemSkeleton />
      ) : (
        <>
          {priceItems.map((priceItem, index) => (
            <PriceItem {...priceItem} key={index} />
          ))}
        </>
      )}
      <PriceSummary />
    </div>
  );
}

export default PriceDetails;
