import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { SignupSchema } from "../../Schemas/SignupSchemas";
import { useNavigate, Link } from "react-router-dom";
//@ts-ignore
import { Button, Input } from "technogetic-iron-smart-ui";
import styles from "./auth.module.scss";
import sendRequest from "../../Services/auth/auth_All_Api";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleRememberMe(event: any) {
    setRememberMe(event.target.checked);
  }

  useEffect(() => {
    const rememberMeValue = localStorage.getItem("rememberMe") === "true";
    setRememberMe(rememberMeValue);
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const { email, password } = values;
      if (rememberMe) {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("rememberMe");
      }
      try {
        const response = await sendRequest("/login", {
          method: "POST",
          body: { email, password },
        });

        console.log("email", values.email);
        console.log("password", values.password);

        setIsLoading(false);
        console.log("response", response);

        if (response.status === 200) {
          localStorage.setItem("jwtToken", response.data.token);
          navigate("/adminDashboard");
        }
        else {
          setError("Invalid email or password");
        }
       
      } catch (error: any) {
        setIsLoading(false);
        setError("Invalid email or password");
      }
    },
  });

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail) {
      setFieldValue("email", storedEmail);
    }
    if (storedPassword) {
      setFieldValue("password", storedPassword);
    }
  }, [setFieldValue]);

  return (
    <div className={styles.main_container}>
      <div className={styles.background_container}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="./assets/technogeticlogo.svg" alt="Tg-logo" />
          </div>

          <div>
            <h2>Hello Admin !</h2>
            <p className={styles.heading}>
              Welcome back! Please enter your details
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
            {error && <div className={styles.error}>{error}</div>}
              <div className={styles.input_box}>
                <label className={styles.email} htmlFor="email">
                  Email ID
                </label>
                <Input
                  id="email"
                  className={styles.email_wrapper}
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <div className={styles.error}>{errors.email}</div>
                )}
              </div>

              <div className={styles.input_box}>
                <label className={styles.password} htmlFor="password">
                  Password
                </label>
                <Input
                  id="password"
                  className={styles.password_wrapper}
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Enter password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <div className={styles.error}>{errors.password}</div>
                )}
              </div>

              <div className={styles.checkbox_wrapper}>
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMe}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>

              <div className={styles.button_wrapper}>
                <Button
                  disabled={isLoading}
                  className={styles.forgetbutton}
                  variant="contained"
                  type="submit"
                  onClick={handleSubmit}
                >
                  {isLoading ? "Loading..." : "Sign in"}
                </Button>
              </div>

              <div className={styles.signin}>
                <span>
                  <Link to="/resetpassword">Forget your Password?</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.girlImg_wrapper}>
          <img src="./assets/bgmiImg.svg" alt="bgmiImg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
