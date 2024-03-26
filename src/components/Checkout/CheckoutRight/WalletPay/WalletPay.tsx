import { WithTranslation } from 'next-i18next';
import Image from 'next/image';
import { withTranslation } from 'react-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
loadTranslations(i18n);

function WalletPay({ t }: WithTranslation) {
  return (
    <button className="w-full bg-black text-white rounded-[4px] px-[2px] py-2 flex justify-center items-center gap-3">
      <Image src="https://static-00.iconduck.com/assets.00/google-icon-256x256-hqxhu7j7.png" width={20} height={20} alt="Google logo" />
      {t('WALLET_PAY.PAY')}
    </button>
  );
}

export default withTranslation()(WalletPay);
