import { Field } from 'formik';

export interface CardSelectInputProps {
  label: string;
  inputName: string;
  handleChange?: (e: any) => any;
  options: {
    value: string;
    labelLeft: string;
    hint: string;
    labelRight: string;
  }[];
}

export default function CardSelectInput({ inputName, label, options, handleChange }: CardSelectInputProps) {
  return (
    <div className="flex flex-col">
      <label className="label-form">{label}</label>
      {options?.map((option, index) => (
        <div
          key={option.value}
          className={`form-control flex justify-between items-center ${index === 0 ? 'rounded-b-none' : index === options.length - 1 ? 'rounded-t-none' : 'rounded-none'} ${index < options.length - 1 && 'shadow-none'}`}
        >
          <div className="flex gap-2">
            <Field className="cursor-pointer" type="radio" name={inputName} value={option.value} onChange={handleChange} />
            <div className="flex flex-col">
              <span className="font-medium text-[13px] text-gray-600">{option.labelLeft}</span>
              <span className="text-[11px] text-gray-400">{option.hint}</span>
            </div>
          </div>
          <span className="text-gray-600 font-semibold">{option.labelRight}</span>
        </div>
      ))}
    </div>
  );
}
