import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

const PHDatePicker = ({ name, label }: { name: string; label: string }) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <DatePicker
            style={{ width: "100%" }}
            size="large"
            {...field}
            name={name}
          />
        </Form.Item>
      )}
    />
  );
};

export default PHDatePicker;
