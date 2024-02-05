import { useGetAllAcademicSemesterQuery } from "../../../redux/features/AcademicSemester/AcademicSemesterApi";
import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

const AcademicSemester = () => {
  const { data: semesterData } = useGetAllAcademicSemesterQuery(undefined);

  const tableData = semesterData?.data.map(
    ({ _id, name, startMonth, endMonth, year }) => {
      return {
        key: _id,
        name,
        startMonth,
        endMonth,
        year,
      };
    }
  );

  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <Table columns={columns} dataSource={tableData} onChange={onChange} />
    </div>
  );
};

export default AcademicSemester;
