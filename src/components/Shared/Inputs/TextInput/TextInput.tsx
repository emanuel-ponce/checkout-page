import { Field, useField } from 'formik';
import { SyntheticEvent } from 'react';

export interface TextInputProps {
  inputName: string;
  label?: string;
  placeholder?: string;
  handleChange?: (e: any) => any;
  type?: string;
  disabled?: boolean;
  className?: string;
}

export default function TextInput({ inputName, label, disabled, handleChange, placeholder, type, className }: TextInputProps) {
  const [_, meta, helpers] = useField(inputName);
  return (
    <div className="flex flex-col">
      {label && <label className="label-form">{label}</label>}
      <Field
        className={`form-control ${className} ${disabled ? 'bg-grey-200 text-grey-400' : ''}`}
        type={type}
        name={inputName}
        placeholder={placeholder}
        onChange={handleChange}
        value={meta.value}
        disabled={disabled}
      />
    </div>
  );
}
