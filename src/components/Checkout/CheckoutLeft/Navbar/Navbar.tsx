import Pill from '@/components/Shared/Pill/Pill';
import Image from 'next/image';
import { withTranslation } from 'react-i18next';
import { FiArrowLeft } from 'react-icons/fi';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
import { WithTranslation } from 'next-i18next';

loadTranslations(i18n);

function Navbar({ t }: WithTranslation) {
  return (
    <div className="flex gap-2 items-center w-full">
      <FiArrowLeft />
      <Image src="https://www.cicloplast.com/wp-content/uploads/2020/08/cicloplast-icon.png" width={28} height={28} alt="Logo" />
      <span className="text-sm text-gray-800 font-medium">Powdur</span>
      <Pill text={t('NAVBAR.TEST_MODE').toUpperCase()} className="text-orange-500 bg-yellow-300" />
    </div>
  );
}

export default withTranslation()(Navbar);
