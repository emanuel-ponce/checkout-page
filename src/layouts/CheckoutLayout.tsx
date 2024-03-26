import 'tailwindcss/tailwind.css';
import { ReactNode } from 'react';
interface CheckoutLayoutProps {
  children: ReactNode[];
}
import { selectBrandColor } from 'checkoutPagePreview/customizationSlice';
import { useSelector } from 'react-redux';

export default function CheckoutLayout({ children }: CheckoutLayoutProps) {
  const bgColor: string = useSelector(selectBrandColor);
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 flex justify-center pb-6 transition-colors duration-500 ease-in-out" style={{ backgroundColor: bgColor }}>
        <div className="max-w-[80%] flex grow mt-10">{children[0]}</div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center pb-6 shadow-xl">
        <div className="max-w-[80%]  flex grow mt-10">{children[1]}</div>
      </div>
    </div>
  );
}
