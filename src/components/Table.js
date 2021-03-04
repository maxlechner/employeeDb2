import React, { useState } from "react";
import { useFilters, useSortBy, useTable } from "react-table";

export default function Table({ columns, data }) {
  // Use the useTable Hook to send the columns and data to build the table
  const [filterInput, setFilterInput] = useState("");
  const {
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow,
    setFilter
  } = useTable({
    columns,
    data
  },
    useFilters,
    useSortBy
  );

  // Table.js


    // Update the state when input changes
    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("name.last", value); 
        setFilterInput(value);
      };

    // Input element



    return (
    <div>
        <input
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"filter by last name"}
        />
        <table class="table table-bordered table-hover" {...getTableProps()}>

            <thead class="thead-dark">
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={
                        column.isSorted
                        ? column.isSortedDesc
                            ? "sort-desc"
                            : "sort-asc"
                        : ""
                    }
                    >
                    {column.render("Header")}
                </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                    })}
                </tr>
                );
            })}
            </tbody>
        </table>
    </div>
    );
}