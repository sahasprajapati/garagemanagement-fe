import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';
import { useEffect, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { getStorage } from '@/lib/utils';

interface CustomAsyncSelectProps {
  setValue: (data: any) => void;
  fetchFunc: (data: any) => Promise<any>;
  routeLabel: string;
  isMulti?: boolean;
  name?: string;
  createModal?: React.ReactNode;
  modalId?: string;
}
export default function CustomAsyncSelect(props: CustomAsyncSelectProps) {
  const {
    setValue,
    fetchFunc,
    routeLabel,
    name = 'Customer',
    modalId = 'exampleModal',
    ...restProps
  } = props;
  //set default query terms

  //get animated components wrapper
  const animatedComponents = makeAnimated();

  const { data } = useSWR(routeLabel, async () => {
    return await fetchFunc({ take: 50 });
  });
  const { mutate } = useSWRConfig();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = JSON.parse(getStorage('theme') ?? 'null');
    if (theme?.settings?.layout?.darkMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    document.addEventListener('themeChanged', () => {
      console.log('Sahas theme', getStorage('theme'));
      const theme = JSON.parse(getStorage('theme') ?? 'null');
      if (theme?.settings?.layout?.darkMode) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    });
  }, []);
  // fetch filteres search results for dropdown
  const loadOptions = async (query: any) => {
    // return fetch(`http://localhost:3000/collabs?q=${query}`).then((res) =>
    //   res.json(),
    // );
    const data = await mutate(
      routeLabel,
      fetchFunc({
        filter: query,
        take: 50,
      }),
      {
        revalidate: false,
      },
    );
    return data.data.map((d: any) => {
      return {
        label: d.name,
        id: d.id,
      };
    });
  };

  return (
    <>
      <AsyncSelect
        cacheOptions
        isMulti
        components={animatedComponents}
        getOptionLabel={(e: any) => e.label}
        getOptionValue={(e: any) => e.id}
        loadOptions={loadOptions}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            ':hover': {
              borderColor: state.isFocused ? 'transparent' : 'transparent',
            },
            borderColor: darkMode
              ? state.isFocused
                ? 'transparent'
                : 'transparent'
              : '#bfc9d4',
            backgroundColor: darkMode
              ? state.isFocused
                ? '#1B2E4B'
                : '#1B2E4B'
              : '',
          }),
        }}
        defaultOptions={data?.data?.map((d: any) => {
          return {
            label: d.name,
            id: d.id,
          };
        })}
        onChange={(value) => setValue(value)}
        {...restProps}
        noOptionsMessage={({ inputValue }) => {
          return (
            <>
              {name} Not Found
              <button
                className="btn btn-primary w-100"
                data-bs-toggle="modal"
                data-bs-target={`#${modalId}`}
              >
                Add New {name}
              </button>
            </>
          );
        }}
      />
    </>
  );
}
