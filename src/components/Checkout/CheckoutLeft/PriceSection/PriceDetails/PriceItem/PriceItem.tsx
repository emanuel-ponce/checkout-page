import { WithTranslation } from 'next-i18next';
import Image from 'next/image';
import { withTranslation } from 'react-i18next';
import { IoIosArrowDown } from 'react-icons/io';
import { loadTranslations } from './i18n/translations';
import i18n from '@/shared/i18n/i18n.config';
loadTranslations(i18n);
export interface PriceItemProps {
  title: string;
  quantity: number;
  imgSrc: string;
  price: number;
}

export interface PriceItemsPropsGeneral extends PriceItemProps, WithTranslation {}

function PriceItem({ title, quantity, imgSrc, price, t }: PriceItemsPropsGeneral) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <Image className="rounded-sm" src={imgSrc} width={42} height={42} alt="Item" />
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-800">{title}</span>
          <div className="flex">
            <div className="flex bg-gray-300 items-center rounded-sm font-semibold cursor-pointer">
              <span className="p-[2px] text-xs">
                {t('PRICE_ITEM.QTY')} {quantity}
              </span>
              <IoIosArrowDown className="text-slate-500 text-xs" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <span className="text-sm font-medium text-end">${price.toFixed(2)}</span>
        {quantity > 1 && (
          <span className="text-xs text-gray-500/50">
            ${(price / quantity).toFixed(2)} {t('PRICE_ITEM.EACH')}
          </span>
        )}
      </div>
    </div>
  );
}

export default withTranslation()(PriceItem);
