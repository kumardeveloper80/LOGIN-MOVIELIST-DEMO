import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./Login.scss";
import { useAppDispatch } from "../../redux/store";
import authAction from "../../redux/actions/login.action";

type UserSubmitForm = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();



  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must be at least 5 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: UserSubmitForm) => {
    let result = await dispatch(authAction(data));

    if (result?.payload?.access_token) {
      history.push("/Movies");
    }
    else {
      toast.error("Failed to login", { position: "top-right" });
    }
  };

  return (
    <div className="background">
      <h2 className="login-heading">Login</h2>
      <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>

          <div className="form-group-buttons">
            <button type="button" onClick={() => reset()} className="btn-reset">
              Reset
            </button>
            <button type="submit" className="btn-login">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
