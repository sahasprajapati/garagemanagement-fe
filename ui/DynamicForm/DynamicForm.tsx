import { createUpdateData } from '@/lib/api.utils';
import { createData, updateData } from '@/lib/api/common';
import { useEffect } from 'react';
import Field from './Field';
import useFormHook from './formHook';

export default function DynamicForm({
  schema,
  defaultData,
  setSpecificData,
  isUpdateData,
  label,
  inputs,
  refetchData,
  route,
}: {
  schema: any;
  defaultData: any;
  setSpecificData: () => void;
  isUpdateData: boolean;
  label: string;
  inputs: {
    name: string;
    type: string;
    placeholder: string;
    route?: string;
    isMulti?: boolean;
    defaultValue?: string;
    disabled?: boolean;
  }[];
  refetchData: () => void;
  route: string;
}) {
  const { formProps } = useFormHook({
    schema: schema,
    defaultData: defaultData,
    setSpecificData: setSpecificData,
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    control,
    formState: { errors },
  } = formProps;

  const onSubmit = (data: any) => {
    inputs.map((props) => {
      if (props?.type === 'async') {
        if (props?.isMulti) {
          data[props.name] = data[props?.name]?.map((d: any) => d?.id);
        } else {
          data[props.name] = data[props?.name]?.id;
        }
      }
    });
    createUpdateData({
      createData: createData,
      updateData: updateData,
      data: data,
      id: defaultData.id,
      refetchData: refetchData ?? (() => {}),
      reset: () => {
        reset(defaultData);
      },
      isUpdateData: isUpdateData,
      name: label,
      route: route,
    });
  };

  useEffect(() => {
    const value: any = {};
    inputs?.map((inp) => {
      value[inp.name] = inp.defaultValue;
    });
    reset(value);
  }, [inputs]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((props) => {
        const { name, placeholder, type, ...rest } = props;
        return (
          <Field
            id={name}
            name={name}
            control={control}
            type={type}
            placeholder={placeholder}
            errorMessage={errors[name]?.message}
            formProps={{ ...register(name) }}
            {...rest}
          />
        );
      })}

      <div className="col-xxl-12 col-sm-4 col-12 mx-auto">
        <button
          className="btn btn-success w-100"
          type="submit"
          onMouseOver={() => {
            trigger(inputs.map((inp) => inp.name));
          }}
          data-bs-dismiss={Object.keys(errors).length === 0 && 'modal'}
          aria-label="Save"
        >
          {isUpdateData ? 'Update' : 'Create'} {label}
        </button>
      </div>
    </form>
  );
}
