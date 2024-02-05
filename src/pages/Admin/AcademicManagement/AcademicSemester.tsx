import { useGetAllAcademicSemesterQuery } from "../../../redux/features/AcademicSemester/AcademicSemesterApi";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TSemester } from "../../../types/academicSemester.type";

export type TTableData = Pick<
  TSemester,
  "_id" | "name" | "year" | "startMonth" | "endMonth"
>;

const AcademicSemester = () => {
  const { data: semesterData } = useGetAllAcademicSemesterQuery(undefined);

  const tableData = semesterData?.data.map(
    ({ _id, name, startMonth, endMonth, year }) => {
      return {
        _id,
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

  const onChange: TableProps<TTableData>["onChange"] = (
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
