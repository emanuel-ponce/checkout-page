import { useSelector } from 'react-redux';
import FooterBrand from './FooterBrand/FooterBrand';
import FooterBrandSkeleton from './FooterBrand/FooterBrandSkeleton/FooterBrandSkeleton';
import FooterPolicies from './FooterPolicies/FooterPolicies';
import FooterPoliciesSkeleton from './Skeletons/FooterPoliciesSkeleton';
import { selectStorePolicies } from 'checkoutPagePreview/customizationSlice';
import { selectCheckoutMode, CHECKOUT_MODE_ENUM } from 'checkoutPagePreview/stepperSlice';

function FooterLeft() {
  const showPolicies = useSelector(selectStorePolicies);
  const checkoutMode = useSelector(selectCheckoutMode);
  return (
    <div className="flex gap-2 items-center justify-center text-xs pb-2">
      {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION ? <FooterBrandSkeleton /> : <FooterBrand />}
      {(checkoutMode === CHECKOUT_MODE_ENUM.NONE || !!showPolicies) && (
        <>
          <div className="border-l-[1px] border-slate-400 h-4"></div>
          <FooterPolicies />
        </>
      )}
      {checkoutMode === CHECKOUT_MODE_ENUM.ON_CUSTOMIZATION && !showPolicies && <FooterPoliciesSkeleton />}
    </div>
  );
}

export default FooterLeft;
