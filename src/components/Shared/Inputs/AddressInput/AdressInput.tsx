import { Field, useField } from 'formik';

export interface AdressInputProps {
  label: string;
  inputs: {
    fullName: {
      inputName: string;
      placeholder?: string;
      handleChange?: (e: any) => any;
      disabled?: boolean;
    };
    location: {
      inputName: string;
      placeholder?: string;
      handleChange?: (e: any) => any;
      disabled?: boolean;
      options: {
        label: string;
        value: string;
      }[];
    };
    address: {
      inputName: string;
      placeholder?: string;
      handleChange?: (e: any) => any;
      disabled?: boolean;
    };
    phoneNumber: {
      inputName: string;
      placeholder?: string;
      handleChange?: (e: any) => any;
      disabled?: boolean;
    };
  };
}

export default function AdressInput({ inputs, label }: AdressInputProps) {
  const { fullName, location, address, phoneNumber } = inputs;
  const [propsFullName, metaFullName, helpersFullName] = useField(fullName.inputName);
  const [propsLocation, metaLocation, helpersLocation] = useField(location.inputName);
  const [propsAddress, metaAddress, helpersAddress] = useField(address.inputName);
  const [propsPhoneNumber, metaPhoneNumber, helpersPhoneNumber] = useField(phoneNumber.inputName);
  return (
    <div className="flex flex-col">
      <label className="label-form">{label}</label>
      <Field
        className={`form-control rounded-b-none ${fullName.disabled ? 'bg-grey-200 text-grey-400' : ''}`}
        type="text"
        name={fullName.inputName}
        placeholder={fullName.placeholder}
        onChange={fullName.handleChange}
        value={metaFullName.value}
        disabled={fullName.disabled}
      />
      <Field
        className={`form-control rounded-none ${location.disabled ? 'bg-grey-200 text-grey-400' : ''}`}
        as="select"
        name={location.inputName}
        placeholder={location.placeholder}
        onChange={location.handleChange}
        value={metaLocation.value}
        disabled={location.disabled}
      >
        {location.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <Field
        className={`form-control  rounded-none ${address.disabled ? 'bg-grey-200 text-grey-400' : ''}`}
        type="text"
        name={address.inputName}
        placeholder={address.placeholder}
        onChange={address.handleChange}
        value={metaAddress.value}
        disabled={address.disabled}
      />
      <Field
        className={`form-control  rounded-t-none ${phoneNumber.disabled ? 'bg-grey-200 text-grey-400' : ''}`}
        type="text"
        name={phoneNumber.inputName}
        placeholder={phoneNumber.placeholder}
        onChange={phoneNumber.handleChange}
        value={metaPhoneNumber.value}
        disabled={phoneNumber.disabled}
      />
    </div>
  );
}
