import AdressInput, { AdressInputProps } from '@/components/Shared/Inputs/AddressInput/AdressInput';
import CardSelectInput, { CardSelectInputProps } from '@/components/Shared/Inputs/CardSelectorInput/CardSelectInput';
import TextInput from '@/components/Shared/Inputs/TextInput/TextInput';
interface ShippingInformationProps {
  handleChange: (e: any) => any;
}

function ShippingInformation({ handleChange }: ShippingInformationProps) {
  const getShippingAddressProps = (handleChange: (e: any) => any): AdressInputProps['inputs'] => ({
    fullName: {
      inputName: 'fullName',
      placeholder: 'Full name',
      handleChange
    },
    address: {
      inputName: 'address',
      placeholder: 'Address',
      handleChange
    },
    location: {
      inputName: 'location',
      options: [
        {
          label: 'United States',
          value: 'US'
        },
        {
          label: 'Argentina',
          value: 'AR'
        }
      ],
      handleChange
    },
    phoneNumber: {
      inputName: 'phoneNumber',
      placeholder: '(201) 555-0123',
      handleChange
    }
  });

  const getShippingMethodsOptions = (handleChange: (e: any) => any): CardSelectInputProps['options'] => [
    {
      value: 'freeShipping',
      hint: '5-7 business days',
      labelLeft: 'Free shipping',
      labelRight: 'Free'
    },
    {
      value: 'nextDay',
      hint: 'At most 1 business day',
      labelLeft: 'Next day air',
      labelRight: '$15.00'
    }
  ];

  return (
    <>
      <h1 className="text-gray-800 text-base font-medium mt-1">Shipping information</h1>
      <TextInput inputName="email" label="Email" placeholder="" handleChange={handleChange} />
      <AdressInput inputs={getShippingAddressProps(handleChange)} label="Shipping information" />
      <div>
        <CardSelectInput inputName="shippingMehod" label="Shipping method" handleChange={handleChange} options={getShippingMethodsOptions(handleChange)} />
      </div>
    </>
  );
}

export default ShippingInformation;
