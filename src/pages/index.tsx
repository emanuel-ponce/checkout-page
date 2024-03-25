import CheckoutLeft from '@/components/Checkout/CheckoutLeft/CheckoutLeft';
import CheckoutRight from '@/components/Checkout/CheckoutRight/CheckoutRight';
import CheckoutLayout from '@/layouts/CheckoutLayout';

export default function Home() {
  return (
    <CheckoutLayout>
      <CheckoutLeft />
      <CheckoutRight />
    </CheckoutLayout>
  );
}
