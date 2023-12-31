import styles from "./credential.module.scss";
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ResetPasswordSchema } from "../../Schemas/SignupSchemas";
//@ts-ignore
import { Button, Input } from "technogetic-iron-smart-ui";
import sendRequest from "../../Services/auth/auth_All_Api";

const UpdateCredential = () => {

  const token = window.location.href.split("?")[1].split("=")[1]
  console.log(token)

  const navigate = useNavigate();

  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values) => {
      const { newPassword, confirmPassword } = values;

      try {

        const response = await sendRequest(`reset-password?token=${token}`, {
          method: "POST",
          body: { newPassword, confirmPassword },
        });
        if (response.status === 200) {
          navigate("/UpdateCredSuccess");
        }
        else {
          // setError("Invalid email or password");
        }
       
      } catch (error: any) {
      }
    },
  });


  return (
    <div className={styles.main_container}>
      <div className={styles.background_container}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="./assets/technogeticlogo.svg" alt="Tg-logo"></img>
          </div>

          <div>
            <h2>Reset Password</h2>
            <p className={styles.heading}>
              Please enter your password and confirm the password
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className={styles.input_box}>
                <label htmlFor="newPassword" className={styles.password}>
                  New password
                </label>

                <Input
                  id="newPassword"
                  className={styles.password_wrapper}
                  name="newPassword"
                  autoComplete="off"
                  placeholder="Enter password"
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Input>
                <div className={styles.error}>
                  {errors.newPassword && touched.newPassword ? (
                    <p>{(errors.newPassword = "Password must be at least 6 characters")}</p>
                  ) : null}
                </div>
              </div>

              <div className={styles.input_box}>
                <label
                  htmlFor="confirmPassword"
                  className={styles.password}
                >
                  Confirm New Password
                </label>
                <Input
                  id="confirmPassword"
                  className={styles.password_wrapper}
                  name="confirmPassword"
                  autoComplete="off"
                  placeholder="Enter new password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Input>
                <div className={styles.error}>
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <p>{(errors.confirmPassword = "Both passwords must match")}</p>
                  ) : null}
                </div>
              </div>

              <div className={styles.button_wrapper}>
                <Button
                  varient="contained"
                  className={styles.forgetbutton}
                  onClick={handleSubmit}
                >
                  Update
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.girlImg_wrapper}>
          <img src="./assets/bgmiImg.svg" alt="bgmiImg"></img>
        </div>
      </div>
    </div>
  );
};

export default UpdateCredential;




// // const newPasswordShown = false;
// // const confirmPasswordShown = false;
// // const navigate = useNavigate();
// // // const { verification: { otp }, resetPassword, resetPassword: { email } } = useSelector((state: any) => state)
// const initialValues = {
//   newPassword: "",
//   confirmPassword: "",
// };
// // console.log(resetPassword)
// const onSubmit = async (values: any) => {
//   if (values.newPassword === values.confirmPassword) {
//     // await dispatch(updatepassword({ ...values, otp, email }));
//     // navigate("/user_credential_success");
//   }
// }

// const {
//   values,
//   touched,
//   errors,
//   handleSubmit,
//   handleChange,
//   handleBlur,
// } = useFormik({
//   initialValues,
//   validationSchema: ResetPasswordSchema,
//   onSubmit: onSubmit
// });

// const onclickHandler = () => {
//   handleSubmit();
// };