import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';

function PriceItem() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <Image className="rounded-sm" src="/item1.jpeg" width={42} height={42} alt="Item" />
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium">The Pure Set</span>
          <div className="flex">
            <div className="flex bg-slate-100 items-center rounded-sm font-semibold cursor-pointer">
              <span className="p-[2px] text-xs">Qty 2</span>
              <IoIosArrowDown className="text-slate-500 text-xs" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <span className="text-sm font-medium text-end">$65.00</span>
        <span className="text-xs">$32.00 each</span>
      </div>
    </div>
  );
}

export default PriceItem;
