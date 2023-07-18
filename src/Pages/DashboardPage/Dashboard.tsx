import styles from "./Dashboard.module.scss";
import Sidebar from "../../Components/SideBar/Sidebar";
import { Navbar } from "../../Components/Navbar/Navbar";

export interface IAppProps { }

export function Dashboard() {

  return (
    <>
      <div className={styles.main_container}>
        <Sidebar children={""} />
        <div className={styles.abcd}>
          <div className={styles.sidebar_wrapper}>
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}