import { Field, useField } from 'formik';

export interface CardInformationProps {
  label: string;
  inputs: {
    cardNumber: {
      inputName: string;
      placeholder?: string;
      handleChange?: (e: any) => any;
      disabled?: boolean;
    };
    dueDate: {
      inputName: string;
      placeholder?: string;
      handleChange?: (e: any) => any;
      disabled?: boolean;
    };
    cvc: {
      inputName: string;
      placeholder?: string;
      handleChange?: (e: any) => any;
      disabled?: boolean;
    };
  };
}

export default function CardInformation({ inputs, label }: CardInformationProps) {
  const { cardNumber, dueDate, cvc } = inputs;
  const [propsCardNumber, metaCardNumber, helpersCardNumber] = useField(cardNumber.inputName);
  const [propsDueDate, metaDueDate, helpersDueDate] = useField(dueDate.inputName);
  const [propsCvc, metaCvc, helpersCvc] = useField(cvc.inputName);

  return (
    <div className="flex flex-col">
      <label className="label-form">{label}</label>
      <Field
        className={`form-control rounded-b-none ${cardNumber.disabled ? 'bg-grey-200 text-grey-400' : ''}`}
        type="text"
        name={cardNumber.inputName}
        placeholder={cardNumber.placeholder}
        onChange={cardNumber.handleChange}
        value={metaCardNumber.value}
        disabled={cardNumber.disabled}
      />
      <div className="flex">
        <Field
          className={`form-control max-w-[50%] flex-grow rounded-t-none rounded-r-none ${dueDate.disabled ? 'bg-grey-200 text-grey-400' : ''}`}
          type="text"
          name={dueDate.inputName}
          placeholder={dueDate.placeholder}
          onChange={dueDate.handleChange}
          value={metaDueDate.value}
          disabled={dueDate.disabled}
        />
        <Field
          className={`form-control max-w-[50%] flex-grow rounded-t-none rounded-l-none ${cvc.disabled ? 'bg-grey-200 text-grey-400' : ''}`}
          type="text"
          name={cvc.inputName}
          placeholder={cvc.placeholder}
          onChange={cvc.handleChange}
          value={metaCvc.value}
          disabled={cvc.disabled}
        />
      </div>
    </div>
  );
}
