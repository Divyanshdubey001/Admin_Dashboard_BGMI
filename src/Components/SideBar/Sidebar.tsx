import { useState, ReactNode } from "react";
import styles from "./DashboardSidebar.module.scss";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface MenuItem {
  path: string;
  name: string;
  icon: JSX.Element;
  children?: MenuItem[];
}

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem: MenuItem[] = [
    {
      path: "/",
      name: "Room",
      icon: <FaTh />,
      // children: [

      //   {
      //     path: "/date",
      //     name: "Date",
      //     icon: <FaBars />,
      //   },
      //   {
      //     path: "/",
      //     name: "Room Id",
      //     icon: <FaTh />,
      //   },
      //   {
      //     path: "/password",
      //     name: "Password",
      //     icon: <FaUserAlt />,
      //   },
      //   {
      //     path: "/timing",
      //     name: "Timing",
      //     icon: <FaRegChartBar />,
      //   },
      //   {
      //     path: "/map",
      //     name: "Map",
      //     icon: <FaCommentAlt />,
      //   },
      //   {
      //     path: "/squad",
      //     name: "Squad",
      //     icon: <FaShoppingBag />,
      //   },
      // ],
    },
    {
      path: "/createServer",
      name: "Spectator",
      icon: <FaUserAlt />,
      // children: [

      //   {
      //     path: "/Name",
      //     name: "Name",
      //     icon: <FaBars />,
      //   },
      //   {
      //     path: "/match time",
      //     name: "Match time",
      //     icon: <FaTh />,
      //   },
      //   {
      //     path: "/assigned map",
      //     name: "Assigned Map",
      //     icon: <FaUserAlt />,
      //   },
      //   {
      //     path: "/matchroom",
      //     name: "Match Room",
      //     icon: <FaRegChartBar />,
      //   },
      // ]

    },
    {
      path: "/manageTeam",
      name: "Users",
      icon: <FaRegChartBar />,
      // children: [

      //   {
      //     path: "/registeredusers",
      //     name: "Registered Users",
      //     icon: <FaBars />,
      //   },
      //   {
      //     path: "/mobile",
      //     name: "Mobile",
      //     icon: <FaTh />,
      //   },
      //   {
      //     path: "/email",
      //     name: "Email",
      //     icon: <FaUserAlt />,
      //   },
      // ]
    },
    {
      path: "/createTeam",
      name: "Teams",
      icon: <FaCommentAlt />,
      // children: [

      //   {
      //     path: "/registeredteams",
      //     name: "Registered Teams",
      //     icon: <FaBars />,
      //   },
      // ]
    },
  ];

  const handleSubMenuClick = (path: string) => {
    setActiveSubmenu(path === activeSubmenu ? null : path);
  };

  return (
    <div className={styles.container}>
      <div style={{ width: isOpen ? "220px" : "100px" }} className={styles.sidebar}>
        <div className={styles.top_section}>
          <h1 style={{ display: isOpen ? "block" : "none" }} className={styles.logo}>
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "100px" : "0px" }} className={styles.bars}>
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <div key={index}>
            {item.children ? (
              <div className={styles.link} onClick={() => handleSubMenuClick(item.path)}>
                <div className={styles.icon}>{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none", fontSize: "18px" }}
                  className={styles.link_text}
                >
                  {item.name}
                </div>
              </div>
            ) : (
              <NavLink to={item.path} className={styles.link}>
                <div className={styles.icon}>{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none", fontSize: "18px" }}
                  className={styles.link_text}
                >
                  {item.name}
                </div>
              </NavLink>
            )}

            {activeSubmenu === item.path &&
              item.children &&
              item.children.map((childItem, childIndex) => (
                <NavLink to={childItem.path} key={childIndex} className={styles.submenu_link}>
                  <div className={styles.submenu}>
                    <div className={styles.submenu_icon}>{childItem.icon}</div>
                    <div className={styles.submenu_link_text}>{childItem.name}</div>
                  </div>
                </NavLink>
              ))}
          </div>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;

