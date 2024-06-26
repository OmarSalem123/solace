import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { cn } from "../utils";

const navLinks = [
  {
    name: "Dashboard",
    icon: "/assets/dashboard.svg",
    link: "/",
  },
  {
    name: "Insights",
    icon: "/assets/insights.svg",
    link: "/Insights",
  },
  {
    name: "Report",
    icon: "/assets/report.svg",
    link: "/Report",
  },
  {
    name: "Team",
    icon: "/assets/team.svg",
    link: "/Team",
  },
  {
    name: "Supply",
    icon: "/assets/supply.svg",
    link: "/Supply",
  },
];

const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: 2,
        disply: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: "108px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: "center",
          width: "100%",
        }}
      >
        <img src="/assets/logo.svg" className="w-[45px] h-auto" />
        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: "24px",
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                className={cn(
                  "w-[48px] h-[48px] flex justify-center items-center",
                  pathname.startsWith(item.link) && "rounded-xl bg-[#003FAD]"
                )}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-[24px] h-[24px]"
                />
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
