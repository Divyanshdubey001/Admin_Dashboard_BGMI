import styles from "./DashboardSidebar.module.scss";
import { useState } from "react";
//@ts-ignore
import { Drawer, MenuItem, Button, Menu } from "technogetic-iron-smart-ui";

type Props = {};

const DashboardSidebar = (props: Props) => {
  const isSidebarOpen = true;
  const [wideSidebar, setWideSidebar] = useState(false);


  const toggleMenuIcons = () => {
    setWideSidebar(!wideSidebar);
  };

  return (
    <>
      <div className={styles.sideBar_btn}>
        <Button onClick={toggleMenuIcons} className={styles.toggleSideBar}>
          <img src="./assets/HamburgerBtn.svg" alt="Sidebar_Btn"></img>
        </Button>

        {isSidebarOpen && (
          <>
            <div
              className={`${styles.sidebar_container} ${wideSidebar ? styles.wide_sidebar : styles.shrunk_sidebar
                }`}
            >
              <div className={styles.sidebar_wrapper}>
                <div className={styles.side_logo}>
                  {!wideSidebar ? (
                    <img src="./assets/tgwrapped_logo.svg" alt="TgNewLogo" />
                  ) : (
                    <img src="./assets/technogeticlogo.svg" alt="Tglogo" className={styles.Tg_logo} />
                  )}
                </div>
                <div className={styles.content_wrapper}>
                  <Drawer align="left" className={styles.menu_container}>
                    <Menu
                      className={styles.menu_wrapper}
                      menuData={[
                        {
                          href: "/Dashboard",
                          icon: wideSidebar ? (
                            <img
                              src="./assets/DashboardImg.svg"
                              alt="dashboard_img"
                            ></img>
                          ) : null,
                          key: "Dashboard",
                          label: wideSidebar ? (
                            "Dashboard"
                          ) : (
                            <img
                              src="./assets/DashboardImg.svg"
                              alt="dashboard_img"
                            ></img>
                          ),
                        },
                        {
                          children: wideSidebar
                            ? [
                              {
                                href: "/Syllabus",
                                key: "Syllabus",
                                label: "Syllabus",
                              },
                              {
                                href: "/Assignment",
                                key: "Assignment",
                                label: "Assignment",
                              },
                              {
                                href: "/student",
                                key: "Students",
                                label: "Students",
                              },
                            ]
                            : null,
                          icon: wideSidebar ? (
                            <img
                              src="./assets/TeacherImg.svg"
                              alt="Teacher_img"
                            ></img>
                          ) : null,
                          key: "Teachers",
                          label: wideSidebar ? (
                            "Teachers"
                          ) : (
                            <img
                              src="./assets/TeacherImg.svg"
                              alt="Teacher_img"
                            ></img>
                          ),
                        },
                        {
                          href: "/Comments",
                          icon: wideSidebar ? (
                            <img
                              src="./assets/CommentsImg.svg"
                              alt="Comments_img"
                            ></img>
                          ) : null,
                          key: "Comments",
                          label: wideSidebar ? (
                            "Comments"
                          ) : (
                            <img
                              src="./assets/CommentsImg.svg"
                              alt="Comments_img"
                            ></img>
                          ),
                        },
                        {
                          href: "/Notifications",
                          icon: wideSidebar ? (
                            <img
                              src="./assets/CommentsImg.svg"
                              alt="Notifications_img"
                            ></img>
                          ) : null,
                          key: "Notifications",
                          label: wideSidebar ? (
                            "Notifications"
                          ) : (
                            <img
                              src="./assets/CommentsImg.svg"
                              alt="Notifications_img"
                            ></img>
                          ),
                        },
                      ]}
                    />
                  </Drawer>
                </div>
              </div>
              <div className={styles.logout}>
                <MenuItem >
                  {wideSidebar ? (
                    <>
                      <img src="./assets/LogoutImg.svg" alt="logout_img" />
                      Logout
                    </>
                  ) : (
                    <img src="./assets/LogoutImg.svg" alt="logout_img" />
                  )}
                </MenuItem>
              </div>
            </div>
          </>
        )}
      </div >
    </>
  );
};

export default DashboardSidebar;
