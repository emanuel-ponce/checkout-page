import Pill from '@/components/Shared/Pill/Pill';
import Image from 'next/image';
import { FiArrowLeft } from 'react-icons/fi';

function Navbar() {
  return (
    <div className="flex gap-2 items-center w-full">
      <FiArrowLeft />
      <Image src="/logo.png" width={28} height={28} alt="Logo" />
      <span className="text-sm">Powdur</span>
      <Pill text="TEST MODE" bgColor="yellow" textColor="orange" />
    </div>
  );
}

export default Navbar;
