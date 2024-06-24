import React from "react";
import { Box } from "@mui/material";
import SideBar from "./components/sidebar";
import NavBar from "./components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#EEEEEE",
        display: "flex",
        flexDirection: "row",
        color: "#737791",
        gap: 3,
        overflowY: "hidden",
        height: "100vh",
      }}
    >
      <SideBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflowY: "scroll",
        }}
      >
        <NavBar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
