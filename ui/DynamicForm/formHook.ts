import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function useFormHook({
  schema,
  defaultData,
  setSpecificData,
}: {
  schema: any;
  defaultData: any;
  setSpecificData: () => void;
}) {
  const formProps = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (defaultData) {
      formProps?.reset(defaultData);
      setSpecificData();
    }
    // setSelectedPermissions([...defaultData.permissions]);
  }, [defaultData]);
  return {
    formProps,
  };
}
