import styles from "./auth.module.scss";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
//@ts-ignore
import { Button, Input } from "technogetic-iron-smart-ui";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleRememberMe(event: { target: any }) {
    setRememberMe(event.target.checked);
  }

  return (
    <div className={styles.main_container}>
      <div className={styles.background_container}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="./assets/logo.svg" alt="Tg-logo" />
          </div>

          <div>
            <h2>Welcome Back</h2>
            <p className={styles.heading}>
              Welcome back! Please enter your details
            </p>
          </div>
          <div>
            <form>
              <div className={styles.input_box}>
                <label className={styles.email} htmlFor="username">
                  User Name
                </label>
                <Input
                  id="username"
                  className={styles.email_wrapper}
                  type="text"
                  name="username"
                  autoComplete="off"
                  placeholder="Enter Username"
                />
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
                />
              </div>

              <div className={styles.checkbox_wrapper}>
                <input type="checkbox" onChange={handleRememberMe} />
                <span>Remember for 30 days</span>
              </div>

              <div className={styles.button_wrapper}>
                <Button
                  disabled={isLoading}
                  className={styles.forgetbutton}
                  varient="contained"
                ></Button>
              </div>

              <div className={styles.signin}>
                <span>
                  <Link to="/resetpassword"> Forget your Password?</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.girlImg_wrapper}>
          {/* <img src="./assets/pubgImg.png" alt="girl-img" /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
