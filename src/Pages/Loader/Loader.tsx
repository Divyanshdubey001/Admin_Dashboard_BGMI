import { useEffect } from "react";
import styles from "./loader.module.scss";
import { useNavigate } from "react-router-dom";

type Props = {};

const Loader = (props: Props) => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/login");
        }, 2000)
    })
    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.background_container}>
                    <div className={styles.container}>
                        <div className={styles.logo}>
                            <img src="./assets/technogeticlogo.svg" alt="Tg-logo"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loader;