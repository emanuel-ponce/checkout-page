import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';

function PriceItem() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <Image
          className="rounded-sm"
          src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={42}
          height={42}
          alt="Item"
        />
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
