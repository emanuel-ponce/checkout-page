import { WithTranslation } from 'next-i18next';
import { withTranslation } from 'react-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
loadTranslations(i18n);

function Total({ t }: WithTranslation) {
  return (
    <div className="flex justify-between">
      <span className="text-sm font-medium">{t('TOTAL.TITLE')}</span>
      <span className="text-sm font-medium">$133.23</span>
    </div>
  );
}

export default withTranslation()(Total);
