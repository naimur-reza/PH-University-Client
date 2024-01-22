import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { Button } from "antd";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { handleSubmit, register } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin123",
    },
  });

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    toast.loading("Logging in", { duration: 2000 });

    console.log(data);

    // try {
    //   const userInfo = {
    //     id: data.userId,
    //     password: data.password,
    //   };

    //   const res = await login(userInfo).unwrap();
    //   console.log(res);

    //   const user = verifyToken(res.data.accessToken) as TUser;

    //   dispatch(setUser({ user: user, token: res.data.accessToken }));

    //   navigate(`/${user.role}/dashboard`);
    //   toast.success(res.message, { duration: 2500 });
    // } catch (error) {
    //   toast.error("Something went wrong!", { duration: 3000 });
    // }
  };
  // console.log(data);

  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="userId">User Id</label>
        <PHInput name="userId" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <PHInput name="password" type="text" />
      </div>
      <Button htmlType="submit">Login</Button>
    </PHForm>
  );
};

export default Login;
