function PriceSummary() {
  return (
    <div className="ml-[58px]">
      <div className="border-t-[1px] w-full self-end flex flex-col pt-3 gap-4">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Subtotal</span>
          <span className="text-sm font-medium">$129.00</span>
        </div>
        <div>
          <button className="rounded-sm text-sm p-1 font-semibold focus:shadow-md">Add promotional code</button>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm">Shipping</span>
            <span className="text-[10px]">Free shipping (5-7 business days)</span>
          </div>
          <span className="text-sm">Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Sales tax (6.5%)</span>
          <span className="text-sm">$4.23</span>
        </div>
      </div>
      <div className="border-t-[1px] w-full self-end flex flex-col pt-3 gap-4 mt-3">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Total due</span>
          <span className="text-sm font-medium">$133.23</span>
        </div>
      </div>
    </div>
  );
}

export default PriceSummary;
