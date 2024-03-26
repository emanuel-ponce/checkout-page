import CardInformation, { CardInformationProps } from '@/components/Shared/Inputs/CardInformation/CardInformation';
interface PaymentInformationProps {
  handleChange: (e: any) => any;
}

function PaymentInformation({ handleChange }: PaymentInformationProps) {
  const getCardInformationInputs = (handleChange: (e: any) => any): CardInformationProps['inputs'] => ({
    cardNumber: {
      inputName: 'carNumber',
      placeholder: '1234 1234 1234 1234',
      handleChange
    },
    cvc: {
      inputName: 'cvc',
      placeholder: 'MM / YY',
      handleChange
    },
    dueDate: {
      inputName: 'dueDate',
      placeholder: 'CVC',
      handleChange
    }
  });
  return (
    <>
      <h1 className="text-gray-800 text-base font-medium mt-2">Payment information</h1>
      <CardInformation label="Card information" inputs={getCardInformationInputs(handleChange)} />
      <div className="mt-3">
        <button className="text-center w-full  text-slate-400 font-medium rounded-[4px] px-[2px] py-2 bg-blue-950">Pay</button>
      </div>
    </>
  );
}

export default PaymentInformation;
