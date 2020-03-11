import * as React from "react";
import { useTable } from "react-table";
import styled from "styled-components";
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
  box-sizing: border-box;
  padding: 8px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

const Index = () => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns: [
      { accessor: "firstName", Header: "First Name" },
      { accessor: "lastName", Header: "Last Name" },
      { accessor: "age", Header: "Age" }
    ],
    data: makeData(300)
  });

  return (
    <Table {...getTableProps()}>
      <div className="thead">
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
        {rows.map(row => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()} className="tr">
              {row.cells.map(cell => (
                <Td className="td" {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </Td>
              ))}
            </Tr>
          );
        })}
      </div>
    </Table>
  );
};

export default Index;
