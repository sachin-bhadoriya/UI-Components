import React, { useEffect, useMemo, useState } from "react";
import "./dataTable.css";
import { HiMiniArrowsUpDown } from "react-icons/hi2";

const DataTable = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setData([
        { id: 1, name: "Sachin", age: 24 },
        { id: 2, name: "Rahul", age: 28 },
        { id: 3, name: "Anita", age: 22 },
        { id: 4, name: "Riya", age: 26 },
        { id: 5, name: "Amit", age: 30 },
        { id: 6, name: "Neha", age: 23 },
        { id: 7, name: "Vikram", age: 27 },
        { id: 8, name: "Pooja", age: 25 },
        { id: 9, name: "Manish", age: 29 },
        { id: 10, name: "Sanya", age: 21 },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const sortedData = useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div style={{ paddingTop: "100px" }}>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col.key)}
                style={{ cursor: "pointer" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  {col.label}
                  <HiMiniArrowsUpDown
                    color={
                      sortConfig.key === col.key ? "#000" : "#c1c1c1ff"
                    }
                    size={13}
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center" }}>
                No data available
              </td>
            </tr>
          ) : (
            sortedData.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col.key}>{row[col.key]}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
