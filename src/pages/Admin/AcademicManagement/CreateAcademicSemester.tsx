import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions, yearOptions } from "../../../constants/global";
import { semesters } from "../../../constants/semester";

const CreateAcademicSemester = () => {
  const onsubmit = (data: FieldValues) => {
    const name = semesters[Number(data.name) - 1].label;
    const semesterData = {
      name,
      code: data.name,
      startYear: data.year,
      startMonth: data["start-month"],
      endMonth: data["end-month"],
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={7}>
        <PHForm onSubmit={onsubmit}>
          <PHSelect label="name" name="name" options={semesters} />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start-month"
            name="start-month"
            options={monthOptions}
          />
          <PHSelect label="End-month" name="end-month" options={monthOptions} />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
