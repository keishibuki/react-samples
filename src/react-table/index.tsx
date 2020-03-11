import * as React from "react";
import { useTable } from "react-table";
import styled from "styled-components";
import { FixedSizeList } from "react-window";
import makeData from "./makeData";

const Table = styled.div`
  display: inline-block;
  width: 600px;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
`;

const Tr = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Th = styled.div`
  display: inline-block;
  width: 200px;
  box-sizing: border-box;
  padding: 8px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  text-align: center;
`;

const Td = styled.div`
  display: inline-block;
  width: 200px;
  height: 100%;
  box-sizing: border-box;
  padding: 0 8px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  white-space: nowrap;
  overflow: hidden;
`;

const Index = () => {
  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    totalColumnsWidth
  } = useTable({
    columns: [
      { accessor: "firstName", Header: "First Name" },
      { accessor: "lastName", Header: "Last Name" },
      { accessor: "age", Header: "Age" }
    ],
    data: makeData(10000)
  });

  const RenderRow = React.useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);

      return (
        <Tr {...row.getRowProps({ style })}>
          {row.cells.map(cell => {
            return (
              <Td {...cell.getCellProps()} className="td">
                {cell.render("Cell")}
              </Td>
            );
          })}
        </Tr>
      );
    },
    [prepareRow, rows]
  );

  return (
    <Table {...getTableProps()} style={{ width: totalColumnsWidth }}>
      <div className="thead" style={{ width: totalColumnsWidth }}>
        {headerGroups.map(headerGroup => (
          <Tr {...headerGroup.getHeaderGroupProps()} className="tr">
            {headerGroup.headers.map(column => (
              <Th className="th" {...column.getHeaderProps()}>
                {column.render("Header")}
              </Th>
            ))}
          </Tr>
        ))}
      </div>
      <div className="tbody">
        <FixedSizeList
          height={420}
          itemCount={rows.length}
          itemSize={25}
          width={totalColumnsWidth}
        >
          {RenderRow}
        </FixedSizeList>
      </div>
    </Table>
  );
};

export default Index;
