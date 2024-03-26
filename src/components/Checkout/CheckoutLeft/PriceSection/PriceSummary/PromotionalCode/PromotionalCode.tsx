import { WithTranslation } from 'next-i18next';
import { withTranslation } from 'react-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
loadTranslations(i18n);

function PromotionalCode({ t }: WithTranslation) {
  return (
    <div>
      <button className="rounded-sm text-sm p-1 font-semibold focus:shadow-md-blue text-blue-500 border-blue-500">{t('PROMOTIONAL_CODE.ADD')}</button>
    </div>
  );
}

export default withTranslation()(PromotionalCode);
