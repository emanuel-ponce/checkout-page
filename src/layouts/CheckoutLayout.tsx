import 'tailwindcss/tailwind.css';
import { ReactNode } from 'react';
interface CheckoutLayoutProps {
  children: ReactNode[];
}

export default function CheckoutLayout({ children }: CheckoutLayoutProps) {
  return (
    <div className="flex flex-wrap h-full">
      <div className="w-full md:w-1/2 flex justify-center bg-gray-200">
        <div className="max-w-[80%] flex grow mt-10">{children[0]}</div>
      </div>
      <div className="w-full md:w-1/2  flex justify-center shadow-xl">
        <div className="max-w-[80%]  flex grow mt-10">{children[1]}</div>
      </div>
    </div>
  );
}
