import { InputHTMLAttributes } from 'react';
import { Control, Controller } from 'react-hook-form';
import CustomAsyncSelect from '../AsyncSelect/CustomAsyncSelect';
import useFormHook from './formHook';

interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  formProps: any;
  errorMessage: any;
  placeholder: string;
  id: string;
  control: Control;
  route?: string;
}
export default function Field(props: IFieldProps) {
  const {
    formProps,
    errorMessage,
    placeholder,
    id,
    type,
    route,
    control,
    name,
    ...restProps
  } = props;
  switch (type) {
    case 'async':
      return (
        <div className="widget-content widget-content-area">
          <Controller
            name={name ?? ''}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomAsyncSelect
                route={route ?? ''}
                {...field}
                isClearable
                setValue={() => {}}
                // defaultOptions
                // placeholder={"Your information"}
                // loadOptions={loadOptions}
                // onInputChange={handleInputChange}
                // styles={customStyles}
              />
            )}
          />
          {errorMessage && <span>{errorMessage}</span>}
        </div>
      );
    default:
      return (
        <div className="widget-content widget-content-area">
          <input
            className="form-control"
            id={id}
            placeholder={placeholder}
            type={type}
            {...formProps}
            {...restProps}
          />
          {errorMessage && <span>{errorMessage}</span>}
        </div>
      );
  }
}
