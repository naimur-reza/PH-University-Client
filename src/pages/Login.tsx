import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { Button } from "antd";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();

  const { handleSubmit, register } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin123",
    },
  });

  const [login, { error }] = useLoginMutation();

  const onsubmit = async (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();
    console.log(res);

    const user = verifyToken(res.data.accessToken);

    dispatch(setUser({ user: user, token: res.data.accessToken }));
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
