import { WithTranslation } from 'next-i18next';
import { withTranslation } from 'react-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
loadTranslations(i18n);

function ShippingDetail({ t }: WithTranslation) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="text-sm text-gray-500/50">{t('SHIPPING_DETAIL.TITLE')}</span>
        <span className="text-[12px] text-gray-500/50">{t('SHIPPING_DETAIL.SUBTITLE')}</span>
      </div>
      <span className="text-sm text-gray-500/50">{t('SHIPPING_DETAIL.FREE')}</span>
    </div>
  );
}

export default withTranslation()(ShippingDetail);
