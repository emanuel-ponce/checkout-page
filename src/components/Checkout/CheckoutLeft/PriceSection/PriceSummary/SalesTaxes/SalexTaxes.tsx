import { WithTranslation } from 'next-i18next';
import { withTranslation } from 'react-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
loadTranslations(i18n);

function SalesTaxes({ t }: WithTranslation) {
  return (
    <div className="flex justify-between">
      <span className="text-sm text-gray-500/50">{t('SALES_TAXES.TITLE')} (6.5%)</span>
      <span className="text-sm text-gray-500/50">$4.23</span>
    </div>
  );
}

export default withTranslation()(SalesTaxes);
