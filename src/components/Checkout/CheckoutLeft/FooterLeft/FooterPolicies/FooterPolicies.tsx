import { WithTranslation } from 'next-i18next';
import { withTranslation } from 'react-i18next';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
loadTranslations(i18n);

function FooterPolicies({ t }: WithTranslation) {
  return (
    <div className="flex gap-2 text-gray-500/80">
      <a href="https://stripe.com/es/legal/consumer" target="_blank">
        {t('FOOTER_POLICIES.LEGAL')}
      </a>
      <a href="https://support.stripe.com/topics/refunds" target="_blank">
        {t('FOOTER_POLICIES.RETURNS')}
      </a>
      <a href="https://stripe.com/es/contact" target="_blank">
        {t('FOOTER_POLICIES.CONTACT')}
      </a>
    </div>
  );
}

export default withTranslation()(FooterPolicies);
