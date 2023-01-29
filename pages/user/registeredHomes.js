import React from "react";
import Header from "../../components/Header";
import Dashboard__LeftSideBar from "../../components/UserDashboard/Dashboard__LeftSideBar";

const registeredHomes = () => {
  return (
    <div className="mt-24">
      <div className="nk-sidebar">
        <Dashboard__LeftSideBar />
      </div>

      <Header />

      <div className="content-body">
        <div className="container-fluid mt-3">
          <h1>Registered home</h1>
        </div>
      </div>
    </div>
  );
};

export default registeredHomes;
