import { InputHTMLAttributes } from 'react';
import useFormHook from './formHook';

interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  formProps: any;
  errorMessage: any;
  placeholder: string;
  id: string;
}
export default function Field(props: IFieldProps) {
  const { formProps, errorMessage, placeholder, id, ...restProps } = props;
  return (
    <div className="widget-content widget-content-area">
      <input
        className="form-control"
        id={id}
        placeholder={placeholder}
        {...formProps}
        {...restProps}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
    //   <div className="widget-content widget-content-area blog-create-section">
    //     <input
    //       type="text"
    //       className="form-control"
    //       id="post-title"
    //       placeholder="Email"
    //       {...register('email')}
    //     />
    //     {errors.email?.message && (
    //       <span>{errors.email?.message as string}</span>
    //     )}
    //   </div>

    //   <div className="widget-content widget-content-area blog-create-section">
    //     <input
    //       type="text"
    //       className="form-control"
    //       id="post-title"
    //       placeholder="Mobile No"
    //       {...register('mobile')}
    //     />
    //     {errors.mobile?.message && (
    //       <span>{errors.mobile?.message as string}</span>
    //     )}
    //   </div>

    //   <div className="widget-content widget-content-area blog-create-section">
    //     <input
    //       type="text"
    //       className="form-control"
    //       id="post-title"
    //       placeholder="Address"
    //       {...register('address')}
    //     />
    //     {errors.address?.message && (
    //       <span>{errors.address?.message as string}</span>
    //     )}
    //   </div>

    //   <div className="col-xxl-12 col-sm-4 col-12 mx-auto">
    //     <button
    //       className="btn btn-success w-100"
    //       type="submit"
    //       onMouseOver={() => {
    //         trigger(['name', 'email', 'mobile', 'address']);
    //       }}
    //       data-bs-dismiss={Object.keys(errors).length === 0 && 'modal'}
    //       aria-label="Save"
    //     >
    //       {isUpdateData ? 'Update' : 'Create'} {label}
    //     </button>
    //   </div>
    // </form>
  );
}
