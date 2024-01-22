import { Input } from "antd";
import { Controller } from "react-hook-form";

type TItems = {
  type: string;
  name: string;
  placeholder: string;
  label: string;
};

const PHInput = ({ type, name, placeholder, label }: TItems) => {
  return (
    <div className="mb-5">
      {label && label}
      <Controller
        name={name}
        render={({ field }) => (
          <Input placeholder={placeholder} {...field} type={type} id={name} />
        )}
      />
    </div>
  );
};

export default PHInput;
