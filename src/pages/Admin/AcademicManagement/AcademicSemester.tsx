import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

import { useState } from "react";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TQueryParam } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.types";

export type TTableData = Pick<
  TAcademicSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);

  const { data: semesterData, isFetching } = useGetAllSemestersQuery(params);

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

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
      ],
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

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    const queryParams: TQueryParam[] = [];
    filters.name?.forEach((name) => {
      queryParams.push({ name: "name", value: name });
    });

    filters.year?.forEach((year) => {
      queryParams.push({ name: "year", value: year });
    });

    setParams(queryParams);
    console.log(pagination, filters, sorter, extra);
    console.log(queryParams);
  };

  return (
    <div>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
      />
    </div>
  );
};

export default AcademicSemester;
