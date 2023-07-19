import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import styles from "../Login/auth.module.scss";
//@ts-ignore
import { Button, Input } from "technogetic-iron-smart-ui";

export function ResetPassword(): JSX.Element {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    const isValid = validateEmail(value);
    setIsEmailValid(isValid);
    setIsButtonEnabled(isValid);
  };
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.background_container}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="./assets/logo.svg" alt="Tg-logo" />
          </div>
          <div>
            <h2>Forgot Password</h2>
            <p className={styles.heading}>
              Please enter your registered email id or mobile to reset your
              password
            </p>
          </div>
          <div className={styles.input_box}>
            <label className={styles.email} htmlFor="email">
              Email
            </label>
            <Input
              type="email"
              id="email"
              className={`${styles.email_wrapper} ${isEmailValid ? "" : styles.invalid
                }`}
              placeholder="Enter Email"
              value={email}
              onChange={handleEmailChange}
            />
            {!isEmailValid && (
              <p className={styles.error_message}>Please enter a valid email</p>
            )}
          </div>
          <div className={styles.checkbox_wrapper}>
            <input type="checkbox" />
            <span>Remember for 30 days</span>
          </div>
          <div className={styles.button_wrapper}>
            <Button
              variant="contained"
              className={`${styles.SignIn_button} ${isButtonEnabled ? styles.blueButton : ""
                }`}
              disabled={!isButtonEnabled}
            >
              Recover Password
            </Button>
          </div>
          <div className={styles.signin}>
            <span>
              <Link to="/">Remember it? &nbsp; Sign in here</Link>
            </span>
          </div>
        </div>
        <div className={styles.girlImg_wrapper}>
          {/* <img src="./assets/pubgImg.png" alt="girl-img" /> */}
        </div>
      </div>
    </div>
  );
}
