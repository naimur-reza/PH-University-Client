import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
// import { toast } from "sonner";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { semesterStatusOptions } from "../../../constants/semester";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";

const SemesterRegistration = () => {
  const { data: aSemesters, isLoading: sLoading } = useGetAllSemestersQuery([
    {
      name: "sort",
      value: "year",
    },
  ]);

  const semesters = aSemesters?.data?.map((semester) => ({
    label: `${semester.name} ${semester.year}`,
    value: semester._id,
  }));

  const onsubmit = async (data: FieldValues) => {
    // const name = semesters[Number(data.name) - 1].label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      endYear: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);

    // try {
    //   const semester = await addSemester(semesterData).unwrap();
    //   if (semester.success) toast.success(semester.message);
    // } catch (error: any) {
    //   if (error?.data.message) toast.error(error.data.message);
    //   else toast.error("An error occurred");
    // }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={7}>
        <PHForm onSubmit={onsubmit}>
          <PHSelect
            label="Academic semester"
            name="academicSemester"
            options={semesters}
            disabled={sLoading}
          />
          <PHSelect
            label="Status"
            name="status"
            options={semesterStatusOptions}
          />
          <PHDatePicker label="Start-date" name="startDate" />
          <PHDatePicker label="End-date" name="endDate" />
          <PHInput type="text" label="Min credit" name="minCredit" />
          <PHInput type="text" label="Max credit" name="maxCredit" />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
