import { WithTranslation } from 'next-i18next';
import { withTranslation } from 'react-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
loadTranslations(i18n);

function Subtotal({ t }: WithTranslation) {
  return (
    <div className="flex justify-between">
      <span className="text-sm font-medium">{t('SUBTOTAL.LABEL')}</span>
      <span className="text-sm font-semibold">$129.00</span>
    </div>
  );
}

export default withTranslation()(Subtotal);
