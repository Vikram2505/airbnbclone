import Head from "next/head";
import Link from "next/link";
import React from "react";

const Dashboard__LeftSideBar = () => {
  return (
    <div>
      <Head>
        <title>Dashobard | Registered Homes</title>
      </Head>
      <div className="nk-nav-scroll">
        <ul className="metismenu" id="menu">
          <li>
            <a className="cursor-pointer">
              <i className="icon-speedometer menu-icon"></i>
              <Link href={"/user/userDashboard"} aria-expanded="false">
                <span className="nav-text">Dashboard</span>
              </Link>
            </a>
          </li>
          <li className="flex">
            <a className="cursor-pointer">
              <i className="icon-envelope menu-icon"></i>{" "}
              <Link href={"/user/registeredHomes"} aria-expanded="false">
                <span className="nav-text">Registered Homes</span>
              </Link>
            </a>
          </li>
          <li className="mega-menu mega-menu-sm">
            <a className="cursor-pointer" aria-expanded="false">
              <i className="icon-user menu-icon"></i>
              <span className="nav-text">Profile</span>
            </a>
          </li>

          <li>
            <a className="cursor-pointer" aria-expanded="false">
              <i className="icon-power menu-icon"></i>{" "}
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard__LeftSideBar;
