function ShippingInformationSkeleton() {
  return (
    <div className="flex flex-col animate-pulse w-full gap-[15px]">
      <div className="h-[24px] bg-gray-300 rounded-md"></div>
      <div className="flex flex-col gap-2">
        <div className="h-[20px] bg-gray-300 rounded-md w-[80px]"></div>
        <div className="h-[39px] bg-gray-300 rounded-md"></div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-[20px] bg-gray-300 rounded-md w-[120px]"></div>
        <div>
          <div className="h-[160px] bg-gray-300 rounded-md"></div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-[20px] bg-gray-300 rounded-md w-[120px]"></div>
        <div className="h-[110px] bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
}

export default ShippingInformationSkeleton;
