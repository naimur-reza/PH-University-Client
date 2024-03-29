import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { Button, Row } from "antd";
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

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    toast.loading("Logging in", { duration: 2000 });

    console.log(data);

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      console.log(res);

      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));

      navigate(`/${user.role}/dashboard`);
      toast.success(res.message, { duration: 2500 });
    } catch (error: any) {
      // toast.error("Something went wrong!", { duration: 3000 });
      if (error.status === 404) {
        toast.error("User not found", { duration: 3000 });
      }
      if (error.status === 403) {
        toast.error("Invalid credentials", { duration: 3000 });
      }
    }
  };

  const defaultValues = {
    userId: "A-0001",
    password: "admin123",
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput label="Id" placeholder="user id" name="userId" type="text" />

        <PHInput
          label="password"
          placeholder="password"
          name="password"
          type="text"
        />

        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
