import React from "react";
import Layout from "../layout";
import ProfileCard from "../components/ProfileCard";
import BankInformation from "../components/BankInformation";

const FinInfo = () => {
  return (
    <Layout>
      <div className="flex ">
        <ProfileCard />
        <div className="flex flex-col flex-1 mr-6">
          <BankInformation />
        </div>
      </div>
    </Layout>
  );
};

export default FinInfo;
