import React from "react";
import Layout from "../layout";
import ProfileCard from "../components/ProfileCard";
import BasicInfo from "../components/BasicInfo";
import ContactInformation from "../components/ContactInformation";
import EmergencyContacts from "../components/EmergencyContacts";
import AddressDetails from "../components/AddressDetails";
import License from "../components/License";
import MilitaryStatus from "../components/MilitaryStatus";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex ">
        <ProfileCard />
        <div className="flex flex-col flex-1 mr-6">
          <BasicInfo />
          <ContactInformation />
          <EmergencyContacts />
          <AddressDetails />
          <License />
          <MilitaryStatus />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
