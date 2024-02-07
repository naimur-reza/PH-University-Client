import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { TQueryParam, TStudent } from "../../../types";
import { useState } from "react";

export type TTableData = Pick<TStudent, "gender" | "id" | "fullName">;

const StudentsData = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);

  const [params, setParams] = useState<TQueryParam[]>([]);
  const { data: sData, isFetching } = useGetAllStudentsQuery([
    {
      name: "limit",
      value: limit,
    },
    {
      name: "page",
      value: page,
    },
    {
      name: "sort",
      value: "id",
    },
    ...params,
  ]);

  const metaData = sData?.meta;

  const tableData = sData?.data.map(({ _id, fullName, gender, id }) => {
    return {
      key: _id,
      fullName,
      gender,
      id,
    };
  });

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Student name",
      dataIndex: "fullName",
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
      ],
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Roll",
      dataIndex: "id",
    },
    {
      title: "Actions",
      render: () => (
        <Space>
          <Button>Edit</Button>
          <Button>Details</Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
      width: "1%",
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
    <div className="space-y-5">
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
      />

      <Pagination
        defaultCurrent={1}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.totalPage}
        total={metaData?.total}
      />
    </div>
  );
};

export default StudentsData;
