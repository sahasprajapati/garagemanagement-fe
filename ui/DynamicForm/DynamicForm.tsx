import { createUpdateData } from '@/lib/api.utils';
import { createData, updateData } from '@/lib/api/common';
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
  route
}: {
  schema: any;
  defaultData: any;
  setSpecificData: () => void;
  isUpdateData: boolean;
  label: string;
  inputs: { name: string; type: string; placeholder: string }[];
  refetchData: () => void;
  route:string
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
    formState: { errors },
  } = formProps;

  const onSubmit = (data: any) => {
    console.log("Sahas warn", data)
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map(({ name, placeholder, type }) => {
        return (
          <Field
            id={name}
            type={type}
            placeholder={placeholder}
            errorMessage={errors[name]?.message}
            formProps={{...register(name)}}
          />
        );
      })}

      <div className="col-xxl-12 col-sm-4 col-12 mx-auto">
        <button
          className="btn btn-success w-100"
          type="submit"
          onMouseOver={() => {
            console.log("Saahas name",inputs.map((inp) => inp.name))
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
