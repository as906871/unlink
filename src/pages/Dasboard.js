import React from "react";
import LaunchTab from "../components/Tabs/LaunchTab";
import SidebarLayout from "../Common/SidebarLayout";

const Dashboard = () => {

  return (
    <SidebarLayout title="Space X">
      <LaunchTab />
    </SidebarLayout>
  );
};

export default Dashboard;
