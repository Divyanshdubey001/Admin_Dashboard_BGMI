import { useNavigate } from "react-router-dom";
import styles from "./credential.module.scss";
//@ts-ignore
import { Button } from "technogetic-iron-smart-ui";

type Props = {};

const UpdateCredSuccess = (props: Props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    }
    return (
        <>
            <div className={styles.maincontainer}>
                <div className={styles.background_container}>
                    <div className={styles.container}>
                        <div className={styles.logo}>
                            <img src="./assets/technogeticlogo.svg" alt="Tg-logo"></img>
                        </div>
                        <div className={styles.heading_wrapper}>
                            <h2>Congratulations!!</h2>
                            <p className={styles.heading}>
                                Hurrah! You have successfully updated your password
                            </p>
                        </div>
                        <div>
                            <div className={styles.mail_success}>
                                {/* <img src="./assets/MailVerifiedBg.gif" alt="gifImg"></img> */}
                            </div>
                            <div className={styles.button_wrapper}>
                                <Button varient="contained" className={styles.forgetbutton} onClick={handleClick}>
                                    Sign in
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.girlImg_wrapper}>
                        <img src="./assets/bgmiImg.svg" alt="bgmiImg"></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateCredSuccess;
