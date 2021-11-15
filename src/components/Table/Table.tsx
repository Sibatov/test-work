import React, {FC, memo} from 'react';

// utils
import { useTable, useFlexLayout, useSortBy, Column } from 'react-table';
import {getFormattedDate} from "../PackageList/data";

// components
import Icon from '../Icon';

// types
import {TableProps} from './types';
import {Package} from "../PackageList/types";

// styles
import {TableContainer, Thead, Tbody, Row, Cell, Main, IconsWrap, ButtonStyled} from './styles';

const columns = [
  {
    Header: 'Package Name',
    accessor: 'name',
    // width: '150px'
  },
  {
    Header: 'Description',
    accessor: 'description',
    // width: '250px',
  },
  {
    Header: 'Publisher',
    accessor: 'publisher',
    // width: '250px',
    Cell: () => <p>Links</p>
  },
  {
    Header: 'Version',
    accessor: 'version',
    // width: '80px'
  },
  {
    Header: 'Links',
    accessor: 'links',
    // width: '200px',
    Cell: () => <p>Links</p>
  },
  {
    Header: 'Data',
    accessor: 'date',
    Cell: ({value}) => getFormattedDate(new Date(value as Date)),
    // width: '100px',
  },
] as Column<Package>[];


const Table: FC<TableProps> = ({className, data = []}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({
    columns,
    data,
    disableSortRemove: true,
  },
  useSortBy,
  useFlexLayout,
  );

  if (!data?.length) return null;

  return (
    <Main>
      <TableContainer className={className} {...getTableProps()}>
        <Thead>
          {/* Loop over the header rows */}
          {headerGroups.map((headerGroup, i) => (
            <Row {...headerGroup.getHeaderGroupProps()} key={i.toString()}>
              {/* Loop over the headers in each row */}
              {headerGroup.headers.map((column, index) => (
                <Cell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={index.toString()}
                >
                  {column.render('Header')}

                  {
                    column.isSorted && (
                      <IconsWrap>
                        <ButtonStyled className={`${column.isSortedDesc ? 'active' : ''}`}>
                          <Icon type="caretUpInner" />
                        </ButtonStyled>

                        <ButtonStyled className={`${!column.isSortedDesc ? 'active' : ''}`}>
                          <Icon type="caretDownInner" />
                        </ButtonStyled>
                      </IconsWrap>
                    )
                  }
                </Cell>
              ))}
            </Row>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <Row {...row.getRowProps()} key={i}>
                {row.cells.map((cell, cellIndex) =>
                  <Cell {...cell.getCellProps()} key={cellIndex}>{cell.render('Cell')}</Cell>)}
              </Row>
            );
          })}
        </Tbody>
      </TableContainer>
    </Main>
  );
};

export default memo(Table);
