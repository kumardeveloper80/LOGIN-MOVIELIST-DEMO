import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./Signup.scss";
import { useAppDispatch } from "../../redux/store";
import signupAction from "../../redux/actions/signup.action";
import formBg from '../../assets/images/formBg.jpg'

type UserSubmitForm = {
  email: string;
  password: string;
  movies: string[];
};

const Signup = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must be at least 5 characters")
      .max(40, "Password must not exceed 40 characters"),
    movies: Yup.string().required("Movies are required"),
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
    let body = {
      email: data.email,
      password: data.password,
      movies: data.movies.toString().split(/[.,!,?,;'']/),
    };

    let result = await dispatch(signupAction(body));

    if (result?.payload?.id) {
      history.push("/Login");
    } else {
      toast.error("Failed to signup", { position: "top-right" });
    }
  };

  return (
    <div
      className="formTemplate"
      style={{
        backgroundImage: `url('${formBg}')`,
      }}
    >
      <div className="formCard">
        <h2 className="formCard__title">Register</h2>
        <div className="formCard__form">
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
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className="form-group">
              <label>Movies</label>
              <input
                type="movies"
                {...register("movies")}
                className={`form-control ${errors.movies ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.movies?.message}</div>
            </div>
            <div className="formCard__form-button">
              <button
                type="button"
                onClick={() => reset()}
                className="button button--border"
              >
                Reset
              </button>
              <button type="submit" className="button">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="formCard__footer">
          <p className="formCard__footer-text">
            Already registered ?{" "}
            <span onClick={() => history.push("/Login")}> Login</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
