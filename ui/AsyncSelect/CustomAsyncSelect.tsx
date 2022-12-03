import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';
import { useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

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
    console.log('Sahas data data data', data);
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
        // classNames={{
        //   control: (state) =>
        //     state.isFocused ? 'border-red-600' : 'border-grey-300',
        // }}
        // classNamePrefix="form-control"
        // className="form-control"
        cacheOptions
        isMulti
        components={animatedComponents}
        getOptionLabel={(e: any) => e.label}
        getOptionValue={(e: any) => e.id}
        loadOptions={loadOptions}
        defaultOptions={data?.data?.map((d: any) => {
          return {
            label: d.name,
            id: d.id,
          };
        })}
        // onInputChange={(value) => setQuery(value)}
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
