import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';
import { useCallback, useEffect, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { getStorage } from '@/lib/utils';
import { fetchData } from '@/lib/api/common';
import { debounce } from 'lodash';

interface CustomAsyncSelectProps {
  setValue: (data: any) => void;
  route: string;
  isMulti?: boolean;
  isClearable?: boolean;
  name?: string;
  createModal?: React.ReactNode;
  modalId?: string;
}
export default function CustomAsyncSelect(props: CustomAsyncSelectProps) {
  const {
    setValue,
    route,
    name = 'Customer',
    modalId = 'exampleModal',
    ...restProps
  } = props;
  //set default query terms

  //get animated components wrapper
  const animatedComponents = makeAnimated();
  const { data } = useSWR(route, async () => {
    return await fetchData({ route, pageOptions: { take: 50 } });
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
      const theme = JSON.parse(getStorage('theme') ?? 'null');
      if (theme?.settings?.layout?.darkMode) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    });
  }, []);
  // fetch filteres search results for dropdown
  const _loadOptions = (query: string, callback: (data: any) => void) => {
    mutate(
      route,
      fetchData({
        route,
        pageOptions: {
          filter: query,
          take: 50,
        },
      }),
      {
        revalidate: false,
      },
    ).then((data) => {
      callback(
        data.data.map((d: any) => {
          return {
            label: d.name,
            id: d.id,
          };
        }),
      );
    });
  };

  const loadOptions = debounce(_loadOptions, 500);

  // const loadOptions = debounce(async (query: any) => {
  //   // return fetch(`http://localhost:3000/collabs?q=${query}`).then((res) =>
  //   //   res.json(),
  //   // );
  //   const data = await mutate(
  //     route,
  //     fetchData({
  //       route,
  //       pageOptions: {
  //         filter: query,
  //         take: 50,
  //       },
  //     }),
  //     {
  //       revalidate: false,
  //     },
  //   );
  //   return data.data.map((d: any) => {
  //     return {
  //       label: d.name,
  //       id: d.id,
  //     };
  //   });
  // }, 500);

  return (
    <>
      <AsyncSelect
        cacheOptions
        isClearable
        components={animatedComponents}
        getOptionLabel={(e: any) => e.label}
        getOptionValue={(e: any) => e.id}
        loadOptions={loadOptions}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            color: darkMode ? 'white' : '',
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
          option: (baseStyles, state) => ({
            ...baseStyles,
            color: darkMode ? '#888ea8' : '',
          }),
          singleValue: (baseStyles, state) => ({
            ...baseStyles,
            color: darkMode ? '#009688' : '',
          }),
          multiValue: (baseStyles, state) => ({
            ...baseStyles,
            color: darkMode ? '#009688' : '',
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
