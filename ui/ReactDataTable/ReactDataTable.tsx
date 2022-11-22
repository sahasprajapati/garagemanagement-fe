'use client';

import { IPaginate } from '@/lib/types';
import { getStorage } from '@/lib/utils';
import React, { useCallback, useEffect, useState } from 'react';
import DataTable, {
  createTheme,
  TableColumn,
} from 'react-data-table-component';
import useSWR from 'swr';
import FilterComponent from './FilterComponent';
import SelectedRowsAction from './SelectedRowsAction';
import { useSWRConfig } from 'swr';

interface ReactDataTableProps {
  title: string;
  columns: TableColumn<any>[];
  onClick: () => void;
  clearRows?: boolean;
  fetcher: (pageOptions: IPaginate) => any;
  fetchLabel: string;
  selectableRows?: boolean;
  refetchData?: boolean;
  selectedActions?: { label: string; action: (selectedRows: any[]) => void }[];
  rowDisabledCriteria?: (row: any) => boolean
}

// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme(
  'solarized',
  {
    text: {
      primary: '#888EA8',
      secondary: '#2aa198',
    },
    background: {
      default: 'transparent',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  },
  'dark',
);

const ReactDataTable = ({
  title,
  columns,
  onClick,
  clearRows,
  refetchData,
  fetcher,
  fetchLabel,
  selectableRows = true,
  selectedActions,
  rowDisabledCriteria
}: ReactDataTableProps) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggledClearRows, setToggleClearRows] = React.useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const handleChange = useCallback((state: any) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const { mutate } = useSWRConfig();
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

  useEffect(() => {
    handleClearRows();
  }, [clearRows]);

  // Toggle the state so React Data Table changes to clearSelectedRows are triggered
  const handleClearRows = () => {
    setToggleClearRows(!toggledClearRows);
    setSelectedRows([]);
  };

  const [perPage, setPerPage] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    mutate(`${fetchLabel}?page=${pageIndex}&take=${perPage}`);
  }, [refetchData]);

  // The API URL includes the page index, which is a React state.
  const { data: resData } = useSWR(
    `${fetchLabel}?page=${pageIndex}&take=${perPage}`,
    async (data) => {
      const res = await fetcher({
        page: pageIndex,
        take: perPage,
      });
      return res;
    },
  );

  const handlePageChange = (page: number) => {
    setPageIndex(page);
  };

  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setPerPage(newPerPage);
    setPageIndex(page);
  };

  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  // const filteredItems = fakeUsers.filter(
  // 	item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
  // );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent
        onFilter={(value) => {
          setFilterText(value);
        }}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    // <DataTable
    //   title="Desserts"
    //   data={resData}
    //   columns={columns}
    //   selectableRows
    //   onSelectedRowsChange={handleChange}
    // />
    <>
      {selectedRows && selectedRows.length > 0 ? (
        <SelectedRowsAction
          handleClearRows={handleClearRows}
          selectedRows={selectedRows}
          selectedActions={
            selectedActions ?? [
              {
                action: () => {},
                label: 'Deleted Selected Rows',
              },
            ]
          }
        />
      ) : null}
      <DataTable
        title={title}
        columns={columns}
        theme={darkMode ? 'solarized' : 'light'}
        data={resData?.data}
        progressPending={!resData}
        pagination
        paginationServer
        paginationTotalRows={resData?.meta?.pageCount * perPage}
        selectableRows={selectableRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        onSelectedRowsChange={handleChange}
        clearSelectedRows={toggledClearRows}
        paginationResetDefaultPage={resetPaginationToggle}
        subHeaderComponent={subHeaderComponentMemo}
        className="style-2 dt-table-hover table"
        selectableRowDisabled={rowDisabledCriteria}
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
        customStyles={{
          headCells: {
            style: {
              color: '#BFC9D4',
              fontSize: '14px',
            },
          },
        }}
      />
    </>
  );
};

export default ReactDataTable;
