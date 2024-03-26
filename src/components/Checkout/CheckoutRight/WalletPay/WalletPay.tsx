import Image from 'next/image';

function WalletPay() {
  return (
    <button className="w-full bg-black text-white rounded-[4px] px-[2px] py-2 flex justify-center items-center gap-3">
      <Image src="https://static-00.iconduck.com/assets.00/google-icon-256x256-hqxhu7j7.png" width={20} height={20} alt="Google logo" />
      Pay
    </button>
  );
}

export default WalletPay;
