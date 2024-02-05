import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean }[];
};

const PHSelect = ({ label, options, name }: TPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Select defaultValue="lucy" {...field} options={options} />
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
