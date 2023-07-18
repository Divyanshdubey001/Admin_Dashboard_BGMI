import styles from "./Dashboard.module.scss";
import DashboardSidebar from "../../Components/SideBar/DashboardSidebar"
import { Navbar } from "../../Components/Navbar/Navbar";

export interface IAppProps { }

export function Dashboard() {

  return (
    <>
      <div className={styles.main_container}>
        <DashboardSidebar />
        <div className={styles.abcd}>
          <div className={styles.sidebar_wrapper}>
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}