import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TItems = {
  type: string;
  name: string;
  placeholder?: string;
  label: string;
};

const PHInput = ({ type, name, placeholder, label }: TItems) => {
  return (
    <div className="mb-5">
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input
              placeholder={placeholder}
              {...field}
              type={type}
              id={name}
              size="large"
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
