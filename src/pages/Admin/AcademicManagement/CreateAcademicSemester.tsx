import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { FieldValues } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";

const CreateAcademicSemester = () => {
  const onsubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={7}>
        <PHForm onSubmit={onsubmit}>
          <PHInput
            label="name"
            type="text"
            name="name"
            placeholder="semester-name"
          />

          <PHSelect label="semester" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
