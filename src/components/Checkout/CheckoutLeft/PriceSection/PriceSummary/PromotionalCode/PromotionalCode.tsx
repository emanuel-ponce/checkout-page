import { WithTranslation } from 'next-i18next';
import { withTranslation } from 'react-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
loadTranslations(i18n);

interface PromotionalCodeProps extends WithTranslation {
  filled?: boolean;
}

function PromotionalCode({ t, filled }: PromotionalCodeProps) {
  return (
    <div>
      <button className={`rounded-sm text-sm p-1 font-semibold focus:shadow-md-blue text-blue-500 ${filled && 'bg-gray-200 p-3 rounded-md hover:bg-gray-300'}`}>{t('PROMOTIONAL_CODE.ADD')}</button>
    </div>
  );
}

export default withTranslation()(PromotionalCode);
