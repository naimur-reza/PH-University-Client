import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { Button } from "antd";

const Login = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin123",
    },
  });

  const [login, { data, error }] = useLoginMutation();

  const onsubmit = (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };

    login(userInfo);
  };
  console.log(data);

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <input
        className="border"
        {...register("userId")}
        type="text"
        id="userId"
      />
      <input
        className="border"
        {...register("password")}
        type="text"
        id="password"
      />
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
