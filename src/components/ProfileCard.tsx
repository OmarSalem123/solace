import React from "react";
import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils";

const ProfileCard = () => {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        marginLeft: "16px",
        borderRadius: "24px",
        padding: "24px",
        height: "464px",
        width: "393px",
        disply: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="p-[16px]">
        <img
          src="/assets/Subtract.png"
          alt="avatar"
          className="rounded-xl w-[120px] h-[120px]"
        />
        <div className="flex flex-col gap-[8px] py-[16px]">
          <h3 className="font-bold text-[20px] text-[#051D49]">John Smith</h3>
          <p className="text-[16px] text-[#737791]">Senior Product Manager</p>
        </div>
        <hr className="text-[#ECEEF1] my-3" />
        <div className="flex flex-col gap-[8px] py-[16px]">
          <Link to={"/"}>
            <button
              className={cn(
                "rounded-lg text-start p-[16px] text-[18px] w-full h-[60px]",
                pathname === "/"
                  ? "text-[#0F6CBD] bg-[#F4F8FE] font-[500]"
                  : "text-[#051D49] font-[400]"
              )}
            >
              Personal Information
            </button>
          </Link>
          <Link to={"/FinancialInformation"}>
            <button
              className={cn(
                "rounded-lg text-start p-[16px] text-[18px] w-full h-[60px]",
                pathname === "/FinancialInformation"
                  ? "text-[#0F6CBD] bg-[#F4F8FE] font-[500]"
                  : "text-[#051D49] font-[400]"
              )}
            >
              Financial Information
            </button>
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default ProfileCard;
