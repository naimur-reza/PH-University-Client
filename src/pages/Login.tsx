import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { Button } from "antd";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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

  const onsubmit = async (data: FieldValues) => {
    toast.loading("Logging in", { duration: 2000 });

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
    } catch (error) {
      toast.error("Something went wrong!", { duration: 3000 });
    }
  };
  // console.log(data);

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
