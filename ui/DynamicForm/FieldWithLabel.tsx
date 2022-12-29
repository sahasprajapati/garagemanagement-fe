import { InputHTMLAttributes } from 'react';
import useFormHook from './formHook';

interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  formProps: any;
  errorMessage: any;
  placeholder: string;
  name: string;
  id: string;
  type?: 'input' | 'textarea';
}
export default function FieldWithLabel(props: IFieldProps) {
  const {
    formProps,
    errorMessage,
    placeholder,
    name,
    id,
    type = 'input',
    ...restProps
  } = props;
  return (
    <div className="form-group row">
      <label
        htmlFor={name}
        className={
          (type === 'input' ? 'col-sm-3' : 'col-sm-12') +
          'col-form-label col-form-label-sm'
        }
      >
        {name}
      </label>
      <div className={type === 'input' ? 'col-sm-9' : 'col-sm-12'}>
        {type === 'input' ? (
          <input
            name={name}
            className="form-control form-control-sm"
            id={id}
            placeholder={placeholder}
            {...formProps}
            {...restProps}
          />
        ) : (
          <textarea
            name={name}
            className="form-control form-control-sm"
            id={id}
            placeholder={placeholder}
            {...formProps}
            {...restProps}
          />
        )}
        {errorMessage && <span>{errorMessage}</span>}
      </div>
    </div>
  );
}
