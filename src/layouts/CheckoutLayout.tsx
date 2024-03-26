import 'tailwindcss/tailwind.css';
import { ReactNode } from 'react';
interface CheckoutLayoutProps {
  children: ReactNode[];
}
import { selectBrandColor } from 'checkoutPagePreview/customizationSlice';
import { selectDeviceSelected } from 'checkoutPagePreview/previewSlice';
import { DEVICES_OPTIONS_ENUM } from 'checkoutPagePreview/devicesOptionsEnum';
import { useSelector } from 'react-redux';

export default function CheckoutLayout({ children }: CheckoutLayoutProps) {
  const bgColor: string = useSelector(selectBrandColor);
  const deviceSelected = useSelector(selectDeviceSelected);
  return (
    <div className="flex flex-wrap">
      <div
        className={`flex grow justify-center pb-6 transition-colors duration-500 ease-in-out ${deviceSelected === DEVICES_OPTIONS_ENUM.DESKTOP ? 'w-1/2' : 'w-100'}`}
        style={{ backgroundColor: bgColor }}
      >
        <div className={`max-w-[80%] flex grow ${deviceSelected === DEVICES_OPTIONS_ENUM.DESKTOP && 'mt-10'}`}>{children[0]}</div>
      </div>
      <div className={`flex justify-center pb-6 shadow-xl max-w-[100%] ${deviceSelected === DEVICES_OPTIONS_ENUM.DESKTOP ? 'w-1/2' : 'w-100'}`}>
        <div className="max-w-[80%]  flex grow mt-10">{children[1]}</div>
      </div>
    </div>
  );
}
