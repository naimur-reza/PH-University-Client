import { Form, Select } from "antd";
import React, { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type TPHWatchSelectProps = {
  name: string;
  label: string;
  options?: { value: string; label: string }[];
  disabled?: boolean;
  mode?: "multiple" | "tags";
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
};

const PHWatchSelect = ({
  label,
  options,
  name,
  disabled,
  mode,
  onValueChange,
}: TPHWatchSelectProps) => {
  const { control } = useFormContext();

  const inputValue = useWatch({
    control,
    name,
  });

  useEffect(() => {
    onValueChange(inputValue);
  }, [inputValue]);

  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            {...field}
            options={options}
            size="large"
            disabled={disabled}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHWatchSelect;
