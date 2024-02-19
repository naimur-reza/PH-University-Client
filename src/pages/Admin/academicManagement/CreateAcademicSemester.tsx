import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions, yearOptions } from "../../../constants/global";
import { semesters } from "../../../constants/semester";
import { zodResolver } from "@hookform/resolvers/zod";
import { semesterValidationSchema } from "../../../schemas/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";

const CreateAcademicSemester = () => {
  const [addSemester, { isLoading }] = useAddAcademicSemesterMutation();

  const onsubmit = async (data: FieldValues) => {
    const name = semesters[Number(data.name) - 1].label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      endYear: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    try {
      const semester = await addSemester(semesterData).unwrap();
      if (semester.success) toast.success(semester.message);
    } catch (error: any) {
      if (error?.data.message) toast.error(error.data.message);
      else toast.error("An error occurred");
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={7}>
        <PHForm
          onSubmit={onsubmit}
          resolver={zodResolver(semesterValidationSchema)}>
          <PHSelect label="name" name="name" options={semesters} />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start-month"
            name="startMonth"
            options={monthOptions}
          />
          <PHSelect label="End-month" name="endMonth" options={monthOptions} />

          <Button htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
