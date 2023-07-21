import React, { useState } from "react";
import styles from "./Navabar.module.scss";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import { Avatar, Popover } from "technogetic-iron-smart-ui";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopOpen, setIsPopOpen] = useState(false);

  function handleClosePopover() {
    setIsOpen(false);
  }

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
    setIsPopOpen(false);
  };


  return (
    <header>
      <div className={styles.maincontainer}>
        <nav className={styles.container}>
          <div className={styles.navbarbrand}>
          </div>

          <ul className={styles.navbarnav}>
            <li className={styles.navitem}>
              <Popover
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                content={
                  <div>
                    <div className={styles.notification}>
                      Notification
                      <img
                        className={styles.close}
                        src="/assets/cross.svg"
                        alt="close"
                        onClick={handleClosePopover}
                      />
                    </div>
                    <div className={styles.dropdown}>
                      <Avatar
                        onClick={() => { }}
                        size={20}
                        src="/assets/avatar.png"
                      />
                      {/* ... (rest of the code remains the same) */}
                    </div>
                    {/* ... (rest of the code remains the same) */}
                  </div>
                }
                placement="bottom"
                width="300px"
                height="350px"
              >
                <img
                  className={styles.notification}
                  src="/assets/notificationImg.svg"
                  alt="notification"
                  onClick={() => setIsOpen(true)}
                />
              </Popover>
            </li>
            <li className={styles.navitem}>
              <Avatar onClick={() => { }} src="/assets/avatar.png" size={20} />
            </li>
            <li className={styles.navitem}>
              <Popover
                isOpen={isPopOpen}
                setIsOpen={setIsPopOpen}
                content={
                  <div className={styles.myprofilesection}>
                    <div className={styles.userdetails}>
                      <Avatar
                        onClick={() => { }}
                        src="/assets/avatar.png"
                        size={25}
                      />
                    </div>

                    <div className={styles.profilesection}>
                      <div className={styles.flexcol}>
                        <img
                          className={styles.profileicon}
                          src="/assets/profile.svg"
                          alt="profile"
                        />
                      </div>
                    </div>
                  </div>
                }
                height="238px"
                placement="bottom"
                width="224px"
              >
                <img
                  className={styles.dropdown}
                  src="/assets/dropdown.svg"
                  alt="dropdown"
                  onClick={() => setIsPopOpen(!isPopOpen)}
                />
              </Popover>
            </li>
            <li className={styles.navitem}>
              <div className={styles.username_details}>
                <h1>Harry Verma</h1>
                <span className={styles.profile}>Admin</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

